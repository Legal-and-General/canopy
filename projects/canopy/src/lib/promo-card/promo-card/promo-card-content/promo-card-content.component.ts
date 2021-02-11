import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-promo-card-content',
  templateUrl: './promo-card-content.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LgPromoCardContentComponent implements OnInit {
  @HostBinding('class.lg-promo-card-content') class = true;

  constructor() {}

  ngOnInit(): void {}
}
