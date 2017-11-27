const path = require('path');

const APP_DIR = path.resolve(__dirname, 'client');
const BUILD_DIR = path.resolve(__dirname, 'client/public');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/client/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(c|d|t)sv$/, // load all .csv, .dsv, .tsv files with dsv-loader
        use: ['dsv-loader'] // or dsv-loader?delimiter=,
      }
    ]
  }
};
