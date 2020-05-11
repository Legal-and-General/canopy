import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgHeroHeaderComponent {
  @HostBinding('class.lg-hero-header') class = true;
}
