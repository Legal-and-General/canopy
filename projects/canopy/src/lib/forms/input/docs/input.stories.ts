import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { NgIf } from '@angular/common';

import { ButtonVariant, LgButtonComponent } from '../../../button';
import { LgInputFieldComponent } from '../input-field.component';
import { LgPrefixDirective } from '../../../prefix';
import { LgInputDirective } from '../input.directive';
import { LgSuffixDirective } from '../../../suffix';
import { LgHintComponent } from '../../hint';
import { LgIconComponent } from '../../../icon';

interface Config {
  block?: boolean;
  buttonText?: boolean;
  disabled?: boolean;
  hint?: string | null;
  icon?: string;
  iconButton?: boolean;
  label?: string;
  showLabel?: boolean;
  showButtonFirstSuffix?: boolean;
  showButtonSecondSuffix?: boolean;
  showTextPrefix?: boolean;
  showTextSuffix?: boolean;
  size?: number;
  suffix?: string;
}

function createInputStory(args: LgInputFieldComponent) {
  return {
    props: args,
    template: `
      <lg-reactive-form
        (formSubmit)="formSubmit($event)"
        (inputChange)="inputChange($event)"
        [block]="block"
        [buttonText]="buttonText"
        [buttonVariant]="buttonVariant"
        [disabled]="disabled"
        [hint]="hint"
        [icon]="icon"
        [iconButton]="iconButton"
        [label]="label"
        [showLabel]="showLabel"
        [prefix]="prefix"
        [size]="size"
        [suffix]="suffix"
        [showButtonFirstSuffix]="showButtonFirstSuffix"
        [showButtonSecondSuffix]="showButtonSecondSuffix"
        [showTextPrefix]="showTextPrefix"
        [showTextSuffix]="showTextSuffix"
      ></lg-reactive-form>
    `,
  };
}

function setupInputStoryValues(obj, code, config?: Config) {
  obj.args = {
    block: false,
    buttonText: 'search',
    buttonVariant: 'primary-dark',
    disabled: false,
    hint: config?.hint === null
      ? ''
      : 'Please enter your name',
    icon: 'search',
    label: config?.label || 'Name',
    showLabel: true,
    prefix: '£',
    showButtonFirstSuffix: config?.showButtonFirstSuffix,
    showButtonSecondSuffix: config?.showButtonSecondSuffix,
    iconButton: true,
    showTextPrefix: config?.showTextPrefix,
    showTextSuffix: config?.showTextSuffix,
    suffix: '%',
    size: 12,
  };

  obj.parameters = {
    docs: {
      source: {
        code,
      },
    },
  };
}

