import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: 'ng-template[lgAccordionItemContent]',
  standalone: true,
})
export class LgAccordionItemContentDirective {
  _template = inject<TemplateRef<any>>(TemplateRef);
}
