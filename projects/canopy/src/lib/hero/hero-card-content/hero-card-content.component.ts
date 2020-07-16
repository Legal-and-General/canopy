import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-hero-card-content',
  templateUrl: './hero-card-content.component.html',
  styleUrls: ['./hero-card-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgHeroCardContentComponent {
  @HostBinding('class.lg-hero-card-content') class = true;
}
