import { Component, DebugElement, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LgFormsModule } from '..';
import { LgHintComponent } from '../hint/hint.component';

@Component({
  template: `
    <form (ngSubmit)="submit()" [formGroup]="form">
      <lg-date-field formControlName="dateOfBirth">
        Date of birth
        <lg-hint>e.g. 07 03 1944</lg-hint>
      </lg-date-field>
    </form>
  `
})
class TestDateInputComponent {
  @Input()
  set disabled(disabled: boolean) {
    if (disabled) {
      this.form.controls.dateOfBirth.disable();
    } else {
      this.form.controls.dateOfBirth.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.dateOfBirth.disabled;
  }

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      dateOfBirth: { value: null, disabled: false }
    });
  }
}

describe('LgDateFieldComponent', () => {
  let fixture: ComponentFixture<TestDateInputComponent>;
  let fieldsetElement: DebugElement;
  let hintElement: DebugElement;
  let dateInput: DebugElement;
  let monthInput: DebugElement;
  let yearInput: DebugElement;
  let component: TestDateInputComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LgFormsModule, FormsModule, ReactiveFormsModule],
      declarations: [TestDateInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestDateInputComponent);
    component = fixture.componentInstance;

    fieldsetElement = fixture.debugElement.query(By.css('fieldset'));
    dateInput = fixture.debugElement.query(By.css('[formcontrolname="date"]'));
    monthInput = fixture.debugElement.query(
      By.css('[formcontrolname="month"]')
    );
    yearInput = fixture.debugElement.query(By.css('[formcontrolname="year"]'));

    hintElement = fixture.debugElement.query(By.directive(LgHintComponent));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds an aria described by attribute to the fieldset if a label is provided', () => {
    expect(
      fieldsetElement.nativeElement.getAttribute('aria-describedby')
    ).toEqual(hintElement.nativeElement.getAttribute('id'));
  });

  it('sets the individual input fields when a date value is provided', () => {
    const testDate = '1970-05-05';
    component.form.get('dateOfBirth').setValue(testDate);
    fixture.detectChanges();
    const [year, month, date] = testDate.split('-');
    expect(yearInput.nativeElement.value).toEqual(year);
    expect(monthInput.nativeElement.value).toEqual(month);
    expect(dateInput.nativeElement.value).toEqual(date);
  });

  it('sets the individual input fields to the empty string when no date value is provided', () => {
    expect(yearInput.nativeElement.value).toEqual('');
    expect(monthInput.nativeElement.value).toEqual('');
    expect(dateInput.nativeElement.value).toEqual('');
  });

  it('disabled the year input field when the disabled property is set', () => {
    expect(yearInput.nativeElement.disabled).toEqual(false);
    component.disabled = true;
    fixture.detectChanges();
    expect(yearInput.nativeElement.disabled).toEqual(true);
  });

  it('disabled the month input field when the disabled property is set', () => {
    expect(monthInput.nativeElement.disabled).toEqual(false);
    component.disabled = true;
    fixture.detectChanges();
    expect(monthInput.nativeElement.disabled).toEqual(true);
  });

  it('disabled the date input field when the disabled property is set', () => {
    expect(dateInput.nativeElement.disabled).toEqual(false);
    component.disabled = true;
    fixture.detectChanges();
    expect(dateInput.nativeElement.disabled).toEqual(true);
  });

  it('joins the individual fields to an ISO date string when an input field is changed', () => {
    yearInput.nativeElement.value = 1944;
    yearInput.nativeElement.dispatchEvent(new Event('input'));

    monthInput.nativeElement.value = 3;
    monthInput.nativeElement.dispatchEvent(new Event('input'));

    dateInput.nativeElement.value = 7;
    dateInput.nativeElement.dispatchEvent(new Event('input'));

    expect(component.form.controls.dateOfBirth.value).toEqual('1944-03-07');
  });

  it('sets unique identifiers for each input field', () => {
    expect(/lg-input-year-\d{1,3}/.test(yearInput.nativeElement.id)).toBe(true);
    expect(/lg-input-month-\d{1,3}/.test(monthInput.nativeElement.id)).toBe(
      true
    );
    expect(/lg-input-date-\d{1,3}/.test(dateInput.nativeElement.id)).toBe(true);
  });
});
