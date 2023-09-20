import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

import { IconName } from '../../icon/icons.interface';

type Name = IconName;

@Component({
  selector: '[lg-list-with-icons-item]',
  templateUrl: './list-with-icons-item.component.html',
  styleUrls: [ './list-with-icons-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-list-with-icons-item',
  },
})
export class LgListWithIconsItemComponent implements AfterViewInit, OnChanges {
  @Input() iconName: Name;
  @Input() iconColour: string;

  constructor(private hostElement: ElementRef) {}

  ngAfterViewInit(): void {
    this.updateIconColour(this.iconColour);
  }

  ngOnChanges({ iconColour }: SimpleChanges) {
    if (iconColour) {
      this.updateIconColour(iconColour.currentValue);
    }
  }

  private updateIconColour(colour: string): void {
    const el = this.hostElement.nativeElement.getElementsByTagName('lg-icon')[0];

    if (el) {
      const isCssVar = colour?.startsWith('--');

      el.style.color = isCssVar
        ? `var(${colour})`
        : colour;
    }
  }
}
