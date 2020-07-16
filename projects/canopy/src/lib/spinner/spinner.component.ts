import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

import { SpinnerVariant } from './spinner.interface';

@Component({
  selector: 'lg-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgSpinnerComponent {
  @HostBinding('class.lg-spinner') class = true;

  @Input() variant: SpinnerVariant = 'dark';
  /*
   * Until the below issue is resolved we've decided to pass the content via an input instead of <ng-content>:
   * https://github.com/angular/angular/issues/26083#issuecomment-425227938.
   */
  @Input() text: string;
}
