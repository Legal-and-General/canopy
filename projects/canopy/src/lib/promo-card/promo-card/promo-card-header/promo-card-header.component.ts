import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-promo-card-header',
  templateUrl: './promo-card-header.component.html',
  styleUrls: ['./promo-card-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgPromoCardHeaderComponent implements OnInit {
  @HostBinding('class.lg-promo-card-header') class = true;

  @Input() header: string;

  constructor() {}

  ngOnInit(): void {}
}
