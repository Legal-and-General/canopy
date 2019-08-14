import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  OnInit, OnDestroy
} from '@angular/core';

import { tap, filter } from 'rxjs/operators';

import { LgFeatureToggleService } from './feature-toggle.service';
import { LgFeatureToggleConfig } from './feature-toggle.interface';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[lgFeatureToggle]'
})
export class LgFeatureToggleDirective implements OnInit, OnDestroy {
  @Input() lgFeatureToggle: string;
  subscription: Subscription;

  constructor(
    private lgFeatureToggleService: LgFeatureToggleService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.lgFeatureToggleService.toggles$.pipe(
      tap(() => this.viewContainer.clear()),
      filter((toggles: LgFeatureToggleConfig) => toggles[this.lgFeatureToggle] === undefined || toggles[this.lgFeatureToggle])
    ).subscribe(() => {
        this.viewContainer.createEmbeddedView(this.templateRef)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
