import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Behaviour, Variant } from './button.interface';

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

  @Output() action = new EventEmitter();

  handleAction() {
    this.action.emit();
  }
}
