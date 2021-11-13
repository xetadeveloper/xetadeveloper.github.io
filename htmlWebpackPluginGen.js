const HTMLWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');

// Array of the html webpack plugins
let htmlPlugins = [];

const rootPath = path.resolve(__dirname, 'site');

// Specify html files that have chunks (absolute path only)
const fileChunks = [
  { filepath: path.resolve(rootPath, 'index.html'), chunkNames: ['home'] },
  {
    filepath: path.resolve(rootPath, 'about/index.html'),
    chunkNames: ['about'],
  },
  {
    filepath: path.resolve(rootPath, 'contact/index.html'),
    chunkNames: ['contact'],
  },
  {
    filepath: path.resolve(rootPath, 'portfolio/index.html'),
    chunkNames: ['portfolio'],
  },
  {
    filepath: path.resolve(rootPath, 'projects'),
    chunkNames: ['project'],
  },
];

// Specify directories where all the html files have same chunk (absolute path only)
const dirChunks = [
  {
    dirpath: path.resolve(rootPath, 'projects'),
    chunkNames: ['project'],
  },
];

const globalChunks = ['main'];

// This function processes the files and transforms them
function processFile(dir, filename, chunks) {
  const fullPath = path.resolve(dir, filename);

  // console.log('fullPath: ', fullPath);

  const index =
    path.dirname(path.resolve(fullPath)).lastIndexOf(rootPath) +
    rootPath.length +
    1;

  const dirName = fullPath.substring(index);

  // console.log('DirName: ', dirName, '\n\n');

  htmlPlugins.push(
    new HTMLWebpackPlugin({
      template: fullPath.replaceAll('\\', '/'),
      inject: 'body',
      filename: `${dirName ? dirName.replaceAll('\\', '/') : ''}`,
      chunks: [...globalChunks, ...chunks],
      minify: false,
    })
  );
}

// This function is the main function
function transform(dir, fileChunks) {
  const regex = /(\.html|\.md)$/i;
  const files = fs.readdirSync(dir, { withFileTypes: true });

  files.map(file => {
    const fullPath = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      transform(fullPath, fileChunks);
    } else if (file.isFile()) {
      if (regex.test(file.name)) {
        const fullPath = path.resolve(dir, file.name);
        let jsChunk = [];

        // For files that are in a directory that should have one chunk
        const filteredDirChunks = dirChunks.filter(dirChunk => {
          return path.dirname(fullPath) === dirChunk.dirpath;
        });

        // For specific file chunks
        const filteredFileChunks = fileChunks.filter(
          chunk => fullPath === chunk.filepath
        );

        if (filteredDirChunks.length) {
          if (filteredDirChunks.length > 1) {
            // use the first one
            // Or simply throw an error
          }

          jsChunk.push(...filteredDirChunks[0].chunkNames);
        }

        if (filteredFileChunks.length) {
          if (filteredFileChunks.length > 1) {
            // use the first one
            // Or simply throw an error
          }

          jsChunk.push(...filteredFileChunks[0].chunkNames);
        }

        // Don't wrap files
        processFile(dir, file.name, jsChunk);
      }
    }
  });

  // console.log('Files read: ', files);
}

function getHtmlArray() {
  if (htmlPlugins.length) {
    htmlPlugins = htmlPlugins.slice(0, 0);
  }

  // Run transformation
  transform(rootPath, fileChunks);

  return htmlPlugins;
}

module.exports = getHtmlArray;

// console.log(
//   'Received Result: ',
//   getHtmlArray().map(item => item.userOptions.chunks)
// );
