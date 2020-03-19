/*
This is just very very basic webpack config

Nothing too fancy like SCSS/Less or anything like that

Nor is there any sort of programatic injections (like you would get in CRA)

*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false
  },

  output: {
    publicPath: 'http://localhost:3001/'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')]
        }
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },

  plugins: [
    /**
     * This is the start of the show.
     * 
     * This tells other deps the name of the current bundle and components it exposes
     */
    new ModuleFederationPlugin({
      name: 'dep2',
      library: { type: 'var', name: 'dep2' },
      filename: 'remoteEntry.js',
      remotes: {
        dep1: 'dep1'
      },
      exposes: {
        DepComponent: './src/DepComponent'
      },
      shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
};