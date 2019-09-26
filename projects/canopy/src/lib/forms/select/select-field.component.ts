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
import { LgSelectDirective } from './select.directive';

let nextUniqueId = 0;

@Component({
  selector: 'lg-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgSelectFieldComponent implements AfterViewInit {
  @Input() id = `lg-select-${nextUniqueId++}`;

  @HostBinding('class') class = 'lg-select';

  @ViewChild(LgLabelDirective, { static: true })
  labelElement: LgLabelDirective;

  @ContentChild(LgSelectDirective, { static: true })
  selectElement: LgSelectDirective;

  ngAfterViewInit() {
    if (this.labelElement) {
      this.labelElement.for = this.id;
    }
    if (this.selectElement) {
      this.selectElement.class = 'lg-select__field';
      this.selectElement.id = this.id;
    }
  }
}
