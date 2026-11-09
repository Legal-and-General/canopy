import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lg-story-content',
  template: '<p>Dummy tab content.</p>',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class StoryContentComponent {}
