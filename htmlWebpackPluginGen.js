const HTMLWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');

// Array of the html webpack plugins
const htmlPlugins = [];

const rootPath = path.resolve(__dirname, 'web/html');

// HTML files in these paths will not be wrapped in a folder at the destination
const excludeWrap = ['_includes', '_layouts', '_projects'];

// File path must be an absolute path
const fileChunks = [
  { filepath: path.resolve(rootPath, 'index.html'), chunkNames: ['home'] },
  { filepath: path.resolve(rootPath, 'about.html'), chunkNames: ['about'] },
  { filepath: path.resolve(rootPath, 'contact.html'), chunkNames: ['contact'] },
  {
    filepath: path.resolve(rootPath, 'portfolio.html'),
    chunkNames: ['portfolio'],
  },
  {
    filepath: path.resolve(rootPath, '_layouts/default.html'),
    chunkNames: ['main'],
  },
  {
    filepath: path.resolve(rootPath, '_layouts/defaultWhite.html'),
    chunkNames: ['main'],
  },
  {
    filepath: path.resolve(rootPath, '_layouts/project.html'),
    chunkNames: ['project'],
  },
];

// Checks is a file/dir exists at root path
function checkFileAtRoot(rootPath, filename) {
  let exists = false;
  const statObj = fs.statSync(path.resolve(rootPath, filename), {
    throwIfNoEntry: false,
  });

  if (!statObj) {
    exists = false;
  } else if (statObj.isDirectory() || statObj.isFile()) {
    exists = true;
  }
  return exists;
}

// Returns a wrapped html file
function wrapFile(filename) {
  return `${filename.split('.')[0]}/index.html`;
}

// This function processes the files and transforms them
function processFile(dir, filename, chunks, wrap) {
  const fullPath = path.resolve(dir, filename);

  // If file is at root and is index.html
  if (checkFileAtRoot(rootPath, filename) && filename === 'index.html') {
    htmlPlugins.push(
      new HTMLWebpackPlugin({
        template: fullPath.replaceAll('\\', '/'),
        inject: 'body',
        filename: `${filename}`,
        chunks,
      })
    );
  } else {
    const dirName = path
      .dirname(fullPath)
      .substring(
        path.dirname(fullPath).lastIndexOf(rootPath) + rootPath.length + 1
      );

    if (wrap) {
      // console.log('Wrapping');
      htmlPlugins.push(
        new HTMLWebpackPlugin({
          template: fullPath.replaceAll('\\', '/'),
          inject: 'body',
          filename: `${dirName.replaceAll('\\', '/')}${
            dirName ? '/' : ''
          }${wrapFile(filename)}`,
          chunks,
        })
      );
    } else {
      // console.log('Not Wrapping');
      htmlPlugins.push(
        new HTMLWebpackPlugin({
          template: fullPath.replaceAll('\\', '/'),
          inject: 'body',
          filename: `${dirName.replaceAll('\\', '/')}${
            dirName ? '/' : ''
          }${filename}`,
          chunks,
        })
      );
    }
  }
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

        let wrapFile = true;

        // Handling file wrapping
        if (
          excludeWrap.filter(
            exclude => fullPath.indexOf(path.resolve(rootPath, exclude)) > -1
          ).length > 0
        ) {
          wrapFile = false;
        }

        processFile(dir, file.name, jsChunk, wrapFile);
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

// // Chunks output
// console.log(
//   'Received Chunks Result: ',
//   htmlPlugin.map(plugin => plugin.userOptions.chunks)
// );
