import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: 'lg-more-less-box',
  templateUrl: './more-less-box.component.html',
  styleUrls: [ './more-less-box.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgMoreLessBoxComponent {
  private _prefix = 'lg-more-less-box-';
  private _uniqueId = nextUniqueId++;

  private _id = `${this._prefix}id-${this._uniqueId}`;
  private _open = false;
  private _read = false;
  private _showReadIndicator = false;

  @HostBinding('class.lg-more-less-box') class = true;

  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @Input()
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
    this.cdr.markForCheck();
  }

  @Input()
  get showReadIndicator(): boolean {
    return this._showReadIndicator;
  }
  set showReadIndicator(value: boolean) {
    this._showReadIndicator = value;
    this.cdr.markForCheck();
  }

  @Input()
  get read(): boolean {
    return this._read;
  }
  set read(value: boolean) {
    this._read = value;
    this.cdr.markForCheck();
  }

  @Input()
  get open(): boolean {
    return this._open;
  }
  set open(value: boolean) {
    this._open = value;

    if (value) {
      this.read = true;
      this.opened.emit();
    } else {
      this.closed.emit();
    }

    this.cdr.markForCheck();
  }

  moreInfoId = `${this._prefix}more-${this._uniqueId}`;

  constructor(private cdr: ChangeDetectorRef) {}

  onToggleMoreLess(): void {
    this.open = !this.open;
  }
}
