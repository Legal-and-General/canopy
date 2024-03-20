import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DOCUMENT, NgIf } from '@angular/common';

import { keyName } from '../utils/keyboard-keys';
import { LgCardContentComponent } from '../card/card-content/card-content.component';
import { LgFocusDirective } from '../focus/focus.directive';
import { LgPaddingDirective } from '../spacing/padding/padding.directive';
import { LgCardComponent } from '../card/card.component';

import { LgModalBodyComponent } from './modal-body/modal-body.component';
import { LgModalHeaderComponent } from './modal-header/modal-header.component';
import { LgModalService } from './modal.service';

@Component({
  selector: 'lg-modal',
  templateUrl: './modal.component.html',
  styleUrls: [ './modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-modal',
  },
  standalone: true,
  imports: [
    NgIf,
    LgCardComponent,
    CdkTrapFocus,
    LgPaddingDirective,
    LgFocusDirective,
    LgCardContentComponent,
  ],
})
export class LgModalComponent implements OnInit, AfterContentInit, OnDestroy {
  private subscription: Subscription;
  isOpen: boolean;
  @Input() id: string;
  @Output() open: EventEmitter<void> = new EventEmitter();
  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() closedOverlayClick: EventEmitter<void> = new EventEmitter();
  @Output() closedEscKey: EventEmitter<void> = new EventEmitter();

  @ContentChild(forwardRef(() => LgModalHeaderComponent))
  modalHeaderComponent: LgModalHeaderComponent;
  @ContentChild(forwardRef(() => LgModalBodyComponent))
  modalBodyComponent: LgModalBodyComponent;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cdr: ChangeDetectorRef,
    private modalService: LgModalService,
  ) {}

  @HostListener('keydown', [ '$event' ]) onKeydown(event: KeyboardEvent): void {
    if (event.key === keyName.KEY_ESCAPE && this.isOpen) {
      this.modalService.close(this.id);
      this.closedEscKey.emit();
    }
  }

  // onOverlayClick and onModalClick add the following functionality:
  // clicking outside the modal closes the modal unless specified
  // otherwise using closeOnOverlayClick.
  // We specifically listen to the `mousedown` event because with
  // the `click` event a user could click inside the modal and
  // drag the mouse on the overlay causing the modal to close.
  @HostListener('mousedown') onOverlayClick(): void {
    this.modalService.close(this.id);
    this.closedOverlayClick.emit();
  }

  ngOnInit(): void {
    this.subscription = this.modalService
      .isOpen$(this.id)
      .pipe(
        map(isOpen => {
          this.isOpen = isOpen;

          const bodyEl: HTMLBodyElement = this.document.querySelector('body');

          if (isOpen) {
            bodyEl.style.overflow = 'hidden';
            this.open.emit();
          } else if (isOpen !== undefined) {
            this.closed.emit();
            bodyEl.style.overflow = '';
          }

          this.cdr.detectChanges();
        }),
      )
      .subscribe();
  }

  ngAfterContentInit(): void {
    this.modalHeaderComponent.id = `lg-modal-header-${this.id}`;
    this.modalHeaderComponent.modalId = this.id;
    this.modalBodyComponent.id = `lg-modal-body-${this.id}`;
  }

  onModalClick(event: Event): void {
    event.stopPropagation();
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.subscription.unsubscribe();
  }
}
