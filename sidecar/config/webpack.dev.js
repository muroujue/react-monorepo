const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = env =>
  merge(base(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      port: 20060
    },
    cache: {
      type: 'memory'
    },
    plugins: []
  });
