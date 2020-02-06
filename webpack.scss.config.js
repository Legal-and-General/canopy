const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    canopy: [
      './projects/canopy/src/styles/styles.scss',
      './projects/canopy/src/styles/form.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/canopy')
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'projects/canopy/**/*.scss'),
        to: path.resolve(__dirname, 'dist/canopy/scss'),
        flatten: true
      }
    ])
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.woff$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
};
