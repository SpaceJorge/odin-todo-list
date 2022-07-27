const path = require('path');
//Needs npm install --save-dev html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',
  },
  //For tracking down errors during development
  devtool: "inline-source-map",
  //With devServer installed you can live reload in the browser
  //Warning: Doesnt write output files, just loads em in memory.
  //Use it with "npm start"
  //npm install --save-dev webpack-dev-server
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To Do List',
    }),
  ],
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
  },
  module: {
    rules: [
      {
        //npm install --save-dev style-loader css-loader
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        //loading images needs no instalation
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        //loading fonts needs no instalation
        //CSS needs @font-face declaration though
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  //For pages with more than one module entry point
  //Activate it with 
  //optimization: {
    //runtimeChunk: "single",
  //},
};