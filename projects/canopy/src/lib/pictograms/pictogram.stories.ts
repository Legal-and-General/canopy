import { Component } from '@angular/core';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { LgPictogramComponent } from './pictogram.component';
import { notes } from './pictogram.notes';
import { LgPictogramRegistry } from './pictogram.registry';
import * as picSet from './pictograms.interface';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

export const pictogramArray: Array<picSet.Pictogram> = [
  picSet.lgPictogramSun,
  picSet.lgPictogramPiggyBank,
  picSet.lgPictogramCookiesAndArrows
];

@Component({
  selector: 'lg-swatch-pictogram',
  template: `
    <div class="swatch" *ngFor="let pictogram of pictograms">
      <lg-pictogram class="swatch__svg" [name]="pictogram.name"></lg-pictogram>
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
        height: 8rem;
        width: 8rem;
      }

      .swatch__name {
        display: block;
        text-align: center;
      }

      .swatch__svg {
        margin-right: var(--space-md);
        display: inline;
      }
    `
  ]
})
class SwatchPictogramComponent {
  pictograms = pictogramArray;

  constructor(private registry: LgPictogramRegistry) {
    this.registry.registerPictogram(this.pictograms);
  }
}

stories.add(
  'Pictogram',
  () => ({
    moduleMetadata: {
      declarations: [SwatchPictogramComponent, LgPictogramComponent]
    },
    template: `
    <lg-swatch-pictogram></lg-swatch-pictogram>
  `
  }),
  {
    notes: { markdown: notes }
  }
);
