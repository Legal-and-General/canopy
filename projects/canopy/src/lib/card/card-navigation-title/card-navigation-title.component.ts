import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Params, QueryParamsHandling } from '@angular/router';

import type { HeadingLevel } from '../../heading';
import isExternalURL from '../../utils/external-links';

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
  protected externalLink: boolean;
  @Input() headingLevel: HeadingLevel;
  @Input() title = '';
  @Input() link = '';
  @Input() queryParams?: Params = null;
  @Input() queryParamsHandling?: QueryParamsHandling = null;
  @Output() linkClickedEvent = new EventEmitter<void>();

  ngOnInit(): void {
    if (!(this.headingLevel && this.title && this.link)) {
      // eslint-disable-next-line no-console
      console.error('headingLevel, title and link must be set');
    }
  }

  ngOnChanges({ link }: SimpleChanges): void {
    if (link?.currentValue) {
      this.externalLink = isExternalURL(link?.currentValue);
    }
  }

  linkClicked(): void {
    this.linkClickedEvent.emit();
  }
}
