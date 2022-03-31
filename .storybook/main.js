const path = require('path');

module.exports = {
  stories: [
    '../projects/canopy/src/lib/accordion/accordion.stories.ts',
    '../projects/canopy/src/lib/alert/alert.stories.ts',
    '../projects/canopy/src/lib/brand-icon/brand-icons.stories.ts',
    '../projects/canopy/src/lib/breadcrumb/breadcrumb.stories.ts',
    '../projects/canopy/src/lib/button/button.stories.ts',
    '../projects/canopy/src/lib/button/button-group/button-group.stories.ts',
    '../projects/canopy/src/lib/card/card.stories.ts',
    '../projects/canopy/src/lib/carousel/carousel.stories.ts',
    '../projects/canopy/src/lib/data-point/data-point.stories.ts',
    '../projects/canopy/src/lib/details/details.stories.ts',
    '../projects/canopy/src/lib/feature-toggle/feature-toggle.stories.ts',
    '../projects/canopy/src/lib/forms/checkbox-group/checkbox-group.stories.ts',
    '../projects/canopy/src/lib/forms/checkbox-group/filter-group.stories.ts',
    '../projects/canopy/src/lib/forms/date/date-field.stories.ts',
    '../projects/canopy/src/lib/forms/input/input.stories.ts',
    '../projects/canopy/src/lib/forms/radio/filter.stories.ts',
    '../projects/canopy/src/lib/forms/radio/radio.stories.ts',
    '../projects/canopy/src/lib/forms/radio/segment.stories.ts',
    '../projects/canopy/src/lib/forms/select/select.stories.ts',
    '../projects/canopy/src/lib/forms/sort-code/sort-code.stories.ts',
    '../projects/canopy/src/lib/forms/toggle/checkbox.stories.ts',
    '../projects/canopy/src/lib/forms/toggle/switch.stories.ts',
    '../projects/canopy/src/lib/forms/validation/form.stories.ts',
    '../projects/canopy/src/lib/forms/validation/validation.stories.ts',
    '../projects/canopy/src/lib/focus/focus.stories.ts',
    '../projects/canopy/src/lib/footer/footer.stories.ts',
    '../projects/canopy/src/lib/heading/heading.stories.ts',
    '../projects/canopy/src/lib/header/header.stories.ts',
    '../projects/canopy/src/lib/hero/hero.stories.ts',
    '../projects/canopy/src/lib/hide-at/hide-at.stories.ts',
    '../projects/canopy/src/lib/icon/icons.stories.ts',
    '../projects/canopy/src/lib/modal/modal.stories.ts',
    '../projects/canopy/src/lib/page/page.stories.ts',
    '../projects/canopy/src/lib/primary-message/primary-message.stories.ts',
    '../projects/canopy/src/lib/promo-card/promo-card.stories.ts',
    '../projects/canopy/src/lib/quick-action/quick-action.stories.ts',
    '../projects/canopy/src/lib/separator/separator.stories.ts',
    '../projects/canopy/src/lib/shadow/shadow.stories.ts',
    '../projects/canopy/src/lib/show-at/show-at.stories.ts',
    '../projects/canopy/src/lib/side-nav/side-nav.stories.ts',
    '../projects/canopy/src/lib/skeleton/skeleton.stories.ts',
    '../projects/canopy/src/lib/spinner/spinner.stories.ts',
    '../projects/canopy/src/lib/sr-alert-message/sr-alert-message.stories.ts',
    '../projects/canopy/src/lib/variant/variant.stories.ts',
    '../projects/canopy/src/lib/pipes/camel-case/camel-case.stories.ts',
    '../projects/canopy/src/lib/pipes/kebab-case/kebab-case.stories.ts',
    '../projects/canopy/src/lib/table/table.stories.ts',
    '../projects/canopy/src/lib/tabs/tab-nav-bar.stories.ts',
    '../projects/canopy/src/lib/tabs/tabs.stories.ts',
    '../projects/canopy/src/styles/color.stories.ts',
    '../projects/canopy/src/styles/grid.stories.ts',
    '../projects/canopy/src/styles/links.stories.ts',
    '../projects/canopy/src/styles/typography.stories.ts',
    '../projects/canopy/src/styles/mixins.stories.mdx',
    '../projects/canopy/src/styles/spacing.stories.mdx',
    '../projects/canopy/src/styles/utils.stories.mdx',
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
