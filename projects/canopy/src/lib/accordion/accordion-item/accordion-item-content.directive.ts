import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[lgAccordionItemContent]',
  standalone: true,
})
export class LgAccordionItemContentDirective {
  constructor(public _template: TemplateRef<any>) {}
}
