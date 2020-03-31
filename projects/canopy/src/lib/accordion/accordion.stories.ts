import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { LgButtonModule } from '../button';
import { LgAccordionModule } from './accordion.module';
import { notes } from './accordion.notes';

const stories = storiesOf('Components', module).addDecorator(withKnobs);

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#ffffff', default: true }]
  })
  .add(
    'Accordion',
    () => ({
      moduleMetadata: {
        imports: [LgAccordionModule, LgButtonModule]
      },
      template: `
        <lg-accordion [headingLevel]="headingLevel">
          <lg-accordion-item>
            <lg-accordion-panel-heading [headingLevel]="headingLevel">Item 1</lg-accordion-panel-heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
          </lg-accordion-item>
          <lg-accordion-item>
            <lg-accordion-panel-heading [headingLevel]="headingLevel">Item 2</lg-accordion-panel-heading>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.</p>
            <button lg-button lgMarginTop="sm" variant="solid-primary">
              Test primary button
            </button>
          </lg-accordion-item>
        </lg-accordion>`,
      props: {
        headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 2)
      }
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );
