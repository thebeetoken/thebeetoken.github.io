// webpack.config.js
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// plugins for development and production
var plugins = [
  new ExtractTextPlugin({ filename: '../stylesheets/style.css', allChunks: true })
];
// plugins for development
var devPlugins = [
  new ExtractTextPlugin({ filename: '../stylesheets/style.css', allChunks: true })
];

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
)

// include plugins config
module.exports = {
  context: __dirname,
  entry: "./frontend/thebeetoken.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*", ".css"],
  }
};
