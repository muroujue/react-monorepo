const path = require('path');
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
  return {
    entry: {
      app: './src/index.tsx'
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: 'auto',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]
        },
        {
          test: /\.mdx?$/,
          use: [
            { loader: 'babel-loader', options: {} },
            {
              loader: '@mdx-js/loader',
              /** @type {import('@mdx-js/loader').Options} */
              options: {}
            }
          ]
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.mdx', '.js', '.json']
    },
    plugins: [
      new ExternalTemplateRemotesPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../public/index.html'),
        filename: 'index.html',
        // favicon: path.join(__dirname, '../public/img/favicon.ico'),
        inject: 'body',
        hash: true,
        publicPath: '/'
      }),
      new Dotenv()
    ]
  };
};
