const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname + '/build'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [ 
			// js/jsx-loader
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			// html-loader
			{
				test: /\.html$/,
				use: [
				  {
					loader: "html-loader"
				  }
				]
			},
			// css-loader
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
		  template: "./src/layout.html",
		  filename: "index.html"
		})
	]
};