import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';

@Component({
  selector: 'lg-card-navigation-title',
  templateUrl: './card-navigation-title.component.html',
  styleUrls: [ './card-navigation-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-card-navigation-title',
  },
})
export class LgCardNavigationTitleComponent implements OnInit {
  @Input() headingLevel: HeadingLevel;
  @Input() title = '';
  @Input() link = '';
  @Output() linkClickedEvent = new EventEmitter<void>();

  ngOnInit(): void {
    if (!(this.headingLevel && this.title && this.link)) {
      // eslint-disable-next-line no-console
      console.error('headingLevel, title and link must be set');
    }
  }

  linkClicked(): void {
    this.linkClickedEvent.emit();
  }
}
