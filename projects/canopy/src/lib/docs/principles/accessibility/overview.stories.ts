import { Meta, moduleMetadata } from '@storybook/angular';

export default {
  title: '[Internal] Accessibility Overview',
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  // !dev tag removes a story/component from the sidebar (See: https://github.com/storybookjs/storybook/pull/26634)
  tags: [ '!dev' ],
} as Meta;

const mainQuoteTemplate = `
<blockquote lgMarginVertical="md">
  "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."
  <cite>Tim Berners-Lee, W3C Director and inventor of the World Wide Web</cite>
</blockquote>
`;

export const MainQuote = {
  name: 'Main',
  render: (args: unknown) => ({
    props: args,
    template: mainQuoteTemplate,
  }),
};

const equalityActQuoteTemplate = `
<blockquote lgMarginVertical="md">
  [...] website owners have been obliged by law to ensure that their websites are accessible to all users, as it is illegal to treat those with disabilities less favourably.
  <cite>Equality Act of 2010</cite>
</blockquote>
`;

export const EqualityActQuote = {
  name: 'Equality Act',
  render: (args: unknown) => ({
    props: args,
    template: equalityActQuoteTemplate,
  }),
};
