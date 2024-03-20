import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { LgModalService } from '../modal.service';

@Directive({
  selector: '[lgModalTrigger]',
  standalone: true,
})
export class LgModalTriggerDirective implements OnInit, OnDestroy {
  private allowFocusOnModalTrigger: boolean;
  private subscription: Subscription;

  @Input() lgModalTrigger: string;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  constructor(
    private el: ElementRef,
    private modalService: LgModalService,
  ) {}

  @HostListener('click') openModal(): void {
    this.allowFocusOnModalTrigger = true;
    this.modalService.open(this.lgModalTrigger);
    this.clicked.emit();
  }

  ngOnInit(): void {
    this.subscription = this.modalService
      .isOpen$(this.lgModalTrigger)
      .pipe(
        filter(isOpen => !isOpen && this.allowFocusOnModalTrigger),
        map(() => {
          (this.el.nativeElement as HTMLElement).focus();
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
