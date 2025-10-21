import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { LgFooterNavItemComponent } from '../footer-nav-item/footer-nav-item.component';
import { FooterNavVariant } from '../footer.interface';

@Component({
  selector: 'lg-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: [ 'footer-nav.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer-nav',
    role: 'navigation',
  },
  standalone: true,
})
export class LgFooterNavComponent implements OnInit, AfterViewChecked {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  private currentFooterNavItemLength: number;

  @Input() variant: FooterNavVariant;

  @ContentChildren(forwardRef(() => LgFooterNavItemComponent), {
    descendants: true,
  })
  footerNavItemComponents: QueryList<LgFooterNavItemComponent>;

  ngOnInit(): void {
    const el = this.hostElement.nativeElement as HTMLElement;

    this.renderer.addClass(el, `lg-footer-nav--${this.variant}`);
    this.renderer.setAttribute(el, 'aria-labelledby', `lg-footer-links-${this.variant}`);
  }

  ngAfterViewChecked(): void {
    const footerNavItemLength = this.footerNavItemComponents?.toArray().length;

    if (footerNavItemLength && footerNavItemLength !== this.currentFooterNavItemLength) {
      this.currentFooterNavItemLength = footerNavItemLength;
      this.footerNavItemComponents.forEach(item => (item.variant = this.variant));
    }
  }
}
