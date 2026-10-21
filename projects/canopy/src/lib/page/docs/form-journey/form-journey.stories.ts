import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { Meta } from '@storybook/angular';

import { LgPageComponent } from '../../page.component';
import {
  LgProgressHeaderComponent,
  LgProgressIndicatorComponent,
} from '../../../progress-indicator';
import {
  createArgs,
  formJourneyProductContent,
  pageStoryMeta,
} from '../page-story.helpers';

export default {
  ...pageStoryMeta,
  title: 'Templates/Page/Form Journey/Examples',
} as Meta;

const formJourneyTemplate = `
  <lg-page [variant]="variant">
    ${formJourneyProductContent}
  </lg-page>
`;

export const Product = {
  name: 'Product',
  tags: [ 'updated' ],
  render: (args: LgPageComponent) => ({
    props: {
      ...args,
      form: new UntypedFormGroup({
        firstName: new UntypedFormControl(''),
        lastName: new UntypedFormControl(''),
        emailAddress: new UntypedFormControl(''),
      }),
    },
    moduleMetadata: {
      imports: [
        ReactiveFormsModule,
        LgProgressHeaderComponent,
        LgProgressIndicatorComponent,
      ],
    },
    template: formJourneyTemplate,
  }),
  args: createArgs(),
  parameters: {
    docs: {
      source: {
        code: formJourneyTemplate,
      },
    },
  },
};

export const Branded = {
  ...Product,
  name: 'Branded',
  args: {
    ...createArgs(),
    variant: 'branded',
  },
};
