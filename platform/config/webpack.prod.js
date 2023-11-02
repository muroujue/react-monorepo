const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // 压缩css文件
const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = env =>
  merge(base(env), {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].chunk.[contenthash].js'
    },
    plugins: [
      //   new CleanWebpackPlugin(),
      //   new BundleAnalyzerPlugin(),
      new webpack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ })
      //   new CopyPlugin({
      //     patterns: [
      //       {
      //         from: path.resolve(__dirname, '../public'),
      //         to: path.resolve(__dirname, '../dist/public'),
      //         filter: source => {
      //           return !source.includes('index.html');
      //         }
      //       }
      //     ]
      //   })
    ],
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      }
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true, // 移除console
              drop_debugger: true // 移除debugger
            },
            format: {
              comments: false // 清理注释
            }
          },
          extractComments: false
        })
      ],
      splitChunks: {
        chunks: 'all', //指定打包同步加载还是异步加载
        maxSize: 0, //会尝试根据这个大小进行代码分割
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/, //符合组的要求就给构建venders
            priority: -10 //优先级用来判断打包到哪个里面去
          },
          default: {
            minChunks: 2, //被引用两次就提取出来
            priority: -20,
            reuseExistingChunk: true //检查之前是否被引用过有的话就不被打包了
          }
        }
      }
    }
  });
