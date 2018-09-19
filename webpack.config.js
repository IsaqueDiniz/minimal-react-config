const
	path = require("path"),
	HWP = require("html-webpack-plugin");

module.exports = {
	entry : path.join(__dirname, "/src/index.js"),
	module : {
		rules : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : "babel-loader"
			},
			{
            test: /\.css$/,
            use: [ "style-loader", "css-loader" ]
         }
		]	
	},
	plugins: [
		new HWP ({ template: path.join(__dirname, "/src/index.html") })
	]
}