import remarkGfm from 'remark-gfm';

module.exports = {
  stories: [
    '../projects/canopy/src/lib/docs/welcome/welcome.mdx',
    '../projects/canopy/src/lib/docs/welcome/welcome.stories.ts',
    // Foundation
    '../projects/canopy/src/lib/docs/foundation/colours/colours.mdx',
    '../projects/canopy/src/lib/docs/foundation/colours/colours.stories.ts',
    '../projects/canopy/src/lib/docs/foundation/typography/typography.mdx',
    '../projects/canopy/src/lib/docs/foundation/typography/typography.stories.ts',
    '../projects/canopy/src/lib/docs/foundation/layout-grid-and-spacing.mdx',
    '../projects/canopy/src/lib/icon/docs/guide.mdx',
    '../projects/canopy/src/lib/icon/docs/icons.stories.ts',
    '../projects/canopy/src/lib/brand-icon/docs/guide.mdx',
    '../projects/canopy/src/lib/brand-icon/docs/brand-icons.stories.ts',
    // Principles
    '../projects/canopy/src/lib/docs/principles/writing.mdx',
    '../projects/canopy/src/lib/docs/principles/accessibility/overview.mdx',
    '../projects/canopy/src/lib/docs/principles/accessibility/overview.stories.ts',
    '../projects/canopy/src/lib/docs/principles/accessibility/developer.mdx',
    // Components
    '../projects/canopy/src/lib/accordion/docs/guide.mdx',
    '../projects/canopy/src/lib/accordion/docs/accordion.stories.ts',
    '../projects/canopy/src/lib/carousel/docs/carousel.stories.ts',
    '../projects/canopy/src/lib/alert/docs/guide.mdx',
    '../projects/canopy/src/lib/alert/docs/alert.stories.ts',
    '../projects/canopy/src/lib/banner/docs/guide.mdx',
    '../projects/canopy/src/lib/banner/docs/banner.stories.ts',
    '../projects/canopy/src/styles/guide.mdx',
    '../projects/canopy/src/styles/blockquote.stories.ts',
    '../projects/canopy/src/lib/breadcrumb/docs/guide.mdx',
    '../projects/canopy/src/lib/breadcrumb/docs/breadcrumb.stories.ts',
    '../projects/canopy/src/lib/button/docs/guide.mdx',
    '../projects/canopy/src/lib/button/docs/button.stories.ts',
    '../projects/canopy/src/lib/button/docs/button-group.stories.ts',
    '../projects/canopy/src/lib/card/docs/card/guide.mdx',
    '../projects/canopy/src/lib/card/docs/card/card.stories.ts',
    '../projects/canopy/src/lib/data-point/docs/guide.mdx',
    '../projects/canopy/src/lib/data-point/docs/data-point.stories.ts',
    '../projects/canopy/src/lib/details/docs/guide.mdx',
    '../projects/canopy/src/lib/details/docs/details.stories.ts',
    '../projects/canopy/src/lib/forms/docs/forms-design.mdx',
    '../projects/canopy/src/lib/forms/input/docs/guide.mdx',
    '../projects/canopy/src/lib/forms/input/docs/input.stories.ts',
    '../projects/canopy/src/lib/forms/docs/filter-buttons/guide.mdx',
    '../projects/canopy/src/lib/forms/docs/filter-buttons/filter-single.stories.ts',
    '../projects/canopy/src/lib/forms/docs/filter-buttons/filter-multiple.stories.ts',
    '../projects/canopy/src/lib/forms/radio/docs/radio/guide.mdx',
    '../projects/canopy/src/lib/forms/radio/docs/radio/radio.stories.ts',
    '../projects/canopy/src/lib/forms/radio/docs/segment/guide.mdx',
    '../projects/canopy/src/lib/forms/radio/docs/segment/segment.stories.ts',
    '../projects/canopy/src/lib/forms/select/docs/guide.mdx',
    '../projects/canopy/src/lib/forms/select/docs/select.stories.ts',
    '../projects/canopy/src/lib/forms/toggle/docs/checkbox/guide.mdx',
    '../projects/canopy/src/lib/forms/toggle/docs/checkbox/checkbox.stories.ts',
    '../projects/canopy/src/lib/forms/toggle/docs/checkbox/checkbox-group.stories.ts',
    '../projects/canopy/src/lib/forms/toggle/docs/switch/guide.mdx',
    '../projects/canopy/src/lib/forms/toggle/docs/switch/switch.stories.ts',
    '../projects/canopy/src/lib/forms/validation/docs/guide.mdx',
    '../projects/canopy/src/lib/forms/validation/docs/form.stories.ts',
    '../projects/canopy/src/lib/forms/validation/docs/validation.stories.ts',
    '../projects/canopy/src/lib/footer/docs/guide.mdx',
    '../projects/canopy/src/lib/footer/docs/footer.stories.ts',
    '../projects/canopy/src/lib/header/docs/guide.mdx',
    '../projects/canopy/src/lib/header/docs/header.stories.ts',
    '../projects/canopy/src/styles/docs/link/guide.mdx',
    '../projects/canopy/src/styles/docs/link/link.stories.ts',
    '../projects/canopy/src/lib/list/docs/guide.mdx',
    '../projects/canopy/src/lib/list/docs/lists.stories.ts',
    '../projects/canopy/src/lib/link-menu/docs/guide.mdx',
    '../projects/canopy/src/lib/link-menu/docs/link-menu.stories.ts',
    '../projects/canopy/src/lib/modal/docs/guide.mdx',
    '../projects/canopy/src/lib/modal/docs/modal.stories.ts',
    '../projects/canopy/src/lib/primary-message/docs/guide.mdx',
    '../projects/canopy/src/lib/primary-message/docs/primary-message.stories.ts',
    '../projects/canopy/src/lib/pagination/docs/guide.mdx',
    '../projects/canopy/src/lib/pagination/docs/pagination.stories.ts',
    '../projects/canopy/src/lib/promo-card/docs/guide.mdx',
    '../projects/canopy/src/lib/promo-card/docs/promo-card.stories.ts',
    '../projects/canopy/src/lib/quick-action/docs/guide.mdx',
    '../projects/canopy/src/lib/quick-action/docs/quick-action.stories.ts',
    '../projects/canopy/src/lib/separator/docs/guide.mdx',
    '../projects/canopy/src/lib/separator/docs/separator.stories.ts',
    '../projects/canopy/src/lib/spinner/docs/guide.mdx',
    '../projects/canopy/src/lib/spinner/docs/spinner.stories.ts',
    '../projects/canopy/src/lib/table/docs/guide.mdx',
    '../projects/canopy/src/lib/table/docs/table.stories.ts',
    '../projects/canopy/src/lib/tabs/docs/guide.mdx',
    '../projects/canopy/src/lib/tabs/docs/tab-nav-bar.stories.ts',
    '../projects/canopy/src/lib/tabs/docs/tabs.stories.ts',
    '../projects/canopy/src/lib/progress-indicator/docs/guide.mdx',
    '../projects/canopy/src/lib/progress-indicator/docs/progress-bar.stories.ts',
    '../projects/canopy/src/lib/progress-indicator/docs/progress-indicator.stories.ts',
    // Patterns
    '../projects/canopy/src/lib/card/docs/promotions/guide.mdx',
    '../projects/canopy/src/lib/card/docs/promotions/promotions.stories.ts',
    '../projects/canopy/src/lib/filter-container/docs/guide.mdx',
    '../projects/canopy/src/lib/filter-container/docs/filter-container.stories.ts',
    '../projects/canopy/src/lib/forms/date/docs/guide.mdx',
    '../projects/canopy/src/lib/forms/date/docs/date-field.stories.ts',
    '../projects/canopy/src/lib/forms/sort-code/docs/guide.mdx',
    '../projects/canopy/src/lib/forms/sort-code/docs/sort-code.stories.ts',
    '../projects/canopy/src/lib/hero/docs/guide.mdx',
    '../projects/canopy/src/lib/hero/docs/hero.stories.ts',
    '../projects/canopy/src/lib/hero-img/docs/guide.mdx',
    '../projects/canopy/src/lib/hero-img/docs/hero-img.stories.ts',
    '../projects/canopy/src/lib/side-nav/docs/guide.mdx',
    '../projects/canopy/src/lib/side-nav/docs/side-nav.stories.ts',
    // Templates
    '../projects/canopy/src/lib/page/docs/guide.mdx',
    '../projects/canopy/src/lib/page/docs/page.stories.ts',
    // Helpers
    //  Directives
    '../projects/canopy/src/lib/feature-toggle/docs/guide.mdx',
    '../projects/canopy/src/lib/feature-toggle/docs/feature-toggle.stories.ts',
    '../projects/canopy/src/lib/focus/docs/guide.mdx',
    '../projects/canopy/src/lib/focus/docs/focus.stories.ts',
    '../projects/canopy/src/lib/grid/docs/guide.mdx',
    '../projects/canopy/src/lib/grid/docs/grid.stories.ts',
    '../projects/canopy/src/lib/hide-at/docs/guide.mdx',
    '../projects/canopy/src/lib/hide-at/docs/hide-at.stories.ts',
    '../projects/canopy/src/lib/orientation/docs/guide.mdx',
    '../projects/canopy/src/lib/orientation/docs/orientation.stories.ts',
    '../projects/canopy/src/lib/shadow/docs/guide.mdx',
    '../projects/canopy/src/lib/shadow/docs/shadow.stories.ts',
    '../projects/canopy/src/lib/show-at/docs/guide.mdx',
    '../projects/canopy/src/lib/show-at/docs/show-at.stories.ts',
    '../projects/canopy/src/lib/skeleton/docs/guide.mdx',
    '../projects/canopy/src/lib/skeleton/docs/skeleton.stories.ts',
    '../projects/canopy/src/lib/spacing/margin/docs/guide.mdx',
    '../projects/canopy/src/lib/spacing/margin/docs/margin.stories.ts',
    '../projects/canopy/src/lib/spacing/padding/docs/guide.mdx',
    '../projects/canopy/src/lib/spacing/padding/docs/padding.stories.ts',
    '../projects/canopy/src/lib/spacing/row-gap/docs/guide.mdx',
    '../projects/canopy/src/lib/spacing/row-gap/docs/row-gap.stories.ts',
    '../projects/canopy/src/lib/sr-alert-message/docs/guide.mdx',
    '../projects/canopy/src/lib/sr-alert-message/docs/sr-alert-message.stories.ts',
    '../projects/canopy/src/lib/variant/docs/guide.mdx',
    '../projects/canopy/src/lib/variant/docs/variant.stories.ts',
    //  Pipes
    '../projects/canopy/src/lib/pipes/camel-case/docs/guide.mdx',
    '../projects/canopy/src/lib/pipes/camel-case/docs/camel-case.stories.ts',
    '../projects/canopy/src/lib/pipes/kebab-case/docs/guide.mdx',
    '../projects/canopy/src/lib/pipes/kebab-case/docs/kebab-case.stories.ts',
    //  Components
    '../projects/canopy/src/lib/heading/docs/guide.mdx',
    '../projects/canopy/src/lib/heading/docs/heading.stories.ts',
    //  Style
    '../projects/canopy/src/styles/docs/mixins.mdx',
    '../projects/canopy/src/styles/docs/utils.mdx',
  ],
  addons: ['@storybook/addon-a11y', {
    name: '@storybook/addon-docs',
    options: {
      mdxPluginOptions: {
        mdxCompileOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
  }],
  staticDirs: [
    '../assets/',
    {
      from: '../assets/fonts/',
      to: 'assets/fonts',
    },
  ],
  core: {
    fsCache: true,
  },
  framework: '@storybook/angular',
};
