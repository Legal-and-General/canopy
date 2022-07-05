import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgHeaderLogoComponent } from './header-logo/header-logo.component';

@Component({
  selector: '[lg-header]',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-header',
  },
})
export class LgHeaderComponent implements AfterContentInit {
  @ContentChildren(forwardRef(() => LgHeaderLogoComponent), {
    descendants: true,
  })
  headerLogos: QueryList<LgHeaderLogoComponent>;

  ngAfterContentInit(): void {
    this.headerLogos.forEach((headerLogo, i) => {
      headerLogo.class = i === 0
        ? 'lg-header-logo__img'
        : 'lg-header-logo__second-img';
    });
  }
}
