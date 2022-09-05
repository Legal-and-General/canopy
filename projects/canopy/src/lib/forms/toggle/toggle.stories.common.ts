import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import type { ToggleVariant } from './toggle.interface';
import { LgToggleModule } from './toggle.module';
import { CheckboxSize } from './toggle.interface';

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-toggle
        formControlName="umbrella"
        [value]="true"
        [variant]="variant"
        [checked]="umbrella.value"
        [focus]="focus"
        [size]="size"
        (blur)="toggleBlur.emit($event)"
      >
        {{ label }}
      </lg-toggle>
    </form>
  `,
})
export class ReactiveToggleFormComponent implements OnChanges {
  @Input() label: string;
  @Input() variant: ToggleVariant;
  @Input() checked: boolean;
  @Input() focus: boolean;
  @Input() size: CheckboxSize;

  @Input()
  set disabled(disabled: boolean) {
    if (disabled === true) {
      this.form.controls.umbrella.disable();
    } else {
      this.form.controls.umbrella.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.umbrella.disabled;
  }

  get umbrella() {
    return this.form.get('umbrella');
  }

  @Output() toggleChange: EventEmitter<void> = new EventEmitter();
  @Output() toggleBlur: EventEmitter<Event> = new EventEmitter();

  form: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      umbrella: [ { value: '', disabled: false } ],
    });

    this.form.valueChanges.subscribe(val => this.toggleChange.emit(val));
  }

  ngOnChanges({ checked }: SimpleChanges): void {
    if (checked) {
      this.umbrella.setValue(checked.currentValue);
    }
  }
}

export function createToggleStory(args: LgToggleModule, variant: string) {
  return {
    props: args,
    template: `
      <lg-reactive-form
        [disabled]="disabled"
        [label]="label"
        variant="${variant}"
        [size]="size"
        [checked]="checked"
        [focus]="focus"
        (toggleChange)="toggleChange($event)"
        (toggleBlur)="toggleBlur($event)">
      </lg-reactive-form>
    `,
  };
}

export function setupToggleStoryValues(obj, code) {
  obj.args = {
    disabled: false,
    inline: false,
    focus: false,
    size: 'sm',
    label: 'I will bring my Umbrella if it is raining',
  };

  obj.parameters = {
    docs: {
      source: {
        code,
      },
    },
  };
}
