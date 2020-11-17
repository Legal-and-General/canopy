import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { CanopyModule } from '../lib/canopy.module';
import { notes } from './typography.notes';

export default {
  title: 'Typography',
  parameters: {
    decorators: [
      moduleMetadata({
        imports: [CanopyModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const headings = () => ({
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
  parameters: {
    decorators: [withKnobs],
  },
});

export const page = () => ({
  template: `
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
  `,
});
