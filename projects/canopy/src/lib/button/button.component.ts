import { Component, Input } from '@angular/core';
import { Behaviour, Variant } from './types';

@Component({
  selector: 'lg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class LgButtonComponent {
  @Input() variant: Variant = 'primary';

  @Input() behaviour: Behaviour = 'button';

  @Input() disabled = false;

  @Input() fullWidth = false;

  @Input() rounded = false;
}