const inputTemplate = `
<lg-input-field [block]="block" [showLabel]="showLabel">
  {{ label }}
  <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
  <span lgPrefix *ngIf="showTextPrefix">{{ prefix }}</span>
  <input lgInput formControlName="name" [size]="size" />
  <button
    lg-button
    lgSuffix
    size="sm"
    [iconButton]="true"
    variant="add-on"
    *ngIf="showButtonFirstSuffix"
  >
    Close
    <lg-icon name="close"></lg-icon>
  </button>
  <button
    lg-button
    lgSuffix
    size="sm"
    [iconButton]="iconButton"
    [variant]="buttonVariant"
    *ngIf="showButtonSecondSuffix"
  >
    {{ buttonText }}
    <lg-icon [name]="icon" *ngIf="iconButton"></lg-icon>
  </button>
  <span lgSuffix *ngIf="showTextSuffix">{{ suffix }}</span>
</lg-input-field>
`;

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit(form)">${inputTemplate}</form>
  `,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LgInputFieldComponent,
    LgPrefixDirective,
    LgSuffixDirective,
    LgInputDirective,
    LgButtonComponent,
    LgIconComponent,
    LgHintComponent,
    NgIf,
  ],
})
class ReactiveFormComponent {
  @Input()
  set disabled(disabled: boolean) {
    if (disabled === true) {
      this.form.controls.name.disable();
    } else {
      this.form.controls.name.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.name.disabled;
  }

  @Input() block: boolean;
  @Input() buttonText: ButtonVariant;
  @Input() buttonVariant: ButtonVariant;
  @Input() hint: string;
  @Input() icon: string;
  @Input() iconButton: boolean;
  @Input() label: string;
  @Input() showLabel: boolean;
  @Input() prefix: string;
  @Input() showButtonFirstSuffix: boolean;
  @Input() showButtonSecondSuffix: boolean;
  @Input() showTextPrefix: boolean;
  @Input() showTextSuffix: boolean;
  @Input() size: number;
  @Input() suffix: string;

  @Output() inputChange: EventEmitter<void> = new EventEmitter();
  @Output() formSubmit: EventEmitter<void> = new EventEmitter();

  form: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder) {
    this.form = this.fb.group({ name: { value: '', disabled: false } });
    this.form.valueChanges.subscribe(val => this.inputChange.emit(val));
  }

  onSubmit(event) {
    this.formSubmit.emit(event);
  }
}

export default {
  title: 'Components/Forms/Text input/Examples',
  component: LgInputFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [ ReactiveFormComponent ],
    }),
  ],
  argTypes: {
    formSubmit: {
      action: 'submit',
      table: {
        disable: true,
      },
    },
    inputChange: {
      action: 'change',
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    showLabel: {
      description: 'Show or visually hide the label.',
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    block: {
      description: 'Property to make the input full width (for small screens only).',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    buttonText: {
      table: {
        disable: true,
      },
    },
    buttonVariant: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    prefix: {
      table: {
        disable: true,
      },
    },
    showButtonFirstSuffix: {
      table: {
        disable: true,
      },
    },
    showButtonSecondSuffix: {
      table: {
        disable: true,
      },
    },
    iconButton: {
      table: {
        disable: true,
      },
    },
    showTextPrefix: {
      table: {
        disable: true,
      },
    },
    showTextSuffix: {
      table: {
        disable: true,
      },
    },
    suffix: {
      table: {
        disable: true,
      },
    },
    ngAfterContentInit: {
      table: {
        disable: true,
      },
    },
    ngOnDestroy: {
      table: {
        disable: true,
      },
    },
    onFocusIn: {
      table: {
        disable: true,
      },
    },
    onFocusOut: {
      table: {
        disable: true,
      },
    },
    onMouseOut: {
      table: {
        disable: true,
      },
    },
    onMouseOver: {
      table: {
        disable: true,
      },
    },
    buttonElement: {
      table: {
        disable: true,
      },
    },
  },
};

export const Standard = {
  name: 'Standard',
  render: (args: LgInputFieldComponent) => createInputStory(args),
};
setupInputStoryValues(Standard, inputTemplate);

export const WithButtonSuffix = {
  name: 'With button suffix',
  render: (args: LgInputFieldComponent) => createInputStory(args),
};

setupInputStoryValues(WithButtonSuffix, inputTemplate, {
  showButtonFirstSuffix: true,
});

export const WithTextSuffix = {
  name: 'With test suffix',
  render: (args: LgInputFieldComponent) => createInputStory(args),
};

setupInputStoryValues(WithTextSuffix, inputTemplate, {
  showTextSuffix: true,
  label: 'Amount',
  hint: null,
});

export const WithMultipleButtonSuffixes = {
  name: 'With multiple buttons suffixes',
  render: (args: LgInputFieldComponent) => createInputStory(args),
};

setupInputStoryValues(WithMultipleButtonSuffixes, inputTemplate, {
  showButtonFirstSuffix: true,
  showButtonSecondSuffix: true,
});

export const WithTextPrefix = {
  name: 'With text prefix',
  render: (args: LgInputFieldComponent) => createInputStory(args),
};

setupInputStoryValues(WithTextPrefix, inputTemplate, {
  showTextPrefix: true,
  label: 'Amount',
  hint: null,
});
