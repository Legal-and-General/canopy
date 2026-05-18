import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

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

  private hasProcessedContent = false;

  ngAfterContentChecked(): void {
    if (!this.hasProcessedContent) {
      const hostEl = this.hostElement.nativeElement as HTMLElement;
      const childEl = hostEl.firstElementChild as HTMLAnchorElement | HTMLButtonElement;

      if (childEl) {
        this.renderer.addClass(childEl, 'lg-footer-action');

        if (childEl.tagName === 'A') {
          this.renderer.setAttribute(childEl, 'rel', 'noopener');
        } else if (childEl.tagName === 'BUTTON') {
          this.renderer.addClass(childEl, 'lg-footer-action--button');
          this.renderer.setAttribute(childEl, 'type', 'button');
        } else {
          console.error(
            `Unsupported tag: ${childEl.tagName}. lg-footer-nav-item only supports A and BUTTON.`,
          );
        }

        this.hasProcessedContent = true;
      }
    }
  }
}
