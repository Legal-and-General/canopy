import { Component, EventEmitter, Output } from '@angular/core';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { LgButtonComponent } from './button.component';
import { notes } from './button.notes';

const groupId = 'lg-button';

const btnStories = storiesOf('Components|Button', module);
btnStories.addDecorator(withKnobs);

createBtnStory({
  stories: btnStories,
  name: 'CTA',
  variant: 'cta'
});

createBtnStory({
  stories: btnStories,
  name: 'Primary',
  variant: 'primary'
});

createBtnStory({
  stories: btnStories,
  name: 'Secondary',
  variant: 'secondary'
});

const tertiaryBtnStories = storiesOf('Components|Button/Tertiary', module);
tertiaryBtnStories.addDecorator(withKnobs);

createBtnStory({
  stories: tertiaryBtnStories,
  name: 'Default',
  variant: 'tertiary',
  bgColor: '#000'
});

createBtnStory({
  stories: tertiaryBtnStories,
  name: 'Alternative 1',
  variant: 'tertiary-alt-1',
  bgColor: '#0076d6' // --super-blue TODO: determine how to use css variables
});

createBtnStory({
  stories: tertiaryBtnStories,
  name: 'Alternative 2',
  variant: 'tertiary-alt-2',
  bgColor: '#028844' // --leafy-green TODO: determine how to use css variables
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
          declarations: [LgButtonComponent]
        },
        template: `
        <lg-button
            variant="${variant}"
            [fullWidth]="fullWidth ? true : null"
            [rounded]="rounded ? true : null"
            [disabled]="disabled ? true : null"
            (action)="action($action)"
          >
          {{content}}
        </lg-button>
      `,
        props: {
          content: text('text', 'Button', groupId),
          rounded: boolean('rounded', false, groupId),
          disabled: boolean('disabled', false, groupId),
          fullWidth: boolean('fullWidth', false, groupId),
          action: action('clicked')
        }
      }),
      {
        notes: { markdown: notes }
      }
    );
}
