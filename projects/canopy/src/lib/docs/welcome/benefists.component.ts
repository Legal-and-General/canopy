import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgMarginModule } from '../../spacing';

@Component({
  selector: 'lg-docs-welcome-benefits',
  standalone: true,
  imports: [ CommonModule, LgMarginModule ],
  template: `
    <h2 class="lg-font--expressive lg-font-size-4--strong">Benefits of Canopy</h2>

    <ul lgMargin="none" class="docs-list">
      <li *ngFor="let benefit of benefits" class="docs-list-item">
        <img class="benefits__img" lgMarginBottom="xxs" [src]="benefit.src" alt="" />
        <span class="lg-font-size-3">{{ benefit.text }}</span>
      </li>
    </ul>
  `,
  styleUrls: [ './docs-list.scss' ],
  styles: [
    `
      .benefits__img {
        width: 100%;
      }
    `,
  ],
})
export class DocsWelcomeBenefitsComponent {
  benefits = [
    {
      src: 'docs/welcome/benefits/reduce-time.svg',
      text: 'Reduce time and cost of building applications',
    },
    {
      src: 'docs/welcome/benefits/readymade-patterns.svg',
      text: 'Ready-made researched and tested design patterns',
    },
    {
      src: 'docs/welcome/benefits/consistent-experience.svg',
      text: 'Consistent customer experience',
    },
    {
      src: 'docs/welcome/benefits/brand.svg',
      text: 'Plays nicely with L&G brand assets',
    },
    {
      src: 'docs/welcome/benefits/accessible.svg',
      text: 'Accessible to a minimum of AA compliance',
    },
  ];
}
