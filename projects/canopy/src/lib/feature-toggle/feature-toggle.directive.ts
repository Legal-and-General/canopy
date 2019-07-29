import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  OnInit, OnDestroy
} from '@angular/core';

import { tap, filter } from 'rxjs/operators';

import { FeatureToggleService } from './feature-toggle.service';
import { FeatureToggleConfig } from './feature-toggle.interface';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[featureToggle]'
})
export class FeatureToggleDirective implements OnInit, OnDestroy {
  @Input() featureToggle: string;
  subscription: Subscription;

  constructor(
    private featureToggleService: FeatureToggleService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.featureToggleService.toggles$.pipe(
      tap(() => this.viewContainer.clear()),
      filter((toggles: FeatureToggleConfig) => toggles[this.featureToggle] === undefined || toggles[this.featureToggle])
    ).subscribe(() => {
        this.viewContainer.createEmbeddedView(this.templateRef)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
