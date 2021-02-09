import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-promo-card-image',
  templateUrl: './promo-card-image.component.html',
  styleUrls: ['./promo-card-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgPromoCardImageComponent implements OnInit {
  @HostBinding('class.lg-promo-card-image') class = true;

  @Input() imageUrl: string;

  constructor() {}

  ngOnInit(): void {}
}
