import path from 'path';

export default {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.ts/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};