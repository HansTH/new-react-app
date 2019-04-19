const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		port: '3000',
		open: 'Google chrome'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			favicon: './src/assets/HansTH.png'
		})
	]
});
