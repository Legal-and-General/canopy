import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'lg-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: [ './modal-body.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-modal-body',
  },
  standalone: true,
})
export class LgModalBodyComponent {
  private cdr = inject(ChangeDetectorRef);

  private _id: string;
  @HostBinding('id') get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
    this.cdr.markForCheck();
  }
}
