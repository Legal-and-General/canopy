import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-hero-card-footer',
  templateUrl: './lg-hero-card-footer.component.html',
  styleUrls: ['./lg-hero-card-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgHeroCardFooterComponent {
  @HostBinding('class.lg-hero-card-footer') class = true;
}
