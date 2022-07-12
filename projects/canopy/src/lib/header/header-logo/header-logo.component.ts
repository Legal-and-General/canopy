import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

type HeaderLogoClass = 'lg-header-logo__img' | 'lg-header-logo__second-img';

@Component({
  selector: 'lg-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: [ 'header-logo.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-header-logo',
  },
})
export class LgHeaderLogoComponent implements AfterContentChecked {
  private currentClass: HeaderLogoClass;
  class: HeaderLogoClass;

  @Input() alt = '';
  @Input() src: string;
  @Input() href: string;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentChecked(): void {
    if (this.class && this.class !== this.currentClass) {
      this.currentClass = this.class;
      this.cdr.detectChanges();
    }
  }
}
