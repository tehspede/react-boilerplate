const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // eslint-disable-line unicorn/prefer-module, @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // eslint-disable-line unicorn/prefer-module, @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line unicorn/prefer-module, @typescript-eslint/no-var-requires
const path = require('path'); // eslint-disable-line unicorn/prefer-node-protocol, unicorn/prefer-module, @typescript-eslint/no-var-requires
const ReactRefreshTypeScript = require('react-refresh-typescript'); // eslint-disable-line unicorn/prefer-module, @typescript-eslint/no-var-requires

const isDevelopment = process.env.NODE_ENV !== 'production';

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: '[contenthash].[name].js',
    path: path.resolve(__dirname, 'dist'), // eslint-disable-line unicorn/prefer-module
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
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(
                  Boolean
                ),
              }),
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
