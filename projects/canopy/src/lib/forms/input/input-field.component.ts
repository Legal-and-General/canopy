import {
  AfterViewInit,
  Component,
  ContentChild,
  HostBinding,
  Input,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { LgLabelDirective } from '../label';
import { LgInputDirective } from './input.directive';

let nextUniqueId = 0;

@Component({
  selector: 'lg-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgInputFieldComponent implements AfterViewInit {
  @Input() id = `lg-input-${nextUniqueId++}`;

  @HostBinding('class') class = 'lg-input';

  @ViewChild(LgLabelDirective, { static: true })
  labelElement: LgLabelDirective;

  @ContentChild(LgInputDirective, { static: true })
  inputElement: LgInputDirective;

  ngAfterViewInit() {
    if (this.labelElement) {
      this.labelElement.for = this.id;
    }
    if (this.inputElement) {
      this.inputElement.class = 'lg-input__field';
      this.inputElement.id = this.id;
    }
  }
}
