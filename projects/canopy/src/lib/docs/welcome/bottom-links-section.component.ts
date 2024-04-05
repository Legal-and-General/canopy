import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgLinkMenuComponent, LgLinkMenuItemComponent } from '../../link-menu';
import { LgSeparatorComponent } from '../../separator';
import { LgMarginDirective } from '../../spacing';

@Component({
  selector: 'lg-docs-welcome-bottom-links-section',
  standalone: true,
  imports: [
    CommonModule,
    LgLinkMenuComponent,
    LgSeparatorComponent,
    LgMarginDirective,
    LgLinkMenuItemComponent,
  ],
  template: `
    <h2 class="lg-font--expressive lg-font-size-4--strong">{{ heading }}</h2>

    <p>{{ text }}</p>

    <lg-separator lgMarginBottom="none"></lg-separator>

    <lg-link-menu>
      <a *ngFor="let link of links" [href]="link.href" target="_blank">
        <lg-link-menu-item>
          <lg-link-menu-item-text isBold="true">{{ link.text }}</lg-link-menu-item-text>
        </lg-link-menu-item>
      </a>
    </lg-link-menu>
  `,
  styleUrls: [ './bottom-links-section.component.scss' ],
})
export class DocsWelcomeBottomLinksSectionComponent {
  @Input() heading: string;
  @Input() text: string;
  @Input() links: Array<{ href: string; text: string }>;
}
