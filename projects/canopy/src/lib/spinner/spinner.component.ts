import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { SpinnerVariant } from './spinner.interface';

@Component({
  selector: 'lg-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgSpinnerComponent {
  @HostBinding('class') class = 'lg-spinner';

  @Input() variant: SpinnerVariant = 'dark';
}
