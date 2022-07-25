const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    canopy: [
      './projects/canopy/src/styles/styles.scss',
      './projects/canopy/src/styles/form.scss',
    ],
    'canopy-classes': [
      './projects/canopy/src/styles/styles-classes.scss',
      './projects/canopy/src/styles/form.scss',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/canopy'),
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'projects/canopy/src/lib/**/*.scss'),
          to: path.resolve(__dirname, 'dist/canopy/lib'),
          context: 'projects/canopy/src/lib/',
        },
        {
          from: path.resolve(__dirname, 'projects/canopy/src/styles/**/*.scss'),
          to: path.resolve(__dirname, 'dist/canopy/styles'),
          context: 'projects/canopy/src/styles/',
        },
        {
          from: path.resolve(__dirname, 'projects/canopy/src/assets/icons/*.svg'),
          to: path.resolve(__dirname, 'dist/canopy/icons', '[name][ext]'),
        },
        {
          from: path.resolve(__dirname, 'projects/canopy/src/assets/brand-icons/*.svg'),
          to: path.resolve(__dirname, 'dist/canopy/brand-icons', '[name][ext]'),
        },
      ],
    }),
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              url: {
                filter: url => !url.match(/lyon-display([a-z-]+).(woff2|woff)/g),
              },
            }
          },
          { loader: 'sass-loader' }
        ],
      },
      {
        test: /\.(woff(2)?)$/,
        type: 'asset/resource',
        generator: {
          filename: content => {
            return content.filename.replace('projects/canopy/src/assets/', '')
          },
        },
      },
    ],
  },
};
