import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-promo-card-footer',
  templateUrl: './promo-card-footer.component.html',
  styleUrls: ['./promo-card-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgPromoCardFooterComponent implements OnInit {
  @HostBinding('class.lg-promo-card-footer') class = true;

  constructor() {}

  ngOnInit(): void {}
}
