import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lg-sample',
  templateUrl: './sample.component.html',
})
export class LgSampleComponent {
  readonly label = input.required<string>();
  readonly compact = input(false);
  readonly changed = output<boolean>();
}
