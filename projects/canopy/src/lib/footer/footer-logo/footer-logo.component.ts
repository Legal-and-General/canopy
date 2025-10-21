import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { NgClass } from '@angular/common';

type FooterLogoClass = 'lg-footer-logo__img' | 'lg-footer-logo__second-img';

@Component({
  selector: 'lg-footer-logo',
  templateUrl: './footer-logo.component.html',
  styleUrls: [ 'footer-logo.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer-logo',
  },
  imports: [ NgClass ],
})
export class LgFooterLogoComponent implements AfterContentChecked {
  private cdr = inject(ChangeDetectorRef);

  private currentClass: FooterLogoClass;
  class: FooterLogoClass;

  @Input() alt = '';
  @Input() src: string;

  ngAfterContentChecked(): void {
    if (this.class && this.class !== this.currentClass) {
      this.currentClass = this.class;
      this.cdr.detectChanges();
    }
  }
}
