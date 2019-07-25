import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  OnInit
} from '@angular/core';

import { tap, filter, map } from 'rxjs/operators';

import { FeatureToggleService } from './feature-toggle.service';
import { FeatureToggleConfig } from './feature-toggle.interface';

@Directive({
  selector: '[featureToggle]'
})
export class FeatureToggleDirective implements OnInit {
  @Input() featureToggle: string;

  constructor(
    private featureToggleService: FeatureToggleService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.featureToggleService.toggles$.pipe(
      tap(() => this.viewContainer.clear()),
      filter((toggles: FeatureToggleConfig) => !this.featureToggle || toggles[this.featureToggle])
    ).subscribe(() => {
        this.viewContainer.createEmbeddedView(this.templateRef)
    })
  }
}
