const path = require('path');

module.exports = {
  stories: [
    '../projects/canopy/src/lib/alert/alert.stories.ts',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-backgrounds',
  ],
  webpackFinal: async (config) => {
    // Parse any node modules that do not support es5
    config.module.rules.push({
      test: /\.js$/,
      include: path.resolve(__dirname, '../node_modules/color-convert'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
      },
    });

    return config;
  }
};
