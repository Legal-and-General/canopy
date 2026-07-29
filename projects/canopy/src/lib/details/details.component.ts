import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DoCheck,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Subscription } from 'rxjs';

import type { IconName } from '../icon';
import type { Status } from '../status';
import { LgStatusDirective } from '../status';
import { randomUniqueId } from '../utils';

import { LgDetailsPanelHeadingComponent } from './details-panel-heading/details-panel-heading.component';

@Component({
  selector: 'lg-details',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  hostDirectives: [
    {
      directive: LgStatusDirective,
      inputs: [ 'lgStatus:status', 'lgStatusTheme:statusTheme' ],
    },
  ],
})
export class LgDetailsComponent implements AfterContentInit, DoCheck, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly statusDirective = inject(LgStatusDirective);

  private subscription: Subscription;
  private panelHeadingStatus?: Status;
  uniqueId = randomUniqueId();
  _showIcon = true;
  _icon?: IconName;

  @Input() isActive = false;
  @Input()
  set showIcon(showIcon: boolean) {
    this._showIcon = showIcon;

    if (this.panelHeading) {
      this.panelHeading.showIcon = showIcon;
    }
  }
  get showIcon(): boolean {
    return this._showIcon;
  }

  @Input()
  set icon(icon: IconName | undefined) {
    this._icon = icon;

    if (this.panelHeading) {
      this.panelHeading.icon = icon;
    }
  }
  get icon(): IconName | undefined {
    return this._icon;
  }

  get status(): Status {
    return this.statusDirective.status;
  }

  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @HostBinding('class.lg-details') class = true;
  @HostBinding('attr.role') get role(): string {
    if (this.status !== 'info' && this.status !== 'generic') {
      return 'alert';
    }
  }

  @ContentChild(LgDetailsPanelHeadingComponent)
  panelHeading: LgDetailsPanelHeadingComponent;

  ngAfterContentInit(): void {
    this.panelHeading.uniqueId = this.uniqueId;
    this.panelHeading.isActive = this.isActive;
    this.panelHeading.statusDirective = this.statusDirective;
    this.panelHeading.status = this.status;
    this.panelHeadingStatus = this.status;
    this.panelHeading.showIcon = this.showIcon;
    this.panelHeading.icon = this.icon;

    this.subscription = this.panelHeading.toggleActive.subscribe(isActive => {
      this.isActive = isActive;

      if (isActive) {
        this.opened.emit();
      } else {
        this.closed.emit();
      }

      this.cdr.markForCheck();
    });
  }

  ngDoCheck(): void {
    if (!this.panelHeading || this.panelHeadingStatus === this.status) {
      return;
    }

    this.panelHeading.status = this.status;
    this.panelHeadingStatus = this.status;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
