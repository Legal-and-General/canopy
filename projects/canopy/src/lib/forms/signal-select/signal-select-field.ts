import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  forwardRef,
  input,
  ViewEncapsulation,
} from '@angular/core';

import { LgIconComponent } from '../../icon';
import { randomUniqueId } from '../../utils';
import { LgHintComponent } from '../hint';
import { LgLabelComponent } from '../label';
import { LgValidationComponent, LgValidationWrapperDirective } from '../validation';

import { LG_SIGNAL_SELECT_CONTEXT, LgSignalSelectDirective } from './signal-select';

@Component({
  selector: 'lg-signal-select-field',
  imports: [ LgLabelComponent, LgIconComponent ],
  providers: [
    {
      provide: LG_SIGNAL_SELECT_CONTEXT,
      useExisting: forwardRef(() => LgSignalSelectFieldComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ '../select/select-field.component.scss' ],
  host: {
    class: 'lg-select-field',
    '[attr.id]': 'null',
    '[class.lg-select-field--error]': 'control()?.showError()',
  },
  template: `
    <label lg-label [for]="id()"><ng-content /></label>
    <ng-content select=".lg-label--optional" />
    <ng-content select="lg-hint" />
    <ng-content select="lg-validation, [lgValidationWrapper]" />
    <div class="lg-select-field__outer">
      <div class="lg-select-field__inner" [class.lg-select-field__inner--block]="block()">
        <ng-content select="[lgSignalSelect]" />
        <lg-icon class="lg-select-field__icon" name="chevron-down" />
      </div>
    </div>
  `,
})
export class LgSignalSelectFieldComponent {
  readonly id = input(`lg-select-${randomUniqueId()}`);
  readonly block = input(false);
  readonly submitted = input(false);
  readonly control = contentChild(LgSignalSelectDirective);
  readonly hint = contentChild(LgHintComponent);
  readonly validation = contentChild(LgValidationComponent, { descendants: true });
  readonly validationWrapper = contentChild(LgValidationWrapperDirective);
  readonly describedBy = computed(() => {
    const ids = [
      this.hint()?.id,
      this.validation()?.id ?? this.validationWrapper()?.id,
    ].filter((id): id is string => !!id);

    return ids.length
      ? [ ...new Set(ids) ].join(' ')
      : null;
  });
}
