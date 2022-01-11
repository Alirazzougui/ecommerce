var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
 
    entry:  {
      app:'./src/index.js'
    },
    
    output: {
      path: path.join(__dirname, "/dist"),
      publicPath: '',
      filename: "main.js"
    },
  
    mode: "development",

    
    devServer: {
        contentBase: path.join(__dirname,"/dist"),
        port: 8231,
        writeToDisk: true,
        open:true
    },


    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                {
                    loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                }
                ]
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader, 
                    options: {
                      publicPath: '../' 
                    },
                  },
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "images",
                    }
                  }
                ]
              },
              {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "fonts",
                      esModule: false,
                    },
                  },
                ]
              },
              {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                  exposes: ['$', 'jQuery'],
                }
              },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
          }),
        new MiniCssExtractPlugin({filename: "css/style.css"}),

    ],
}