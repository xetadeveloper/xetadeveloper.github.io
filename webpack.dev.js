const path = require('path');
const { merge } = require('webpack-merge');
const webpack_common = require('./webpack.common');

module.exports = merge(webpack_common, {
  // Webpack mode
  mode: 'development',

  // Options for the webpack output
  output: {
    //Not using content hash for dev mode
    filename: '[name].js',

    // path to ouptut build folder
    path: path.resolve(__dirname, 'src'),
  },

  module: {
    rules: [
      // For converting css to js and also injecting it to the html
      {
        test: /\.css$/,
        // using style loader in dev mode
        use: [
          {
            loader: 'style-loader',
            // options: {
            //   injectType: 'linkTag',
            // },
          },
          {
            loader: 'css-loader',

            // Creates source map for css
            options: {
              sourceMap: true,
            },
          },
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

  devtool: false, // supposedly non-line-mapped source maps (unconfirmed)

  // Configuring the webapck dev server
  devServer: {
    // static: {
    // directory: path.resolve(__dirname, './src/assets'),
    // watch: true,
    // },

    devMiddleware: {
      // for server to respond to requests to the root URL i.e /
      index: true,
      writeToDisk: true,
    },
    // open: true,
    // hot: 'only',
    // compress: true,
  },
});
