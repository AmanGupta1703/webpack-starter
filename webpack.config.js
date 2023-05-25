const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        fileName: "bundle.js",
    },
}; // how we want the webpack to work, will run on the computer and not on the browser