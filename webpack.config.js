const TerserJS = require('terser-webpack-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminOptipng = require('imagemin-optipng');
const imageminJpegtran = require('imagemin-jpegtran');
const path = require('path');

module.exports = {
    output: {
        path: path.resolve('./frontEndMain/static/frontEndMain'),
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/html/index.html',
            filename: "../../templates/frontEndMain/index.html"
        }),
        new CopyPlugin([
            { from: './src/images' },
            { from: './src/dist' },
            { from: './src/manifest.json', to: '../' }

        ]),
        new ImageminPlugin({
            imageminOptions: {
                plugins: [
                    imageminJpegtran({
                        progressive: true
                    }),
                    imageminOptipng({
                        optimizationLevel: 1
                    }),
                ]
            }
        }),
    ],
    devtool: process.env.NODE_ENV === 'development'? "source-map" : "",
    optimization: {
        minimizer: [new TerserJS({}), new OptimizeCssAssets({})],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, '/src/sw/sw.js'], 
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [ {
                    loader: MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: 'dist',
                        hmr: process.env.NODE_ENV === 'development',
                        reloadAll: true,
                    },
                }, 
                "css-loader" ]
            }
        ]
    },
    devServer: {
        port: 9090,
        contentBase: 'dist',
        hot: true,
        open: true,
        historyApiFallback: true
    }
}
