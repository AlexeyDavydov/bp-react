const path = require("path");
const isDevelopment = true;

module.exports = {
    entry: './App.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: isDevelopment ? 'development' : 'production',
    module : {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}