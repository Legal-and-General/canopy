import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { Behaviour, Variant } from './button.interface';

@Component({
  selector: 'lg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgButtonComponent implements OnChanges {
  @Input() variant: Variant = 'primary';
  @Input() behaviour: Behaviour = 'button';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() rounded = false;
  @Input() loading = false;

  @Output() action = new EventEmitter();

  ngOnChanges() {
    this.disabled = this.loading;
  }

  handleAction() {
    this.action.emit();
  }
}
