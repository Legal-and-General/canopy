import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { lgIconChevronDown } from '../../icon';
import type { Variant } from '../../variant';

@Component({
  selector: 'lg-details-panel-heading',
  templateUrl: './details-panel-heading.component.html',
  styleUrls: [ './details-panel-heading.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgDetailsPanelHeadingComponent {
  @Input() headingLevel;
  @Input() isActive = false;

  _showIcon = true;
  @Input()
  set showIcon(showIcon: boolean) {
    this._showIcon = showIcon;
    this.cdr.detectChanges();
  }
  get showIcon(): boolean {
    return this._showIcon;
  }

  _variant: Variant = 'generic';
  @Input()
  set variant(variant: Variant) {
    this._variant = variant;
    this.cdr.detectChanges();
  }
  get variant(): Variant {
    return this._variant;
  }

  @Output() toggleActive = new EventEmitter<boolean>();

  chevronDown = lgIconChevronDown.name;
  uniqueId: number;

  constructor(private cdr: ChangeDetectorRef) {}

  toggle(): void {
    this.isActive = !this.isActive;
    this.toggleActive.emit(this.isActive);
  }
}
