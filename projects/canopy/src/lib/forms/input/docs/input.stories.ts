import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { moduleMetadata, StoryFn } from '@storybook/angular';

import { lgIconClose, LgIconRegistry, lgIconSearch } from '../../../icon';
import type { ButtonVariant } from '../../../button';
import { LgInputFieldComponent } from '../input-field.component';

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

function createInputStory(
  args: /* TODO(standalone-migration): clean up removed NgModule reference manually. */ LgInputModule,
) {
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

  constructor(
    public fb: UntypedFormBuilder,
    private iconRegistry: LgIconRegistry,
  ) {
    this.iconRegistry.registerIcons([ lgIconSearch, lgIconClose ]);
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
      declarations: [ ReactiveFormComponent ],
      imports: [ ReactiveFormsModule ],
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

const inputStory: StoryFn<
  /* TODO(standalone-migration): clean up removed NgModule reference manually. */ LgInputModule
> = (
  args: /* TODO(standalone-migration): clean up removed NgModule reference manually. */ LgInputModule,
) => createInputStory(args);

export const standard = inputStory.bind({});
standard.storyName = 'Standard';
setupInputStoryValues(standard, inputTemplate);

export const withButtonSuffix = inputStory.bind({});
withButtonSuffix.storyName = 'With button suffix';

setupInputStoryValues(withButtonSuffix, inputTemplate, {
  showButtonFirstSuffix: true,
});

export const withTextSuffix = inputStory.bind({});
withTextSuffix.storyName = 'With text suffix';

setupInputStoryValues(withTextSuffix, inputTemplate, {
  showTextSuffix: true,
  label: 'Amount',
  hint: null,
});

export const withMultipleButtonSuffixes = inputStory.bind({});
withMultipleButtonSuffixes.storyName = 'With multiple buttons suffixes';

setupInputStoryValues(withMultipleButtonSuffixes, inputTemplate, {
  showButtonFirstSuffix: true,
  showButtonSecondSuffix: true,
});

export const withTextPrefix = inputStory.bind({});
withTextPrefix.storyName = 'With text prefix';

setupInputStoryValues(withTextPrefix, inputTemplate, {
  showTextPrefix: true,
  label: 'Amount',
  hint: null,
});
