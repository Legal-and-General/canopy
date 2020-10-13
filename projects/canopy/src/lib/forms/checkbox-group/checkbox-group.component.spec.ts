import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
import { LgToggleComponent } from '../toggle';
import { LgCheckboxGroupComponent } from './checkbox-group.component';
import { LgIconComponent } from '../../icon';

const validationTestId = 'test-validation-id';
const hintTestId = 'test-hint-id';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form" #testForm="ngForm">
      <lg-checkbox-group formControlName="color">
        Color
        <lg-hint id="${hintTestId}">Choose your favourite</lg-hint>
        <lg-toggle value="red">Red</lg-toggle>
        <lg-toggle value="yellow">Yellow</lg-toggle>
        <lg-toggle value="blue">Blue</lg-toggle>
        <lg-validation id="${validationTestId}" *ngIf="isControlInvalid(color, testForm)">
          Error
        </lg-validation>
      </lg-checkbox-group>
    </form>
  `,
})
class TestCheckboxGroupComponent {
  get color() {
    return this.form.get('color');
  }
  form: FormGroup;

  constructor(public fb: FormBuilder, private errorState: LgErrorStateMatcher) {
    this.form = this.fb.group({
      color: this.fb.control([], [Validators.required]),
    });
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }
}

describe('LgCheckboxGroupComponent', () => {
  let fixture: ComponentFixture<TestCheckboxGroupComponent>;
  let groupDebugElement: DebugElement;
  let errorDebugElement: DebugElement;
  let hintDebugElement: DebugElement;
  let fieldsetDebugElement: DebugElement;
  let checkboxDebugElements: Array<DebugElement>;

  let groupInstance: LgCheckboxGroupComponent;
  let checkboxInstances: Array<LgToggleComponent>;
  let component: TestCheckboxGroupComponent;
  let errorStateMatcherMock: LgErrorStateMatcher;

  beforeEach(async(() => {
    errorStateMatcherMock = mock(LgErrorStateMatcher);

    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        TestCheckboxGroupComponent,
        LgCheckboxGroupComponent,
        LgToggleComponent,
        MockComponents(LgValidationComponent, LgHintComponent, LgIconComponent),
      ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useFactory: () => instance(errorStateMatcherMock),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestCheckboxGroupComponent);
    component = fixture.componentInstance;

    groupDebugElement = fixture.debugElement.query(
      By.directive(LgCheckboxGroupComponent),
    );
    groupInstance = groupDebugElement.injector.get<LgCheckboxGroupComponent>(
      LgCheckboxGroupComponent,
    );

    hintDebugElement = fixture.debugElement.query(By.directive(LgHintComponent));

    fieldsetDebugElement = fixture.debugElement.query(By.css('fieldset'));

    checkboxDebugElements = fixture.debugElement.queryAll(By.css('lg-toggle'));

    checkboxInstances = checkboxDebugElements.map(debugEl => debugEl.componentInstance);

    fixture.detectChanges();
  }));

  it('sets all checkbox buttons to the same name', () => {
    expect(groupInstance.name.length > 0).toBe(true);
    const name = checkboxInstances.pop().name;
    for (const checkbox of checkboxInstances) {
      expect(checkbox.name).toBe(name);
    }
  });

  it('checks the selected checkbox button when a value is provided', () => {
    groupInstance.value = ['red'];
    fixture.detectChanges();
    const checkedOption: DebugElement = checkboxDebugElements.find(
      checkboxDebugElement => checkboxDebugElement.componentInstance.checked === true,
    );
    expect(checkedOption.componentInstance.value).toContain('red');
  });

  it('uses same unique id when setting the group id and the group name', () => {
    const checkboxGroupNextUniqueId = groupInstance.nextUniqueId;
    const checkboxGroupId = groupInstance.id;
    const checkboxGroupName = groupInstance.name;
    expect(checkboxGroupId).toBe(`lg-checkbox-group-id-${checkboxGroupNextUniqueId}`);
    expect(checkboxGroupName).toBe(`lg-checkbox-group-${checkboxGroupNextUniqueId}`);
  });

  it('sets unique ids on all the checkbox buttons', () => {
    const checkboxIds = checkboxInstances.map(({ id }) => id);
    expect(new Set(checkboxIds).size).toBe(checkboxIds.length);
    for (const id of checkboxIds) {
      expect(/lg-toggle-\d{1,3}/.test(id)).toBe(true);
    }
  });

  it('marks the selected checkbox when the value is changed', () => {
    const redOption: DebugElement = checkboxDebugElements.find(
      checkboxDebugElement => checkboxDebugElement.componentInstance.value === 'red',
    );
    redOption.query(By.css('input')).triggerEventHandler('click', null);
    fixture.detectChanges();
    const selected = checkboxInstances.find(checkbox => checkbox.value === 'red');
    expect(selected.checked).toBe(true);
    const notSelected = checkboxInstances.filter(checkbox => checkbox.value !== 'red');
    for (const checkbox of notSelected) {
      expect(checkbox.checked).toBe(false);
    }
  });

  it('updates the model value when a checkbox option is checked', () => {
    const redOption: DebugElement = checkboxDebugElements.find(
      checkboxDebugElement => checkboxDebugElement.componentInstance.value === 'red',
    );
    redOption.query(By.css('input')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.form.controls.color.value).toContain('red');
  });

  it('updates the model value when multiple checkbox options are selected', () => {
    const redOption: DebugElement = checkboxDebugElements.find(
      checkboxDebugElement => checkboxDebugElement.componentInstance.value === 'red',
    );
    const blueOption: DebugElement = checkboxDebugElements.find(
      checkboxDebugElement => checkboxDebugElement.componentInstance.value === 'blue',
    );
    redOption.query(By.css('input')).triggerEventHandler('click', null);
    blueOption.query(By.css('input')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.form.controls.color.value.length).toBe(2);
    expect(component.form.controls.color.value).toContain('red');
    expect(component.form.controls.color.value).toContain('blue');
  });

  it('updates the model value when selected checkbox options are unselected', () => {
    groupInstance.value = ['red', 'blue'];
    fixture.detectChanges();
    expect(component.form.controls.color.value.length).toBe(2);
    const redOption: DebugElement = checkboxDebugElements.find(
      checkboxDebugElement => checkboxDebugElement.componentInstance.value === 'red',
    );
    const blueOption: DebugElement = checkboxDebugElements.find(
      checkboxDebugElement => checkboxDebugElement.componentInstance.value === 'blue',
    );
    redOption.query(By.css('input')).triggerEventHandler('click', null);
    blueOption.query(By.css('input')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.form.controls.color.value.length).toBe(0);
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
    console.log(component.color);
    component.form.controls.color.disable();
    fixture.detectChanges();
    for (const checkbox of checkboxInstances) {
      expect(checkbox.disabled).toBe(true);
    }
  });

  it('adds the error class if the form field is invalid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    fixture.detectChanges();
    expect(groupDebugElement.nativeElement.className).toContain(
      'lg-checkbox-group--error',
    );
  });

  it('removes the error class if the form field is valid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
      false,
    );
    fixture.detectChanges();
    expect(groupDebugElement.nativeElement.className).not.toContain(
      'lg-checkbox-group--error',
    );
  });
});
