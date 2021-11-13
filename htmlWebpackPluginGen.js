const HTMLWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');

// Array of the html webpack plugins
const htmlPlugins = [];

const rootPath = path.resolve(__dirname, 'site');

// File path must be an absolute path
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
];

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

  // console.log('Not Wrapping');
  htmlPlugins.push(
    new HTMLWebpackPlugin({
      template: fullPath.replaceAll('\\', '/'),
      inject: 'body',
      filename: `${dirName ? dirName.replaceAll('\\', '/') : ''}`,
      chunks,
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

        const filteredChunks = fileChunks.filter(
          chunk => fullPath === chunk.filepath
        );

        let jsChunk = [];

        if (filteredChunks.length) {
          if (filteredChunks.length > 1) {
            // use the first one
            // Or simply throw an error
          }

          jsChunk = filteredChunks[0].chunkNames;
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

// console.log('Received Result: ', getHtmlArray());
