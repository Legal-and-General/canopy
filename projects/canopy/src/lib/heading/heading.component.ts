import { Component, Input } from '@angular/core';
import { HeadingLevel } from './heading.interface';

@Component({
  selector: 'lg-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class LgHeadingComponent {
  @Input() level: HeadingLevel;
  @Input() class?: string;
}
