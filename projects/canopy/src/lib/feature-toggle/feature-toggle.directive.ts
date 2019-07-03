import {
  Directive,
  Input,
  ViewContainerRef,
  OnChanges,
  TemplateRef,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[featureOff]'
})
export class FeatureToggleDirective implements OnChanges {
  @Input() featureOff: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnChanges({featureOff: {currentValue}}: SimpleChanges) {
    currentValue ? this.viewContainer.clear() : this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
