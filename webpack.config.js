const path = require("path");
 
module.exports = {
	entry: "./src/index.js", // where our source live
	output: {
		path: path.resolve(__dirname, "dist/assets"),
		filename: "bundle.js",
	},  // where to output it
}; // how we want the webpack to work, will run on the computer and not on the browser
