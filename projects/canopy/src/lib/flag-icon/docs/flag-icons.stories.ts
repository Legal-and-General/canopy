import { Component } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import { LgFlagIconComponent } from '../flag-icon.component';
// Direct import required for Webpack compatibility - do not use barrel file
import { lgFlagIconsArray } from '../../flag-icons-files/set/lgFlagIconsArray';

@Component({
  selector: 'lg-swatch-flag-icon',
  template: `
    @for (icon of lgFlagIconsArray; track icon) {
      <div class="swatch">
        <lg-flag-icon class="swatch__svg" [name]="icon.name" />
        <span class="swatch__name">{{ icon.name }}</span>
      </div>
    }
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
      }

      .swatch {
        margin: var(--space-4);
        flex: 0 1 225px;
      }

      .swatch__svg {
        margin-right: var(--space-5);
      }
    `,
  ],
  imports: [ LgFlagIconComponent ],
})
class SwatchFlagIconComponent {
  protected readonly lgFlagIconsArray = lgFlagIconsArray;
}

export default {
  title: 'Foundations/Flag icon/Catalog',
  decorators: [
    moduleMetadata({
      imports: [ SwatchFlagIconComponent, LgFlagIconComponent ],
    }),
  ],
};

const exampleTemplate = `
<lg-flag-icon name="united-kingdom"></lg-flag-icon>
`;

export const FlagIcons = {
  name: 'Catalog',
  render: () => ({
    template: '<lg-swatch-flag-icon></lg-swatch-flag-icon>',
  }),
  parameters: {
    docs: {
      source: {
        code: exampleTemplate,
      },
    },
  },
};
