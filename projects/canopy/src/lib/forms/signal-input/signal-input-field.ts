import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  contentChildren,
  effect,
  forwardRef,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';

import { LgPrefixDirective } from '../../prefix';
import { LgSuffixDirective } from '../../suffix';
import { LgButtonComponent } from '../../button';
import { randomUniqueId } from '../../utils';
import { LgHintComponent } from '../hint';
import { LgLabelComponent } from '../label';
import { LgValidationComponent, LgValidationWrapperDirective } from '../validation';
import { LgInputFieldExternalButtonDirective } from '../input-field-external-button';

import { LG_SIGNAL_INPUT_CONTEXT, LgSignalInputDirective } from './signal-input';

@Component({
  selector: 'lg-signal-input-field',
  imports: [ LgLabelComponent ],
  providers: [
    {
      provide: LG_SIGNAL_INPUT_CONTEXT,
      useExisting: forwardRef(() => LgSignalInputFieldComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ '../input/input-field.component.scss' ],
  host: {
    class: 'lg-input-field',
    '[attr.id]': 'null',
    '[class.lg-input-field--block]': 'block()',
    '[class.lg-input-field--disabled]': 'control()?.field?.state()?.disabled()',
    '[class.lg-input-field--error]': 'control()?.showError()',
    '[class.lg-input-field--focus]': 'hasFocus()',
    '[class.lg-input-field--hover]': 'hasHover()',
  },
  template: `
    <label lg-label [for]="id()" [class.lg-visually-hidden]="!showLabel()">
      <ng-content />
    </label>
    <ng-content select=".lg-label--optional" />
    <ng-content select="lg-hint" />
    <ng-content select="lg-validation, [lgValidationWrapper]" />
    <div
      class="lg-input-field__inputs"
      (focusin)="onFocusIn($event)"
      (focusout)="hasFocus.set(false)"
      (mouseenter)="hasHover.set(true)"
      (mouseleave)="hasHover.set(false)"
    >
      @if (prefixes().length) {
        <div class="lg-input-field__prefix"><ng-content select="[lgPrefix]" /></div>
      }
      <ng-content select="[lgSignalInput]" />
      @if (suffixes().length) {
        <div class="lg-input-field__suffix"><ng-content select="[lgSuffix]" /></div>
      }
    </div>
    @if (externalButtons().length) {
      <div class="lg-input-field__external-btn">
        <ng-content select="[lgInputFieldExternalButton]" />
      </div>
    }
  `,
})
export class LgSignalInputFieldComponent {
  readonly id = input(`lg-input-${randomUniqueId()}`);
  readonly block = input(false);
  readonly showLabel = input(true);
  readonly submitted = input(false);
  readonly hasFocus = signal(false);
  readonly hasHover = signal(false);
  readonly control = contentChild(LgSignalInputDirective);
  readonly hint = contentChild(LgHintComponent);
  readonly validation = contentChild(LgValidationComponent, { descendants: true });
  readonly validationWrapper = contentChild(LgValidationWrapperDirective);
  readonly prefixes = contentChildren(LgPrefixDirective);
  readonly suffixes = contentChildren(LgSuffixDirective);
  readonly externalButtons = contentChildren(LgInputFieldExternalButtonDirective);
  readonly buttons = contentChildren(LgButtonComponent, { descendants: true });
  readonly describedBy = computed(() => {
    const affixes = [ ...this.prefixes(), ...this.suffixes() ];
    const ids = [
      this.hint()?.id,
      this.validation()?.id ?? this.validationWrapper()?.id,
      ...affixes
        .filter(affix => {
          const element = affix.hostElement;

          return (
            ![ 'A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA' ].includes(element.tagName) &&
            element.tabIndex < 0
          );
        })
        .map(affix => affix.id),
    ].filter((id): id is string => !!id);

    return ids.length
      ? [ ...new Set(ids) ].join(' ')
      : null;
  });

  constructor() {
    effect(() => {
      const control = this.control();

      if (control) {
        const disabled = control.field.state().disabled();

        this.buttons().forEach(button => {
          button.disabled = disabled;
        });
      }
    });
  }

  onFocusIn(event: FocusEvent): void {
    const target = event.target;

    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
      this.hasFocus.set(true);
    }
  }
}
