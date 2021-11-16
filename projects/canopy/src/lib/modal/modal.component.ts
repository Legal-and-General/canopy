import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { keyName } from '../utils/keyboard-keys';

import { LgModalService } from './modal.service';
import { LgModalHeaderComponent } from './modal-header/modal-header.component';
import { LgModalBodyComponent } from './modal-body/modal-body.component';

@Component({
  selector: 'lg-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgModalComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() id: string;
  @Output() open: EventEmitter<void> = new EventEmitter();
  @Output() closed: EventEmitter<void> = new EventEmitter();
  @ContentChild(forwardRef(() => LgModalHeaderComponent))
  modalHeaderComponent: LgModalHeaderComponent;
  @ContentChild(forwardRef(() => LgModalBodyComponent))
  modalBodyComponent: LgModalBodyComponent;

  isOpen: boolean;
  private subscription: Subscription;

  constructor(private cdr: ChangeDetectorRef, private modalService: LgModalService) {}

  ngOnInit(): void {
    this.subscription = this.modalService
      .isOpen$(this.id)
      .pipe(
        map((isOpen) => {
          this.isOpen = isOpen;

          const bodyEl: HTMLBodyElement = document.querySelector('body');

          if (isOpen) {
            bodyEl.style.overflow = 'hidden';
            this.open.emit();
          } else {
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

  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent): void {
    if (event.key === keyName.KEY_ESCAPE && this.isOpen) {
      this.modalService.close(this.id);
    }
  }

  // onOverlayClick and onModalClick add the following functionality:
  // clicking outside the modal closes the modal unless specified
  // otherwise using closeOnOverlayClick.
  @HostListener('click') onOverlayClick(): void {
    this.modalService.close(this.id);
  }

  onModalClick(event: Event): void {
    event.stopPropagation();
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.subscription.unsubscribe();
  }
}
