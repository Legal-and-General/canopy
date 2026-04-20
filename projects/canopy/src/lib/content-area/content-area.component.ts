import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { ContentAreaVariant } from './content-area.interface';

@Component({
  selector: 'lg-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: [ './content-area.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgContentAreaComponent {
  @HostBinding('class.lg-content-area') class = true;

  @Input() variant: ContentAreaVariant = 'default';

  @HostBinding('class') get variantClass(): string {
    return `lg-content-area--${this.variant}`;
  }
}
