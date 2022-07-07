import {
  AfterContentInit,
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
})
export class LgFooterNavComponent implements OnInit, AfterContentInit {
  @Input() variant: FooterNavVariant;

  @ContentChildren(forwardRef(() => LgFooterNavItemComponent), {
    descendants: true,
  })
  footerNavItemComponents: QueryList<LgFooterNavItemComponent>;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit(): void {
    const el = this.hostElement.nativeElement as HTMLElement;

    this.renderer.addClass(el, `lg-footer-nav--${this.variant}`);
    this.renderer.setAttribute(el, 'aria-labelledby', `lg-footer-links-${this.variant}`);
  }

  ngAfterContentInit(): void {
    this.footerNavItemComponents.forEach(item => (item.variant = this.variant));
  }
}
