import { Component, Input } from '@angular/core';

import {
  LgLinkMenuComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemTextComponent,
} from '../../link-menu';

export interface DocsWelcomeLink {
  href: string;
  text: string;
  target?: '_blank' | '_top';
}

@Component({
  selector: 'lg-docs-welcome-bottom-links-section',
  imports: [ LgLinkMenuComponent, LgLinkMenuItemTextComponent, LgLinkMenuItemComponent ],
  template: `
    <h2 class="lg-font--expressive lg-font-size-4--700">{{ heading }}</h2>

    <p>{{ text }}</p>

    <lg-link-menu>
      @for (link of links; track link) {
        <a
          [href]="link.href"
          [target]="link.target ?? '_blank'"
          [attr.rel]="link.target === '_top' ? null : 'noopener noreferrer'"
        >
          <lg-link-menu-item>
            <lg-link-menu-item-text isBold="true">{{ link.text }}</lg-link-menu-item-text>
          </lg-link-menu-item>
        </a>
      }
    </lg-link-menu>
  `,
  styleUrls: [ './bottom-links-section.component.scss' ],
})
export class DocsWelcomeBottomLinksSectionComponent {
  @Input() heading: string;
  @Input() text: string;
  @Input() links: Array<DocsWelcomeLink>;
}
