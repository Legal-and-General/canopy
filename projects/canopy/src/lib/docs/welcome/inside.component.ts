import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lg-docs-welcome-inside',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <h2 class="lg-font--expressive lg-font-size-4--strong">What's inside</h2>

    <ul lgMargin="none" class="docs-list">
      <li *ngFor="let section of sections" class="docs-list-item">
        <div class="docs-list-item__img" lgMarginBottom="xxs">
          <img [src]="section.src" alt="" />
        </div>
        <h3 class="lg-font-size-2--strong">{{ section.heading }}</h3>
        {{ section.text }}
      </li>
    </ul>
  `,
  styleUrls: [ './docs-list.scss' ],
})
export class DocsWelcomeInsideComponent {
  sections = [
    {
      src: 'docs/welcome/inside/principles.svg',
      heading: 'Principles',
      text: 'Design and development standards upon which Canopy has been built',
    },
    {
      src: 'docs/welcome/inside/foundations.svg',
      heading: 'Foundations',
      text: 'Basic primitive elements such as colours, typography and icons',
    },
    {
      src: 'docs/welcome/inside/components.svg',
      heading: 'Components',
      text: 'Building blocks such as buttons, inputs and tables',
    },
    {
      src: 'docs/welcome/inside/patterns.svg',
      heading: 'Patterns',
      text: 'Researched and tested design patterns that help users in specific scenarios',
    },
    {
      src: 'docs/welcome/inside/templates.svg',
      heading: 'Templates',
      text: 'Page layouts for specific scenarios such as product pages and form journeys',
    },
    {
      src: 'docs/welcome/inside/helpers.svg',
      heading: 'Helpers',
      text: 'A set of Angular directives and pipes, SCSS mixins, CSS classes and variables which allow for quicker and standardised development',
    },
  ];
}
