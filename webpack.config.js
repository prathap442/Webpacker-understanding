module.exports = {
    entry: "./src/scripts/app.js",//path relative to this file
    output: {
        filename: "app.bundle.js"//path relative to this file
    },
    mode: 'none'// this tells that if we are in production or development
  }