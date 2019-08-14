import { Component, Input } from '@angular/core';

@Component({
  selector: 'lg-heading',
  templateUrl: './heading.component.html',
})
export class LgHeadingComponent {
  @Input() level: number;
  @Input() class: string = null;
}
