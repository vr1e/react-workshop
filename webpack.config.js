const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 5000
				}
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
							publicPath: url => `../fonts/${url}`
						}
					}
				]
			}
		]
	},
	plugins: [
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: false,
			template: require('html-webpack-template'),
			appMountId: 'root',
			title: 'React Workhop - Weather App',
			meta: [
				{
					name: 'React Workhop - Weather App',
					content: 'React Workhop - Weather App'
				}
			],
			mobile: true,
			lang: 'sr'
		}),
		new MiniCssExtractPlugin({
			filename: '[contenthash].css',
			chunkFilename: '[id].css'
		}),
		new CopyWebpackPlugin([
			{
				from: path.join(__dirname, 'assets'),
				to: path.join(__dirname, 'build/'),
				flatten: true
			}
		]),
		new WebpackBar()
	],
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\\/]node_modules[\\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		historyApiFallback: true,
		stats: 'errors-only'
	}
};
