const path = require('path');
const { merge } = require('webpack-merge');
const webpack_common = require('./webpack.common');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(webpack_common, {
  // Webpack mode
  mode: 'production',

  // Options for the webpack output
  output: {
    //creates a content hash and appends to file name for cache busting
    filename: '[name].[contenthash].js',

    // path to ouptut build folder
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new MiniCSSExtractPlugin({
      // Using a function instead of string, we can create folders for the css files based on the chunk names
      filename: ({ chunk }) => {
        const chunkName = chunk.name;
        console.log('Chunk Name: ', chunkName);

        return `css/${chunkName}/${chunkName}.[contenthash].css`;
      },
    }),
  ],

  module: {
    rules: [
      // For converting css to js and also injecting it to the html
      {
        test: /\.css$/,
        use: [
          // using mini-extract-plugin in prod mode to create one css file
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      // For converting images in html in src to assets in the build folder
      {
        test: /\.(svg|png|jpg|jpeg|gif)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext][query]',
        },
      },
    ],
  },
});
