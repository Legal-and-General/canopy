import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ɵGetProperty,
  ɵTypedOrUntyped,
  ɵFormGroupRawValue,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MockComponents, MockDirective } from 'ng-mocks';
import { anything, instance, mock, when } from '@typestrong/ts-mockito';
import { NgIf } from '@angular/common';

import { LgIconComponent } from '../../icon';
import { LgErrorStateMatcher } from '../validation';
import { LgValidationComponent } from '../validation';
import { LgFocusDirective } from '../../focus';

import { LgToggleComponent } from './toggle.component';
import type { CheckboxSize, ToggleVariant } from './toggle.interface';

const validationTestId = 'test-validation-id';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form" #testForm="ngForm">
      <lg-toggle
        formControlName="umbrella"
        [value]="true"
        (change)="onChange()"
        (blur)="onBlur($event)"
        [variant]="variant"
        [size]="size"
      >
        I will bring my Umbrella if it is raining {{ variant }}
        <lg-validation
          id="${validationTestId}"
          *ngIf="isControlInvalid(umbrella, testForm)"
        >
          You must agree to the terms and conditions
        </lg-validation>
      </lg-toggle>
    </form>
  `,
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LgToggleComponent,
    LgValidationComponent,
    NgIf,
  ],
})
class TestToggleComponent {
  @Input() variant: ToggleVariant;
  @Input() size: CheckboxSize;

  form: UntypedFormGroup;

  get umbrella() {
    return this.form.get('umbrella');
  }

  constructor(
    public fb: UntypedFormBuilder,
    private errorState: LgErrorStateMatcher,
  ) {
    this.form = this.fb.group({
      umbrella: [
        { value: null, disabled: false },
        [ Validators.required, Validators.requiredTrue ],
      ],
    });
  }

  isControlInvalid(
    control: AbstractControl<
      ɵGetProperty<ɵTypedOrUntyped<never, ɵFormGroupRawValue<never>, never>, 'umbrella'>
    >,
    form: FormGroupDirective,
  ) {
    return this.errorState.isControlInvalid(control, form);
  }
}

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form" #testForm="ngForm">
      <lg-switch
        formControlName="umbrella"
        [value]="true"
        (change)="onChange()"
        (blur)="onBlur($event)"
      >
        I will bring my Umbrella if it is raining
        <lg-validation
          id="${validationTestId}"
          *ngIf="isControlInvalid(umbrella, testForm)"
        >
          You must agree to the terms and conditions
        </lg-validation>
      </lg-switch>
    </form>
  `,
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LgToggleComponent,
    LgValidationComponent,
    LgIconComponent,
    NgIf,
  ],
})
class TestToggleVariantSelectorComponent {
  form: UntypedFormGroup;

  get umbrella() {
    return this.form.get('umbrella');
  }

  constructor(
    public fb: UntypedFormBuilder,
    private errorState: LgErrorStateMatcher,
  ) {
    this.form = this.fb.group({
      umbrella: [
        { value: null, disabled: false },
        [ Validators.required, Validators.requiredTrue ],
      ],
    });
  }

  isControlInvalid(
    control: AbstractControl<
      ɵGetProperty<ɵTypedOrUntyped<never, ɵFormGroupRawValue<never>, never>, 'umbrella'>
    >,
    form: FormGroupDirective,
  ) {
    return this.errorState.isControlInvalid(control, form);
  }
}

