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
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'projects/canopy/src/lib/**/*.scss'),
          to: path.resolve(__dirname, 'dist/canopy/lib'),
          flatten: false,
          context: 'projects/canopy/src/lib/'
        },
        {
          from: path.resolve(__dirname, 'projects/canopy/src/styles/**/*.scss'),
          to: path.resolve(__dirname, 'dist/canopy/styles'),
          flatten: false,
          context: 'projects/canopy/src/styles/'
        },
        {
          from: path.resolve(__dirname, 'projects/canopy/src/assets/icons/*.svg'),
          to: path.resolve(__dirname, 'dist/canopy/icons'),
          flatten: true
        },
        {
          from: path.resolve(
            __dirname,
            'projects/canopy/src/assets/brand-icons/*.svg'
          ),
          to: path.resolve(__dirname, 'dist/canopy/brand-icons'),
          flatten: true
        }
      ]
    })
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'projects/canopy/src/assets/fonts',
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  }
};
