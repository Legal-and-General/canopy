import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardHeaderComponent {
  @HostBinding('class.lg-card-header') class = true;

  @Input() hasContent = false;
  @HostBinding('class.lg-card-header--with-content') get getContentClass() {
    return this.hasContent;
  }
}
