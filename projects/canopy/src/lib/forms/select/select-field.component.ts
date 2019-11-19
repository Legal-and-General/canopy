import {
  Component,
  ContentChild,
  HostBinding,
  Input,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { LgHintComponent } from '../hint/hint.component';
import { LgLabelComponent } from '../label/label.component';
import { LgSelectDirective } from './select.directive';

let nextUniqueId = 0;

@Component({
  selector: 'lg-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgSelectFieldComponent {
  @Input() id = `lg-select-${nextUniqueId++}`;

  @HostBinding('class') class = 'lg-select';

  _labelElement: LgLabelComponent;
  @ViewChild(LgLabelComponent, { static: true })
  set labelElement(element: LgLabelComponent) {
    this._labelElement = element;
    this._labelElement.for = this.id;
  }

  _selectElement: LgSelectDirective;
  @ContentChild(LgSelectDirective, { static: true })
  set selectElement(element: LgSelectDirective) {
    this._selectElement = element;
    this._selectElement.class = 'lg-select__field';
    this._selectElement.id = this.id;
  }

  _hintElement: LgHintComponent;
  @ContentChild(LgHintComponent, { static: false })
  set hintElement(element: LgHintComponent) {
    this._selectElement.ariaDescribedBy = element ? element.id : null;
    this._hintElement = element;
  }
}
