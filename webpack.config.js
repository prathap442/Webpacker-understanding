const path = require('path');
module.exports = {
  entry: "./src/scripts/app.js",//path relative to this file
  output: {
      filename: "app.bundle.js",//path relative to this file
      publicPath: "dist"
  },
  mode: 'none',// this tells that if we are in production or development
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: [
          'file-loader'  
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }  
    ] 
  }
}