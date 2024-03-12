import { Meta, moduleMetadata, Story } from '@storybook/angular';

export default {
  title: 'Internal Accessibility Overview',
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const mainQuoteTemplate = `
<blockquote lgMarginVertical="md">
  "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."
  <cite>Tim Berners-Lee, W3C Director and inventor of the World Wide Web</cite>
</blockquote>
`;

const mainQuoteStory: Story = args => ({
  props: args,
  template: mainQuoteTemplate,
});

export const mainQuote = mainQuoteStory.bind({});
mainQuote.storyName = 'Main';

const equalityActQuoteTemplate = `
<blockquote lgMarginVertical="md">
  [...] website owners have been obliged by law to ensure that their websites are accessible to all users, as it is illegal to treat those with disabilities less favourably.
  <cite>Equality Act of 2010</cite>
</blockquote>
`;

const equalityActQuoteStory: Story = args => ({
  props: args,
  template: equalityActQuoteTemplate,
});

export const equalityActQuote = equalityActQuoteStory.bind({});
equalityActQuote.storyName = 'Equality Act';
