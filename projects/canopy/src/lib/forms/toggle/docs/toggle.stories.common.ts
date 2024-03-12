import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';

import type { ToggleVariant } from '../toggle.interface';
import { CheckboxSize } from '../toggle.interface';
import { LgToggleComponent } from '../toggle.component';
import { lgIconCheckboxMark, LgIconRegistry } from '../../../icon';

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
  standalone: true,
  imports: [ ReactiveFormsModule, LgToggleComponent ],
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

  constructor(
    public fb: UntypedFormBuilder,
    private registry: LgIconRegistry,
  ) {
    this.form = this.fb.group({
      umbrella: [ { value: '', disabled: false } ],
    });

    this.form.valueChanges.subscribe(val => this.toggleChange.emit(val));
    this.registry.registerIcons([ lgIconCheckboxMark ]);
  }

  ngOnChanges({ checked }: SimpleChanges): void {
    if (checked) {
      this.umbrella.setValue(checked.currentValue);
    }
  }
}

export function createToggleStory(args: LgToggleComponent, variant: string) {
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
