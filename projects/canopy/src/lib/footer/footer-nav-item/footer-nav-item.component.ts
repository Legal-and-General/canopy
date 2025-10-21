import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { FooterNavVariant } from '../footer.interface';

@Component({
  selector: 'lg-footer-nav-item',
  templateUrl: './footer-nav-item.component.html',
  styleUrls: [ 'footer-nav-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer-nav-item',
    role: 'listitem',
  },
  standalone: true,
})
export class LgFooterNavItemComponent implements AfterContentChecked {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  private currentVariant: FooterNavVariant;
  variant: FooterNavVariant;

  ngAfterContentChecked(): void {
    if (this.variant && this.variant !== this.currentVariant) {
      const hostEl = this.hostElement.nativeElement as HTMLElement;

      this.currentVariant = this.variant;
      this.renderer.addClass(hostEl, `lg-footer-nav-item--${this.variant}`);

      const childEl = hostEl.firstElementChild as HTMLAnchorElement | HTMLButtonElement;

      this.renderer.addClass(childEl, 'lg-footer-action');

      if (childEl.tagName === 'BUTTON') {
        this.renderer.addClass(childEl, 'lg-footer-action--button');
        this.renderer.setAttribute(childEl, 'type', 'button');
      } else if (childEl.tagName !== 'A' && childEl.tagName !== 'BUTTON') {
        console.error(
          `Unsupported tag: ${childEl.tagName}. lg-footer-nav-item only supports A and BUTTON.`,
        );
      }
    }
  }
}
