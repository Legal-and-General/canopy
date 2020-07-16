import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { Variant } from './button.interface';
import { LgButtonModule } from './button.module';
import { notes } from './button.notes';

const groupId = 'lg-button';

export default {
  title: 'Components/Button',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgButtonModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

const createBtnStory = (variant: Variant) => ({
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
    loading: boolean('loading', false, groupId),
  },
});

export const primaryButton = () => createBtnStory('solid-primary');
primaryButton.story = {
  'in-dsm': {
    id: '5eb292680f022e10952f6b54',
  },
};

export const secondaryButton = () => createBtnStory('solid-secondary');
secondaryButton.story = {
  'in-dsm': {
    id: '5eb4178bd037c0361eb5b9e8',
  },
};

export const outlinePrimary = () => createBtnStory('outline-primary');
outlinePrimary.story = {
  'in-dsm': {
    id: '5ebab3747f701b0829ba471e',
  },
};

export const outlineSecondary = () => createBtnStory('outline-secondary');
outlineSecondary.story = {
  'in-dsm': {
    id: '5ebab380a6ef0234a74a414d',
  },
};

export const reversePrimary = () => createBtnStory('reverse-primary');
reversePrimary.story = {
  'in-dsm': {
    id: '5ebab38d7f701b688aba4724',
  },
};

export const reverseSecondary = () => createBtnStory('reverse-secondary');
reversePrimary.story = {
  'in-dsm': {
    id: '5ebab396602d936ef763d72b',
  },
};
