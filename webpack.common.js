const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugins = require('./htmlWebpackPluginGen');

module.exports = {
  entry: {
    main: {
      import: './site/index.mjs',
      filename: 'main.js',
    },
    home: {
      import: './site/js/home.mjs',
      filename: 'js/home.js',
    },
    contact: {
      import: './site/js/contact.mjs',
      filename: 'js/contact.js',
    },
    portfolio: {
      import: './site/js/portfolio.js',
      filename: 'js/portfolio.js',
    },
    project: {
      import: './site/js/project.js',
      filename: 'js/project.js',
    },
    about: {
      import: './site/js/about.js',
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
        use: [{ loader: 'html-loader', options: { minimize: false } }],
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
