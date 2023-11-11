// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true,
    host: 'localhost',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      //Source
      Assets: path.resolve(__dirname, './source/UI/Assets'),
      Components: path.resolve(__dirname, './source/UI/Components'),
      Navigator: path.resolve(__dirname, './source/UI/Navigator'),
      Pages: path.resolve(__dirname, './source/UI/Pages'),
      Source: path.resolve(__dirname, './source'),

      //Process
      Api: path.resolve(__dirname, './source/process/api'),
      Middlewares: path.resolve(__dirname, './source/process/middlewares'),
      Reducers: path.resolve(__dirname, './source/process/reducers'),
      ReduxStore: path.resolve(__dirname, './source/process/redux'),
      Repos: path.resolve(__dirname, './source/process/repos'),
      Sagas: path.resolve(__dirname, './source/process/sagas'),
      Translations: path.resolve(__dirname, './source/process/translations'),

      //Utils
      Constants: path.resolve(__dirname, './source/utils/generalConstants'),
      Helpers: path.resolve(__dirname, './source/utils/helpers')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    })
  ]
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    config.plugins.push(new Dotenv({ ignoreStub: true, path: './.env.development' }));
  } else {
    config.plugins.push(new Dotenv({ ignoreStub: true, path: './.env.production' }));
    config.mode = 'development';
  }
  return config;
};
