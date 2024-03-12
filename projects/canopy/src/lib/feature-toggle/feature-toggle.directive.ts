import {
  Directive,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import type {
  LgFeatureToggleConfig,
  LgFeatureToggleOptions,
} from './feature-toggle.interface';
import { togglesOptionsInjectable } from './feature-toggle.interface';
import { LgFeatureToggleService } from './feature-toggle.service';

@Directive({
  selector: '[lgFeatureToggle]',
  standalone: true,
})
export class LgFeatureToggleDirective implements OnInit, OnDestroy {
  subscription: Subscription;

  @Input() lgFeatureToggle: string;

  constructor(
    private lgFeatureToggleService: LgFeatureToggleService,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    @Optional()
    @Inject(togglesOptionsInjectable)
    private options?: LgFeatureToggleOptions,
  ) {}

  ngOnInit(): void {
    this.subscription = this.lgFeatureToggleService.toggles$
      .pipe(
        tap(() => this.viewContainer.clear()),
        filter(
          (toggles: LgFeatureToggleConfig) =>
            (toggles[this.lgFeatureToggle] === undefined && !this.isDefaultHideSet()) ||
            toggles[this.lgFeatureToggle],
        ),
      )
      .subscribe(() => {
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
  }

  public setOptions(options: LgFeatureToggleOptions): void {
    this.options = options;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private isDefaultHideSet(): boolean {
    return this.options && this.options.defaultHide;
  }
}
