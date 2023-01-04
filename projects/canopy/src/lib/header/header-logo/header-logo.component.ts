import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { keyName } from '../../utils/keyboard-keys';

type HeaderLogoClass = 'lg-header-logo__img' | 'lg-header-logo__second-img';

@Component({
  selector: 'lg-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: [ 'header-logo.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-header-logo',
  },
})
export class LgHeaderLogoComponent implements AfterContentChecked {
  private currentClass: HeaderLogoClass;
  class: HeaderLogoClass;

  @Input() alt = '';
  @Input() src: string;
  @Input() href: string;

  @ViewChild('logolink') logoLinkRef: ElementRef;

  @Output() tabbedOut: EventEmitter<KeyboardEvent> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('keydown', [ '$event' ]) handleKeyDown(event: KeyboardEvent) {
    if (event.key === keyName.KEY_TAB) {
      this.tabbedOut.emit(event);
    }
  }

  ngAfterContentChecked(): void {
    if (this.class && this.class !== this.currentClass) {
      this.currentClass = this.class;
      this.cdr.detectChanges();
    }
  }

  focus() {
    this.logoLinkRef.nativeElement.focus();
  }
}
