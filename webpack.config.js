const path = require('path').resolve(__dirname, './docs')

module.exports = {
	devServer: {
		contentBase: path,
		open: 'Chrome',
		port: 80,
		watchContentBase: true
	},
	module: {
		rules: [
			{
				loader: 'marko-loader',
				test: /\.marko$/
			}
		]
	},
	output: { path },
	resolve: {
		extensions: ['.js', '.marko']
	}
}
