import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  HostListener,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { keyName } from '../utils/keyboard-keys';
import { LgButtonToggleDirective } from '../button/button-toggle/button-toggle.directive';

import { LgFilterContainerPanelComponent } from './filter-container-panel/filter-container-panel.component';
import {
  lgFilterContainerPanelIdPrefix,
  lgFilterContainerToggleIdPrefix,
} from './filter-container.constants';

let nextUniqueId = 0;

@Component({
  selector: 'lg-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: [ 'filter-container.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-filter-container',
  },
})
export class LgFilterContainerComponent implements AfterContentInit, OnDestroy {
  private uniqueId = nextUniqueId++;
  private subscription: Subscription;

  @HostBinding('id') id = `lg-filter-container-${this.uniqueId}`;

  @ContentChild(forwardRef(() => LgButtonToggleDirective))
  filterContainerToggle: LgButtonToggleDirective;

  @ContentChild(forwardRef(() => LgFilterContainerPanelComponent))
  filterContainerPanel: LgFilterContainerPanelComponent;

  @HostListener('keydown', [ '$event' ]) onKeydown(event: KeyboardEvent): void {
    if (event.key === keyName.KEY_ESCAPE && this.filterContainerToggle?.isActive) {
      this.filterContainerToggle.toggle();
    }
  }

  ngAfterContentInit(): void {
    this.filterContainerToggle.id = `${lgFilterContainerToggleIdPrefix}${this.uniqueId}`;
    this.filterContainerToggle.ariaControls = `${lgFilterContainerPanelIdPrefix}${this.uniqueId}`;
    this.filterContainerPanel.uniqueId = this.uniqueId;

    this.subscription = this.filterContainerToggle.toggleActive.subscribe(isActive => {
      this.filterContainerPanel.isActive = isActive;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
