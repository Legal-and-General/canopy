import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MockComponents } from 'ng-mocks';
import { anything, instance, mock, when } from 'ts-mockito';

import { LgHintComponent } from '../hint';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';
import { LgRadioButtonComponent } from './radio-button.component';
import { LgRadioGroupComponent } from './radio-group.component';

const validationTestId = 'test-validation-id';
const hintTestId = 'test-hint-id';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form" #testForm="ngForm">
      <lg-radio-group formControlName="color">
        Color
        <lg-hint id="${hintTestId}">Choose your favourite</lg-hint>
        <lg-radio-button value="red">Red</lg-radio-button>
        <lg-radio-button value="yellow">Yellow</lg-radio-button>
        <lg-radio-button value="blue">Blue</lg-radio-button>
        <lg-validation id="${validationTestId}" *ngIf="isControlInvalid(color, testForm)">
          Error
        </lg-validation>
      </lg-radio-group>
    </form>
  `,
})
class TestRadioGroupComponent {
  get color() {
    return this.form.get('color');
  }
  form: FormGroup;

  constructor(public fb: FormBuilder, private errorState: LgErrorStateMatcher) {
    this.form = this.fb.group({
      color: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }
}

describe('LgRadioGroupComponent', () => {
  let fixture: ComponentFixture<TestRadioGroupComponent>;
  let groupDebugElement: DebugElement;
  let errorDebugElement: DebugElement;
  let hintDebugElement: DebugElement;
  let fieldsetDebugElement: DebugElement;
  let radioDebugElements: Array<DebugElement>;

  let groupInstance: LgRadioGroupComponent;
  let radioInstances: Array<LgRadioButtonComponent>;
  let component: TestRadioGroupComponent;
  let errorStateMatcherMock: LgErrorStateMatcher;

  beforeEach(
    waitForAsync(() => {
      errorStateMatcherMock = mock(LgErrorStateMatcher);

      TestBed.configureTestingModule({
        imports: [FormsModule, ReactiveFormsModule],
        declarations: [
          TestRadioGroupComponent,
          LgRadioGroupComponent,
          LgRadioButtonComponent,
          MockComponents(LgValidationComponent, LgHintComponent),
        ],
        providers: [
          {
            provide: LgErrorStateMatcher,
            useFactory: () => instance(errorStateMatcherMock),
          },
        ],
      }).compileComponents();

    fixture = TestBed.createComponent(TestRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

      groupDebugElement = fixture.debugElement.query(By.directive(LgRadioGroupComponent));
      groupInstance = groupDebugElement.injector.get<LgRadioGroupComponent>(
        LgRadioGroupComponent,
      );

      hintDebugElement = fixture.debugElement.query(By.directive(LgHintComponent));

      fieldsetDebugElement = fixture.debugElement.query(By.css('fieldset'));

      radioDebugElements = fixture.debugElement.queryAll(By.css('lg-radio-button'));

    radioInstances = radioDebugElements.map((debugEl) => debugEl.componentInstance);
  }));

  it('sets all radio buttons to the same name', () => {
    expect(groupInstance.name.length > 0).toBe(true);
    const name = radioInstances.pop().name;
    for (const radio of radioInstances) {
      expect(radio.name).toBe(name);
    }
  });

  it('adds a wrapper for the segment radio in the template', () => {
    expect(fixture.debugElement.query(By.css('.lg-radio-group__segment'))).toBeNull();

    groupInstance.variant = 'segment';
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('.lg-radio-group__segment')).nativeElement,
    ).toBeDefined();
  });

  it('sets the correct variant based on the selector', () => {
    expect(fixture.debugElement.query(By.css('.lg-radio-group'))).toBeDefined();
    fixture.detectChanges();
    expect(groupInstance.variant === 'radio').toBe(true);
  });

  it('sets the correct style variant wrapper on the button based on the selector', () => {
    expect(fixture.debugElement.query(By.css('.lg-radio-button--radio'))).toBeDefined();
  });

  it('checks the selected radio button when a value is provided', () => {
    const blueOption: DebugElement = radioDebugElements.find(
      (debugElement) => debugElement.componentInstance.value === 'blue',
    );
    blueOption.query(By.css('input')).triggerEventHandler('click', null);
    fixture.detectChanges();
    const checkedOption: DebugElement = radioDebugElements.find(
      (debugElement) => debugElement.componentInstance.checked === true,
    );
    expect(checkedOption.componentInstance.value).toBe('blue');
  });

  it('uses the same unique id when setting the group id and the group name', () => {
    const checkboxGroupNextUniqueId = groupInstance.nextUniqueId;
    const checkboxGroupId = groupInstance.id;
    const checkboxGroupName = groupInstance.name;
    expect(checkboxGroupId).toBe(`lg-radio-group-id-${checkboxGroupNextUniqueId}`);
    expect(checkboxGroupName).toBe(`lg-radio-group-${checkboxGroupNextUniqueId}`);
  });

  it('sets unique ids on all the radio buttons', () => {
    const radioIds = radioInstances.map(({ id }) => id);
    expect(new Set(radioIds).size).toBe(radioIds.length);
    for (const id of radioIds) {
      expect(/lg-radio-button-\d{1,3}/.test(id)).toBe(true);
    }
  });

  it('marks the selected radio when the value is changed', () => {
    groupInstance.value = 'red';
    fixture.detectChanges();
    const selected = radioInstances.find((radio) => radio.value === 'red');
    expect(selected.checked).toBe(true);
    const notSelected = radioInstances.filter((radio) => radio.value !== 'red');
    for (const radio of notSelected) {
      expect(radio.checked).toBe(false);
    }
  });

  it('updates the model value when a radio option is checked', () => {
    const blueOption: DebugElement = radioDebugElements.find(
      (radioDebugElement) => radioDebugElement.componentInstance.value === 'blue',
    );
    blueOption.query(By.css('input')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.form.controls.color.value).toBe('blue');
  });

  it('links the hint to the fieldset with the correct aria attributes', () => {
    expect(hintDebugElement.nativeElement.getAttribute('id').length).not.toEqual(0);
    expect(fieldsetDebugElement.nativeElement.getAttribute('aria-describedBy')).toContain(
      hintDebugElement.nativeElement.getAttribute('id'),
    );
  });

  it('links the error to the fieldset with the correct aria attributes', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    fixture.detectChanges();
    errorDebugElement = fixture.debugElement.query(By.directive(LgValidationComponent));

    expect(errorDebugElement.nativeElement.getAttribute('id').length).not.toEqual(0);
    expect(fieldsetDebugElement.nativeElement.getAttribute('aria-describedBy')).toContain(
      errorDebugElement.nativeElement.getAttribute('id'),
    );
  });

  it('combines both the hint and error ids to create the aria described attribute', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    fixture.detectChanges();
    errorDebugElement = fixture.debugElement.query(By.directive(LgValidationComponent));

    const errorId = errorDebugElement.nativeElement.getAttribute('id');
    const hintId = hintDebugElement.nativeElement.getAttribute('id');
    fixture.detectChanges();
    expect(fieldsetDebugElement.nativeElement.getAttribute('aria-describedby')).toBe(
      `${hintId} ${errorId}`,
    );
  });

  it('disables the options when the disabled property is set', () => {
    component.form.controls.color.disable();
    fixture.detectChanges();
    for (const radio of radioInstances) {
      expect(radio.disabled).toBe(true);
    }
  });

  it('adds the error class if the form field is invalid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    fixture.detectChanges();
    expect(groupDebugElement.nativeElement.className).toContain('lg-radio-group--error');
  });

  it('removes the error class if the form field is valid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
      false,
    );
    fixture.detectChanges();
    expect(groupDebugElement.nativeElement.className).not.toContain(
      'lg-radio-group--error',
    );
  });

  describe('stack', () => {
    it('adds or removes a class based on its value', () => {
      groupInstance.stack = 'sm';
      fixture.detectChanges();

      expect(groupDebugElement.nativeElement.className).toContain(
        'lg-radio-group--stack-sm',
      );

      groupInstance.stack = undefined;
      fixture.detectChanges();

      expect(groupDebugElement.nativeElement.className).not.toContain(
        'lg-radio-group--stack-sm',
      );
    });
  });
});
