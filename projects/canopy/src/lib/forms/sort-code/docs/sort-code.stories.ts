import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { moduleMetadata, StoryFn } from '@storybook/angular';

import { LgSelectModule } from '../../select';
import { LgSortCodeDirective } from '../sort-code.directive';

const template = `
<lg-input-field>
  {{ label }}
  <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
  <input lgInput lgSortCode formControlName="sortCode" />
</lg-input-field>
`;

@Component({
  selector: 'lg-reactive-form',
  template: ` <form [formGroup]="form">${template}</form> `,
})
class ReactiveFormComponent {
  @Input() hint: string;
  @Input() label: string;

  @Input()
  set disabled(disabled: boolean) {
    if (disabled) {
      this.form.controls.sortCode.disable();
    } else {
      this.form.controls.sortCode.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.sortCode.disabled;
  }

  @Output() inputChange = new EventEmitter<void>();

  form: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      sortCode: [ '' ],
    });

    this.form.valueChanges.subscribe(val => this.inputChange.emit(val));
  }
}

export default {
  title: 'Patterns/Sort code/Examples',
  component: LgSortCodeDirective,
  decorators: [
    moduleMetadata({
      declarations: [ ReactiveFormComponent ],
      imports: [ ReactiveFormsModule ],
    }),
  ],
  argTypes: {
    inputmode: {
      table: {
        disable: true,
      },
    },
    maxlength: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    ngOnInit: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
  },
};

const sortCodeTemplate: StoryFn<
  /* TODO(standalone-migration): clean up removed NgModule reference manually. */ LgSortCodeModule
> = (args: LgSelectModule) => ({
  props: args,
  template: `
  <lg-reactive-form
    (inputChange)="inputChange($event)"
    [disabled]="disabled"
    [hint]="hint"
    [label]="label"
  ></lg-reactive-form>
  `,
});

export const sortCode = sortCodeTemplate.bind({});
sortCode.storyName = 'Sort code';

sortCode.args = {
  label: 'Sort code',
  hint: 'Must be 6 digits long',
  disabled: false,
};

sortCode.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
