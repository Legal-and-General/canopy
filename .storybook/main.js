const path = require('path');

module.exports = {
  stories: [
    '../projects/canopy/src/lib/alert/alert.stories.ts',
    '../projects/canopy/src/lib/feature-toggle/feature-toggle.stories.ts'
  ],
  addons: [
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
          parser: 'typescript'
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials'
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
  },
};
