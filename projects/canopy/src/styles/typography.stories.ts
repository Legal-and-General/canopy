import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../lib/canopy.module';
import { notes } from './typography.notes';

const stories = storiesOf('Typography', module).addDecorator(withKnobs);

stories.add(
  'Headings',
  () => ({
    moduleMetadata: {
      imports: [CanopyModule],
    },
    template: `
    <p class="lg-font-size-7">{{lgFontSize7}}</p>
    <p class="lg-font-size-7--strong">{{lgFontSize7Strong}}</p>

    <p class="lg-font-size-6">{{lgFontSize6}}</p>
    <p class="lg-font-size-6--strong">{{lgFontSize6Strong}}</p>

    <p class="lg-font-size-5">{{lgFontSize5}}</p>
    <p class="lg-font-size-5--strong">{{lgFontSize5Strong}}</p>

    <p class="lg-font-size-4">{{lgFontSize4}}</p>
    <p class="lg-font-size-4--strong">{{lgFontSize4Strong}}</p>

    <p class="lg-font-size-3">{{lgFontSize3}}</p>
    <p class="lg-font-size-3--strong">{{lgFontSize3Strong}}</p>

    <p class="lg-font-size-2">{{lgFontSize2}}</p>
    <p class="lg-font-size-2--strong">{{lgFontSize2Strong}}</p>

    <p class="lg-font-size-1">{{lgFontSize1}}</p>
    <p class="lg-font-size-1--strong">{{lgFontSize1Strong}}</p>

    <p class="lg-font-size-0-8">{{lgFontSize08}}</p>
    <p class="lg-font-size-0-6">{{lgFontSize06}}</p>
    `,
    props: {
      lgFontSize7: text('font size 7', '.lg-font-size-7'),
      lgFontSize7Strong: text('font size 7 strong', '.lg-font-size-7--strong'),

      lgFontSize6: text('font size 6', '.lg-font-size-6'),
      lgFontSize6Strong: text('font size 6 strong', '.lg-font-size-6--strong'),

      lgFontSize5: text('font size 5', '.lg-font-size-5'),
      lgFontSize5Strong: text('font size 5 strong', '.lg-font-size-5--strong'),

      lgFontSize4: text('font size 4', '.lg-font-size-4'),
      lgFontSize4Strong: text('font size 4 strong', '.lg-font-size-4--strong'),

      lgFontSize3: text('font size 3', '.lg-font-size-3'),
      lgFontSize3Strong: text('font size 3 strong', '.lg-font-size-3--strong'),

      lgFontSize2: text('font size 2', '.lg-font-size-2'),
      lgFontSize2Strong: text('font size 2 strong', '.lg-font-size-2--strong'),

      lgFontSize1: text('font size 1', '.lg-font-size-1'),
      lgFontSize1Strong: text('font size 1 strong', '.lg-font-size-1--strong'),

      lgFontSize08: text('font size 08', '.lg-font-size-0-8'),
      lgFontSize06: text('font size 06', '.lg-font-size-0-6'),
    },
  }),
  {
    notes: {
      markdown: notes,
    },
  },
);

stories.add(
  'Page',
  () => ({
    template: `
      <h1 class="h1">Albert Camus</h1>
      <p>
        The Plague is a famous allegorical novel by Albert Camus, who's known
        for his existential works. The book was published in 1947 and is
        considered one of the most important works by Camus.
      </p>
      <ul>
        <li>A Happy Death (La Mort heureuse)</li>
        <li>The Stranger (L'Étranger, often translated as The Outsider.)</li>
        <li>The Plague (La Peste)</li>
        <li>The Fall (La Chute)</li>
      </ul>
      <p>
        The truth is that everyone is bored, and devotes himself to cultivating
        habits. <b>Our citizens work hard</b>, but solely with the object of
        getting rich. Their chief interest is commerce, and their chief aim in
        life is, as they call it, 'doing business.
      </p>
      <p>
        You must picture the consternation of our
        <a href="https://en.wikipedia.org/wiki/Oran">little town</a> hitherto
        so tranquil, and now, out of the blue, shaken to its core, like a quite
        healthy man who all of a sudden feels his temperature shoot up and the
        blood seething like wildfire in his veins.
      </p>
      <p>
        <small>They fancied themselves free, and no one will ever be free so
        long as there are pestilences.</small>
      </p>
      <p class="fs-0-6">
        The Plague (French: La Peste) is a novel by Albert Camus, published in
        1947
      </p>
  `,
  }),
  {
    notes: {
      markdown: notes,
    },
  },
);
