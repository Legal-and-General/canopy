import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgFooterLogoComponent } from './footer-logo/footer-logo.component';

@Component({
  selector: '[lg-footer]',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer',
    role: 'contentinfo',
  },
  standalone: true,
})
export class LgFooterComponent implements AfterContentInit {
  @ContentChildren(forwardRef(() => LgFooterLogoComponent), {
    descendants: true,
  })
  footerLogos: QueryList<LgFooterLogoComponent>;

  ngAfterContentInit(): void {
    this.footerLogos.forEach((footerLogo, i) => {
      footerLogo.class = i === 0
        ? 'lg-footer-logo__img'
        : 'lg-footer-logo__second-img';
    });
  }
}
