const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/script.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new EnvironmentPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