describe('LgToggleComponent', () => {
  let fixture: ComponentFixture<TestToggleComponent>;
  let component: TestToggleComponent;
  let toggleDebugElement: DebugElement;
  let toggleInstance: LgToggleComponent;
  let inputDebugElement: DebugElement;
  let inputLabelElement: DebugElement;

  const errorStateMatcherMock = mock(LgErrorStateMatcher);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TestToggleComponent,
        LgToggleComponent,
        LgValidationComponent,
        MockComponents(LgIconComponent),
        MockDirective(LgFocusDirective),
      ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useFactory: () => instance(errorStateMatcherMock),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestToggleComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    toggleDebugElement = fixture.debugElement.query(By.directive(LgToggleComponent));

    toggleInstance =
      toggleDebugElement.injector.get<LgToggleComponent>(LgToggleComponent);

    inputDebugElement = fixture.debugElement.query(By.css('.lg-toggle__input'));
    inputLabelElement = fixture.debugElement.query(By.css('.lg-toggle__label'));
    fixture.detectChanges();
  }));

  it('sets a unique name for the toggle button', () => {
    expect(
      /lg-toggle-\d/.test(inputDebugElement.nativeElement.getAttribute('name')),
    ).toBe(true);
  });

  it('sets a unique id for the toggle button', () => {
    expect(/lg-toggle-\d/.test(inputDebugElement.nativeElement.getAttribute('id'))).toBe(
      true,
    );
  });

  it('sets the correct modifier class based on the variant', () => {
    component.variant = 'checkbox';

    expect(
      inputLabelElement.nativeElement.classList.contains('lg-toggle__label--switch'),
    ).toBe(false);

    component.variant = 'switch';
    fixture.detectChanges();

    expect(
      inputLabelElement.nativeElement.classList.contains('lg-toggle__label--switch'),
    ).toBe(true);
  });

  it('adds the checkbox icon based on the variant', () => {
    component.variant = 'switch';

    expect(fixture.debugElement.query(By.css('.lg-toggle__checkbox'))).toBeNull();

    component.variant = 'checkbox';
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.lg-toggle__checkbox')).nativeElement,
    ).toBeDefined();
  });

  it('adds the checkbox size based on the variant', () => {
    component.variant = 'switch';

    expect(fixture.debugElement.query(By.css('.lg-toggle__checkbox--sm'))).toBeNull();

    component.variant = 'checkbox';
    component.size = 'sm';
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.lg-toggle__checkbox--sm')).nativeElement,
    ).toBeDefined();

    expect(fixture.debugElement.query(By.css('.lg-toggle__checkbox--lg'))).toBeNull();

    component.size = 'lg';
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.lg-toggle__checkbox--lg')).nativeElement,
    ).toBeDefined();

    expect(fixture.debugElement.query(By.css('.lg-toggle__checkbox--sm'))).toBeNull();
  });

  it('links the label to the input field with the correct attributes', () => {
    const id = inputDebugElement.nativeElement.getAttribute('id');

    expect(id).toBeTruthy();
    expect(inputLabelElement.nativeElement.getAttribute('for')).toBe(id);
  });

  it('checks the toggle by default if the value is true', () => {
    expect(inputDebugElement.nativeElement.checked).toBe(false);
    component.umbrella.setValue(true);
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.checked).toBe(true);
  });

  it('updates the model value when a toggle is checked', () => {
    expect(component.umbrella.value).toBe(null);
    fixture.detectChanges();
    inputDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.umbrella.value).toBe(true);
  });

  it('triggers the onChange action when the toggle is checked', () => {
    const onChangeSpy = spyOn(toggleInstance, 'onChange');

    inputDebugElement.triggerEventHandler('click', null);

    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('triggers the onBlur action when the toggle is blurred', () => {
    const onBlurSpy = spyOn(toggleInstance, 'onBlur');

    inputDebugElement.triggerEventHandler('blur', null);

    expect(onBlurSpy).toHaveBeenCalledTimes(1);
  });

  it('disables the input field when the property is set', () => {
    expect(inputDebugElement.nativeElement.disabled).toBe(false);
    component.umbrella.disable();
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.disabled).toBe(true);
  });

  it('links the error to the input field with the correct attributes', () => {
    const id = inputDebugElement.nativeElement.getAttribute('id');

    expect(id).toBeTruthy();
    expect(inputLabelElement.nativeElement.getAttribute('for')).toBe(id);
  });

  it('links the error to the fieldset with the correct aria attributes', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.getAttribute('aria-describedBy')).toContain(
      validationTestId,
    );
  });

  it('unlinks the error from the fieldset with the correct aria attributes when valid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
      false,
    );

    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.hasAttribute('aria-describedBy')).toBe(false);
    expect(inputDebugElement.nativeElement.getAttribute('aria-invalid')).toBe('false');
  });

  it('adds the error class and the aria-invalid attribute if the form field is invalid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    fixture.detectChanges();

    expect(toggleDebugElement.nativeElement.className).toContain('lg-toggle--error');
    expect(inputDebugElement.nativeElement.getAttribute('aria-invalid')).toBe('true');
  });
});

describe('LgToggleComponent selector variant', () => {
  let fixture: ComponentFixture<TestToggleVariantSelectorComponent>;
  let toggleDebugElement: DebugElement;
  let toggleInstance: LgToggleComponent;
  let inputLabelElement: DebugElement;

  const errorStateMatcherMock = mock(LgErrorStateMatcher);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TestToggleVariantSelectorComponent,
        LgToggleComponent,
        LgValidationComponent,
        MockComponents(LgIconComponent),
      ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useFactory: () => instance(errorStateMatcherMock),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestToggleVariantSelectorComponent);
    fixture.detectChanges();

    toggleDebugElement = fixture.debugElement.query(By.directive(LgToggleComponent));

    toggleInstance =
      toggleDebugElement.injector.get<LgToggleComponent>(LgToggleComponent);

    inputLabelElement = fixture.debugElement.query(By.css('.lg-toggle__label'));
    fixture.detectChanges();
  }));

  it('sets the correct variant based on the selector', () => {
    expect(toggleInstance.variant).toBe('switch');
  });

  it('sets the correct modifier class based on the variant', () => {
    expect(
      inputLabelElement.nativeElement.classList.contains('lg-toggle__label--filter'),
    ).toBe(false);

    expect(
      inputLabelElement.nativeElement.classList.contains('lg-toggle__label--switch'),
    ).toBe(true);
  });
});
