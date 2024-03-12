import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

import type { Variant } from '../variant';
import {
  lgIconCheckmarkSpotFill,
  LgIconComponent,
  lgIconCrossmarkSpotFill,
  lgIconInformationFill,
  LgIconRegistry,
  lgIconWarningFill,
} from '../icon';

@Component({
  selector: 'lg-alert',
  templateUrl: './alert.component.html',
  styleUrls: [ './alert.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [ NgIf, NgSwitch, NgSwitchCase, LgIconComponent ],
})
export class LgAlertComponent implements OnChanges {
  private _variant: Variant;
  private explicitRole: string;

  @Input() showIcon = true;
  @Input()
  set variant(variant: Variant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-variant--${this._variant}`,
      );
    }

    this.renderer.addClass(this.hostElement.nativeElement, `lg-variant--${variant}`);
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  @HostBinding('class.lg-alert') class = true;
  @HostBinding('attr.role') roleAttr: string;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private iconRegistry: LgIconRegistry,
  ) {
    this.variant = 'generic';

    this.iconRegistry.registerIcons([
      lgIconCrossmarkSpotFill,
      lgIconInformationFill,
      lgIconWarningFill,
      lgIconCheckmarkSpotFill,
    ]);
  }

  ngOnChanges() {
    this.initRole();
  }

  @Input() set role(role: string) {
    this.explicitRole = role;
  }
  private initRole() {
    if (this.explicitRole) {
      if (this.explicitRole !== 'none') {
        this.roleAttr = this.explicitRole;
      }
    } else {
      switch (this.variant) {
        case 'error':
        case 'warning':
        case 'success':
          this.roleAttr = 'alert';
      }
    }
  }
}
