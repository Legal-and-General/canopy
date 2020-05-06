import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-hero-card-header',
  templateUrl: './hero-card-header.component.html',
  styleUrls: ['./hero-card-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgHeroCardHeaderComponent {
  @HostBinding('class.lg-hero-card-header') class = true;
}
