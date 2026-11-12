import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

import { PageVariant } from './page.interface';

@Component({
  selector: 'lg-page',
  templateUrl: './page.component.html',
  styleUrls: [ './page.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class LgPageComponent {
  @HostBinding('class.lg-page') class = true;

  @Input() variant: PageVariant = 'default';

  @HostBinding('class') get variantClass(): string {
    return `lg-page--${this.variant}`;
  }

  public skipToMain(event: Event, $element: HTMLElement) {
    event.preventDefault();
    $element.focus();
  }
}
