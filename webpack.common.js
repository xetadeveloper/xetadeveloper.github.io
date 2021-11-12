const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugins = require('./htmlWebpackPluginGen');

module.exports = {
  entry: {
    main: {
      import: './web/index.mjs',
      filename: 'main.js',
    },
    home: {
      import: './web/js/home.mjs',
      filename: 'js/home.js',
    },
    contact: {
      import: './web/js/contact.mjs',
      filename: 'js/contact.js',
    },
    portfolio: {
      import: './web/js/portfolio.js',
      filename: 'js/portfolio.js',
    },
    project: {
      import: './web/js/project.js',
      filename: 'js/project.js',
    },
    about: {
      import: './web/js/about.js',
      filename: 'js/about.js',
    },
  },

  plugins: [
    // output.clean was not working for cleaning in watch mode
    // had to switch back to this
    new CleanWebpackPlugin(),
    ...htmlWebpackPlugins(),
  ],

  module: {
    rules: [
      // For reading HTMl files and requiring their assets e.g img:src
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: /\.m?js/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          cacheDirectory: false,
        },
      },

      // For converting fonts assets to assets in the build folder
      {
        test: /\.(woff|ttf|woff2|eot)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][hash][ext][query]',
        },
      },
    ],
  },
};
