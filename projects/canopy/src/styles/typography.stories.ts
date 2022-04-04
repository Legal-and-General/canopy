import { Component, Input } from '@angular/core';

import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { notes } from './typography.notes';
import { LgMarginModule } from '../lib/spacing';

const pangram = 'The five boxing wizards jump quickly';

const availableFontSizesRoboto = ['7', '6', '5', '4', '3', '2', '1', '0-6', '0-8'];
const availableFontSizesLyon = ['7', '6', '5', '4'];

@Component({
  selector: 'lg-display-font-size',
  template: `
    <div lgMarginBottom="xxl">
      <p [ngClass]="fontClass" lgMarginBottom="none">{{ textString }}</p>
      <pre>{{ classString }}</pre>
    </div>
  `,
})
class LgDisplayFontSizeComponent {
  @Input() textString: string;
  @Input() classString: string;
  @Input() fontClass: string;
}
@Component({
  selector: 'lg-font-sizes-panel',
  template: `
    <div class="font-panels">
      <div class="font-panels__panel">
        Productive Font (Roboto)
        <ng-container *ngFor="let fontSize of fontSizesRoboto">
          <lg-display-font-size
            textString="{{ textString }}"
            classString=".lg-font-size-{{ fontSize }}"
            fontClass="lg-font-size-{{ fontSize }}"
          >
          </lg-display-font-size>
          <lg-display-font-size
            textString="{{ textString }}"
            classString=".lg-font-size-{{ fontSize }}--strong"
            fontClass="lg-font-size-{{ fontSize }}--strong"
          >
          </lg-display-font-size>
        </ng-container>
      </div>
      <div class="font-panels__panel">
        Expressive Font (Lyon)
        <ng-container *ngFor="let fontSize of fontSizesLyon">
          <lg-display-font-size
            textString="{{ textString }}"
            classString=".lg-font-size-{{ fontSize }}"
            fontClass="lg-font-size-{{ fontSize }} lg-font--expressive"
          >
          </lg-display-font-size>
          <lg-display-font-size
            textString="{{ textString }}"
            classString=".lg-font-size-{{ fontSize }}--strong"
            fontClass="lg-font-size-{{ fontSize }}--strong lg-font--expressive"
          >
          </lg-display-font-size>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    '.font-panels { display: flex; }',
    '.font-panels__panel { width: 50%; padding-right: 20px; }',
  ],
})
class LgFontPanelComponent {
  @Input() textString: string;
  fontSizesRoboto = availableFontSizesRoboto;
  fontSizesLyon = availableFontSizesLyon;
}

export default {
  title: 'Style/Typography',
  decorators: [
    moduleMetadata({
      declarations: [LgDisplayFontSizeComponent, LgFontPanelComponent],
      imports: [LgMarginModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        state: 'closed',
      },
      description: {
        component: notes,
      },
    },
  },
} as Meta;

const headingsTemplate = `
<lg-font-sizes-panel [textString]="textString"></lg-font-sizes-panel>
`;

const headingsStory: Story = (args) => ({
  props: args,
  template: headingsTemplate,
});

export const headings = headingsStory.bind({});
headings.storyName = 'Headings';
headings.args = {
  textString: pangram,
};

const pageTemplate = `
<h1 class="h1">Accusantium doloremque laudantium</h1>
<p>
  Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
  illo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
  suscipit laboriosam. Accusantium doloremque laudantium, totam rem aperiam,
  eaque ipsa quae ab illo.
</p>
<ul>
  <li>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.</li>
  <li>Do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Laboris nisi ut aliquip ex ea commodo consequat.</li>
</ul>

<h2>Qui officia deserunt mollit anim id est laborum.</h2>
<p>
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
  adipisci velit. Et harum quidem rerum facilis est et expedita distinctio.
  Animi, id est laborum et dolorum fuga. Itaque earum rerum hic tenetur a
  sapiente delectus.
</p>

<p>
  Laboris nisi ut aliquip ex ea commodo consequat. Architecto beatae vitae
  dicta sunt explicabo. Fugiat quo voluptas nulla pariatur? Cupiditate non
  provident, similique sunt in culpa qui officia deserunt mollitia.
</p>

<h3>Inventore veritatis</h3>
<p>
  Facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
  <a href="https://en.wikipedia.org/wiki/Oran">Oran hitherto.</a> Excepteur
  sint occaecat cupidatat non proident, sunt in culpa. Fugiat quo voluptas
  nulla pariatur? Duis aute irure dolor in reprehenderit in voluptate velit.
</p>

<h4>Inventore veritatis</h4>
<p class="lg-font-size-0-8">
  Totam rem aperiam. Inventore veritatis et quasi architecto beatae
  vitae dicta sunt explicabo.
</p>
<p class="lg-font-size-0-6">
  Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
</p>
`;

const pageStory: Story = (args) => ({
  props: args,
  template: pageTemplate,
});

export const page = pageStory.bind({});
pageStory.storyName = 'Page';
pageStory.args = {
  textString: pangram,
};
