const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',   // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js'   // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,   // Apply loaders to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'   // Use Babel loader for transpiling
        }
      },
      {
        test: /\.css$/,   // Apply loaders to CSS files
        use: ['style-loader', 'css-loader']   // Use style-loader and css-loader
      }
    ]
  },
  // Other configurations, plugins, etc.
};