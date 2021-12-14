const path = require('path');

module.exports = {
  stories: [
    '../projects/canopy/src/lib/accordion/accordion.stories.ts',
    '../projects/canopy/src/lib/alert/alert.stories.ts',
    '../projects/canopy/src/lib/brand-icon/brand-icons.stories.ts',
    '../projects/canopy/src/lib/breadcrumb/breadcrumb.stories.ts',
    '../projects/canopy/src/lib/button/button.stories.ts',
    '../projects/canopy/src/lib/button/button-group/button-group.stories.ts',
    '../projects/canopy/src/lib/carousel/carousel.stories.ts',
    '../projects/canopy/src/lib/data-point/data-point.stories.ts',
    '../projects/canopy/src/lib/details/details.stories.ts',
    '../projects/canopy/src/lib/feature-toggle/feature-toggle.stories.ts',
    '../projects/canopy/src/lib/focus/focus.stories.ts',
    '../projects/canopy/src/lib/footer/footer.stories.ts',
    '../projects/canopy/src/lib/heading/heading.stories.ts',
    '../projects/canopy/src/lib/header/header.stories.ts',
    '../projects/canopy/src/lib/icon/icons.stories.ts',
    '../projects/canopy/src/lib/modal/modal.stories.ts',
    '../projects/canopy/src/lib/primary-message/primary-message.stories.ts',
    '../projects/canopy/src/lib/quick-action/quick-action.stories.ts',
    '../projects/canopy/src/lib/separator/separator.stories.ts',
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
