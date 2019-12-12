import {
  Directive,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { filter, tap } from 'rxjs/operators';

import { Subscription } from 'rxjs';
import {
  LgFeatureToggleConfig,
  LgFeatureToggleOptions,
  togglesOptionsInjectable
} from './feature-toggle.interface';
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
    private viewContainer: ViewContainerRef,
    @Optional()
    @Inject(togglesOptionsInjectable)
    private options?: LgFeatureToggleOptions
  ) {}

  ngOnInit(): void {
    this.subscription = this.lgFeatureToggleService.toggles$
      .pipe(
        tap(() => this.viewContainer.clear()),
        filter((toggles: LgFeatureToggleConfig) => {
          return (
            (toggles[this.lgFeatureToggle] === undefined &&
              !this.isDisableIfUndefinedSet()) ||
            toggles[this.lgFeatureToggle]
          );
        })
      )
      .subscribe(() => {
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
  }

  private isDisableIfUndefinedSet() {
    return this.options && this.options.disableIfUndefined;
  }

  public setOptions(options: LgFeatureToggleOptions) {
    this.options = options;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
