import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import RemoveEmptyScriptsPlugin from 'webpack-remove-empty-scripts';
import CopyPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
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
          from: path.resolve(__dirname, 'projects/canopy/src/styles/**/*.(scss|css)'),
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
            }
          },
          {
            loader: 'sass-loader',
            options: {
              "api": "modern",
            },
          }
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
