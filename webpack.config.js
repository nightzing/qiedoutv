const {
  resolve
} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const publicPath = ''
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    index: './src/main.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
    chunkFilename: '[id].js?[chunkhash]',
    publicPath: options.dev ? '/assets/' : publicPath
  },
  module: {
    rules: [
    {
        test: /\.vue$/,
        use: ['vue-loader']
      },
     // {
     //     test: /\.vue$/,
     //     loader: 'vue-loader',
     //     options: {
     //       loaders: {
     //         'scss': 'style-loader!css-loader!sass-loader'
     //       }
     //     }
     //  },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [
          resolve(__dirname, 'src')
          // resolve(__dirname, 'node_modules/')
        ]},
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            root: resolve(__dirname, 'src'),
            attrs: ['img:src', 'link:href']
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /favicon\.png$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['manifest']
    // }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
      // new UglifyJSPlugin()
  ],
  resolve: {
    alias: {
       'vue': 'vue/dist/vue.js',
        '~': resolve(__dirname, 'src')
    },
  },
  devServer: {
    host: '127.0.0.1',
    port: 8010,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8011',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    historyApiFallback: {
      index: url.parse(options.dev ? '/assets/' : publicPath).pathname
    }
  },
  devtool: options.dev ? '#eval-source-map' : '#source-map'
})