import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { LgRadioGroupComponent } from './radio-group.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgRadioButtonComponent implements OnInit {
  checked = false;

  @Input() id = `lg-radio-button-${++nextUniqueId}`;

  @Input() name: string;

  @Input() value: string;

  @HostBinding('class') class = 'lg-radio-button';

  constructor(private radioGroup: LgRadioGroupComponent) {}

  ngOnInit() {
    if (this.radioGroup.value === this.value) {
      this.checked = true;
    }
    this.name = this.radioGroup.name;
  }

  onCheck() {
    if (this.radioGroup.value !== this.value) {
      this.radioGroup.value = this.value;
    }
  }
}
