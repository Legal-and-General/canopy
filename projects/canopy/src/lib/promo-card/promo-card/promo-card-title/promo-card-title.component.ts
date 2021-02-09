import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-promo-card-title',
  templateUrl: './promo-card-title.component.html',
  styleUrls: ['./promo-card-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgPromoCardHeaderComponent implements OnInit {
  @HostBinding('class.lg-promo-card-title') class = true;

  @Input() headingLevel: string;

  constructor() {}

  ngOnInit(): void {}
}
