import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-promo-card-list',
  templateUrl: './promo-card-list.component.html',
  styleUrls: ['./promo-card-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgPromoCardListComponent implements OnInit {
  @HostBinding('class.lg-promo-card-list') class = true;

  @Input() public title: string;

  constructor() {}

  ngOnInit(): void {}
}
