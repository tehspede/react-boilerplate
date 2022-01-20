/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: '[contenthash].[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: !isDevelopment,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              poolTimeout: isDevelopment ? Number.POSITIVE_INFINITY : 500,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              getCustomTransformers: path.join(
                __dirname,
                './webpack.transformer.ts'
              ),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ].filter(Boolean),
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
};
