import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { FeatureToggleDirective } from './feature-toggle.directive';

const stories = storiesOf('Directives', module);

stories.addDecorator(withKnobs);

stories.add('Feature Toggle', () => ({
  moduleMetadata: {
    declarations: [FeatureToggleDirective]
  },
  template: `
    <ul>
      <li *featureOff="disableFirst" style="background-color: darkred;">Feature 1</li>
      <li *featureOff="disableSecond" style="background-color: darkblue;">Feature 2</li>
      <li *featureOff="disableThird" style="background-color: darkgreen;">Feature 3</li>
    </ul>
  `,
  styles: [`
    li {
      margin-top: 20px; width: 80px; height: 80px; color: white;
    }
  `],
  props: {
    disableFirst: boolean('disable red feature', false),
    disableSecond: boolean('disable blue feature', true),
    disableThird: boolean('disable green feature', false),
  }
}));
