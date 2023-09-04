import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[lgAccordionItemContent]',
})
export class LgAccordionItemContentDirective {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(public _template: TemplateRef<any>) {}
}
