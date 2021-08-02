import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgContentSrollComponent } from './content-scroll.component';
import { ContentScrollBreakpoints } from './content-scroll.interface';

import { notes } from './content-scroll.notes';

export default {
  title: 'Components/Content Scroll',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [LgContentSrollComponent],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-content-scroll [scrollContentAt]="scrollContentAt" [scrollHeight]="scrollHeight" [listNoIndent]="listNoIndent">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p> \
    <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. </p> \
    <ol><li>Nulla metus metus</li><li>Nllamcorper vel</li><li>Tincidunt sed<ol><li>Euismod in</li><li>Nibh</li><li>Quisque volutpat<ol><li>Ad litora</li><li>Torquent per</li></ol></li><li>Condimentum velit</li></ol></li><li>Class aptent</li><li>Taciti sociosqu<ul><li>Ad litora</li><li>Torquent per</li></ul></li><li>Conubia nostra</li></ol> \
    <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. </p>
    </lg-content-scroll>
  `,
  props: {
    scrollContentAt: select(
      'Minimum breakpoint where content is in scrolable region',
      [
        ContentScrollBreakpoints.Small,
        ContentScrollBreakpoints.Medium,
        ContentScrollBreakpoints.Large,
      ],
      ContentScrollBreakpoints.Medium,
      'Responsive options',
    ),
    scrollHeight: text('scrollHeight', '90vh'),
    listNoIndent: boolean('listNoIndent', false),
  },
});
