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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LgRadioButtonComponent implements OnInit {
  checked: boolean;

  @Input() id = `lg-radio-button-${++nextUniqueId}`;

  @Input() name: string;

  @Input() value: string;

  @HostBinding('class') class = 'lg-radio-button';

  constructor(
    private radioGroup: LgRadioGroupComponent,
    private changeDetector: ChangeDetectorRef
  ) {}

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

  public markForCheck(): void {
    this.changeDetector.markForCheck();
  }
}
