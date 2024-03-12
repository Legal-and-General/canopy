import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-hero-content',
  templateUrl: './hero-content.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class LgHeroContentComponent {
  @HostBinding('class.lg-hero-content') class = true;
}
