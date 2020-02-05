import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { LgButtonModule } from './button.module';
import { notes } from './button.notes';

const groupId = 'lg-button';

const btnStories = storiesOf('Components/Button', module);
btnStories.addDecorator(withKnobs);

createBtnStory({
  stories: btnStories,
  name: 'Solid primary',
  variant: 'solid-primary'
});

createBtnStory({
  stories: btnStories,
  name: 'Solid secondary',
  variant: 'solid-secondary'
});

createBtnStory({
  stories: btnStories,
  name: 'Outline primary',
  variant: 'outline-primary'
});

createBtnStory({
  stories: btnStories,
  name: 'Outline secondary',
  variant: 'outline-secondary',
  bgColor: '#333' // --color-charcoal TODO: determine how to use css variables
});

createBtnStory({
  stories: btnStories,
  name: 'Reverse primary',
  variant: 'reverse-primary',
  bgColor: '#0076d6' // --color-super-blue TODO: determine how to use css variables
});

createBtnStory({
  stories: btnStories,
  name: 'Reverse secondary',
  variant: 'reverse-secondary',
  bgColor: '#028844' // --color-leafy-green TODO: determine how to use css variables
});

function createBtnStory(args) {
  const { stories, name, variant, bgColor } = args;

  return stories
    .addParameters({
      backgrounds: bgColor
        ? [{ name: 'default', value: bgColor, default: true }]
        : []
    })
    .add(
      name,
      () => ({
        moduleMetadata: {
          imports: [LgButtonModule]
        },
        template: `
        <button lg-button
          variant="${variant}"
          [fullWidth]="fullWidth ? true : null"
          [loading]="loading ? true : null"
          >
          {{content}}
        </button>
       `,
        props: {
          content: text('text', 'Button', groupId),
          fullWidth: boolean('fullWidth', false, groupId),
          loading: boolean('loading', false, groupId)
        }
      }),
      {
        notes: { markdown: notes }
      }
    );
}
