import {
  boolean,
  select,
  text,
  withKnobs
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Single Button', () => {
  const groupId = 'lg-button';
  const content = text('text', 'Button', groupId);
  const rounded = boolean('rounded', false, groupId);
  const disabled = boolean('disabled', false, groupId);
  const fullWidth = boolean('fullWidth', false, groupId);
  const variant = select(
    'variant',
    ['cta', 'primary', 'secondary', 'tertiary'],
    'primary',
    groupId
  );

  return {
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `
      <lg-button
          variant=${variant}
          ${fullWidth === true ? 'fullWidth="true"' : ''}
          ${rounded === true ? 'rounded="true"' : ''}
          ${disabled === true ? 'disabled="true"' : ''}>
        ${content}
      </lg-button>
    `
  };
});
