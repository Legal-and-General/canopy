import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { filter, tap } from 'rxjs/operators';

import { Subscription } from 'rxjs';
import { LgFeatureToggleConfig } from './feature-toggle.interface';
import { LgFeatureToggleService } from './feature-toggle.service';

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
    this.subscription = this.lgFeatureToggleService.toggles$
      .pipe(
        tap(() => this.viewContainer.clear()),
        filter(
          (toggles: LgFeatureToggleConfig) =>
            toggles[this.lgFeatureToggle] === undefined ||
            toggles[this.lgFeatureToggle]
        )
      )
      .subscribe(() => {
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
