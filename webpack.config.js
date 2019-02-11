
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./public/index.html",
	filename: "./index.html",
	favicon: './src/assets/img/favicon.ico'
});


const webpack = require('webpack');

module.exports = {
	entry: {
		entry: ['@babel/polyfill', './src/index.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(scss|css)$/,
				resolve: { extensions: [".scss", ".css"], },
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: __dirname + '/postcss.config.js'
							}
						},
					},
					'resolve-url-loader?sourceMap',
					'sass-loader?sourceMap',
				]
			},
			{
				test: /\.(woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: 'url-loader?limit=10000',
			},
			{
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				use: 'file-loader',
			},
			{
				test: /\.(png|jpg|gif|jpeg|ttf|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',

						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: '[name].[hash].js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		htmlPlugin,
		new MiniCssExtractPlugin({
			filename: `public/styles/[name].[hash].css`
		}),
		new Dotenv(),
		require('autoprefixer'),
		new PreloadWebpackPlugin({
			rel: 'preload',
			include: 'asyncChunks'
		})
	],
	devServer: {
		contentBase: './dist',
		hot: true,
		historyApiFallback: true,
	}
};
