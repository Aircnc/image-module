  /*eslint-disable */

  const CompressionPlugin = require('compression-webpack-plugin');

  module.exports = {
      entry: __dirname + '/client/app.jsx',
      module: {
        rules: [
          { 
            test: [/\.jsx$/],
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
              }
            }
          },
          {
            test: [/\.css$/],
            loader: 'style-loader',
          },
          {
            test: [/\/css$/],
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
        ]
      },
      plugins: [
        new CompressionPlugin(),
      ],
       output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
      }
    };