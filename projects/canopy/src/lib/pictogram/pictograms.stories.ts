import { Component, Input } from '@angular/core';

import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgPictogramComponent } from './pictogram.component';
import { notes } from './pictogram.notes';
import { LgPictogramRegistry } from './pictogram.registry';
import * as picSet from './pictograms.interface';

export const pictogramArray: Array<picSet.Pictogram> = [
  picSet.lgPictogramSun,
  picSet.lgPictogramPiggyBank,
  picSet.lgPictogramCookiesAndArrows,
  picSet.lgPictogramErrorInBrowser,
  picSet.lgPictogramNeedHelp,
  picSet.lgPictogramNoInformation,
  picSet.lgPictogramQuestionMark,
  picSet.lgPictogramRainOrShine,
  picSet.lgPictogramPeople,
  picSet.lgPictogramCalendar,
  picSet.lgPictogramNoTransactionsMatch,
  picSet.lgPictogramPensionPot,
  picSet.lgPictogramPerformance,
  picSet.lgPictogramThumbsUp,
  picSet.lgPictogramVideoGuides,
  picSet.lgPictogramSurvey,
];

@Component({
  selector: 'lg-swatch-pictogram',
  template: `
    <div class="swatch" *ngFor="let pictogram of pictograms">
      <lg-pictogram
        class="swatch__svg"
        [name]="pictogram.name"
        [size]="size"
      ></lg-pictogram>
      <span class="swatch__name">{{ pictogram.name }}</span>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
      }

      .swatch {
        margin: var(--space-md);
        flex: 0 0 8rem;
      }

      .swatch__name {
        display: block;
        text-align: center;
        margin-top: var(--space-xxs);
      }

      .swatch__svg {
        display: block;
        margin: 0 auto;
      }
    `,
  ],
})
class SwatchPictogramComponent {
  pictograms = pictogramArray;

  @Input() size;

  constructor(private registry: LgPictogramRegistry) {
    this.registry.registerPictogram(this.pictograms);
  }
}

const spaces = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export default {
  title: 'Components/Pictogram',
  excludeStories: ['pictogramArray'],
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [SwatchPictogramComponent, LgPictogramComponent],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-swatch-pictogram [size]="size"></lg-swatch-pictogram>
  `,
  props: {
    size: select('size', spaces, 'xs'),
  },
});
