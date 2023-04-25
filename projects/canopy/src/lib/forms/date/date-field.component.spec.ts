import {
  Component,
  DebugElement,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { skip } from 'rxjs/operators';
import { anything, instance, mock, when } from '@typestrong/ts-mockito';

import { LgHintComponent } from '../hint/hint.component';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';
import { LgInputModule } from '../input';

import { LgDateFieldComponent } from './date-field.component';

const errorId = 'test-error-id';
const hintId = 'test-hint-id';

const errorStateMatcherMock = mock(LgErrorStateMatcher);

@Component({
  template: `
    <form (ngSubmit)="submit()" [formGroup]="form" #testForm="ngForm">
      <lg-date-field formControlName="dateOfBirth">
        Date of birth
        <lg-hint id="${hintId}">Hint</lg-hint>
        <lg-validation id="${errorId}">Error</lg-validation>
      </lg-date-field>
    </form>
  `,
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

  @Output() dateChange: EventEmitter<{
    dateOfBirth: string;
  }> = new EventEmitter();

  form: UntypedFormGroup;

  @ViewChild('testForm')
  testFormDirective: FormGroupDirective;

  constructor(public fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      dateOfBirth: [ '' ],
    });

    this.form.valueChanges.subscribe(val => {
      this.dateChange.emit(val);
    });
  }
}

describe('LgDateFieldComponent', () => {
  let fixture: ComponentFixture<TestDateInputComponent>;
  let dateFieldDebugElement: DebugElement;
  let dateFieldInstance: LgDateFieldComponent;
  let fieldsetElement: DebugElement;
  let dateInput: DebugElement;
  let monthInput: DebugElement;
  let yearInput: DebugElement;
  let component: TestDateInputComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, LgInputModule ],
      declarations: [
        TestDateInputComponent,
        LgDateFieldComponent,
        MockComponents(LgHintComponent, LgValidationComponent),
      ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useFactory: () => instance(errorStateMatcherMock),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestDateInputComponent);
    component = fixture.componentInstance;

    dateFieldDebugElement = fixture.debugElement.query(
      By.directive(LgDateFieldComponent),
    );

    dateFieldInstance = dateFieldDebugElement.componentInstance;

    fieldsetElement = fixture.debugElement.query(By.css('fieldset'));
    dateInput = fixture.debugElement.query(By.css('[formcontrolname="date"]'));
    monthInput = fixture.debugElement.query(By.css('[formcontrolname="month"]'));
    yearInput = fixture.debugElement.query(By.css('[formcontrolname="year"]'));

    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
      false,
    );
  }));

  describe('markup', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('links the hint to the fieldset with the correct aria attributes', () => {
      expect(fieldsetElement.nativeElement.getAttribute('aria-describedby')).toContain(
        hintId,
      );
    });

    it('links custom error messages to the input field with the correct aria attributes', () => {
      expect(fieldsetElement.nativeElement.getAttribute('aria-describedby')).toContain(
        errorId,
      );
    });

    it('combines both the hint and error ids to create the aria described attribute', () => {
      expect(fieldsetElement.nativeElement.getAttribute('aria-describedby')).toBe(
        `${hintId} ${errorId}`,
      );
    });
  });

  it('adds the tabindex attribute to the fieldset element', () => {
    expect(fieldsetElement.nativeElement.getAttribute('tabindex')).toBeNull();

    dateFieldInstance.focus = true;
    fixture.detectChanges();

    expect(fieldsetElement.nativeElement.getAttribute('tabindex')).toBe('-1');
  });

  it('sets the individual input fields when a date value is provided', () => {
    const testDate = '1970-05-05';

    component.form.get('dateOfBirth').setValue(testDate);
    fixture.detectChanges();
    const [ year, month, date ] = testDate.split('-');

    expect(yearInput.nativeElement.value).toEqual(year);
    expect(monthInput.nativeElement.value).toEqual(month);
    expect(dateInput.nativeElement.value).toEqual(date);
  });

  it('joins the individual input fields and sets the value even if some are null', () => {
    fixture.detectChanges();
    dateFieldInstance.year.setValue('1970');
    dateFieldInstance.month.setValue('5');
    dateFieldInstance.date.setValue('');

    expect(component.form.controls.dateOfBirth.value).toEqual('1970-05-');
  });

  it('sets the individual input fields to the empty string when no date value is provided', () => {
    fixture.detectChanges();

    expect(yearInput.nativeElement.value).toEqual('');
    expect(monthInput.nativeElement.value).toEqual('');
    expect(dateInput.nativeElement.value).toEqual('');
  });

  describe('disabling fields', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('disables the year input field when the disabled property is set', () => {
      expect(yearInput.nativeElement.disabled).toEqual(false);
      component.disabled = true;
      fixture.detectChanges();

      expect(yearInput.nativeElement.disabled).toEqual(true);
    });

    it('disables the month input field when the disabled property is set', () => {
      expect(monthInput.nativeElement.disabled).toEqual(false);
      component.disabled = true;
      fixture.detectChanges();

      expect(monthInput.nativeElement.disabled).toEqual(true);
    });

    it('disables the date input field when the disabled property is set', () => {
      expect(dateInput.nativeElement.disabled).toEqual(false);
      component.disabled = true;
      fixture.detectChanges();

      expect(dateInput.nativeElement.disabled).toEqual(true);
    });
  });

  it('joins the individual fields to an ISO date string when an input field is changed', () => {
    fixture.detectChanges();
    dateFieldInstance.year.setValue('1944');
    dateFieldInstance.month.setValue('3');
    dateFieldInstance.date.setValue('7');
    fixture.detectChanges();

    expect(component.form.controls.dateOfBirth.value).toEqual('1944-03-07');
  });

  it('replaces empty fields with an empty string if date is not complete', done => {
    fixture.detectChanges();

    component.dateChange.pipe(skip(1)).subscribe(change => {
      expect(change.dateOfBirth).toBe('1944-03-');
      done();
    });

    dateFieldInstance.year.setValue('1944');
    dateFieldInstance.month.setValue('3');
  });

  it('updates the date value on each input change', () => {
    fixture.detectChanges();
    dateInput.nativeElement.value = '9';
    dateInput.nativeElement.dispatchEvent(new Event('input'));

    expect(dateFieldInstance.date.value).toBe('9');
  });

  it('updates the month value on each input change', () => {
    fixture.detectChanges();
    monthInput.nativeElement.value = '1';
    monthInput.nativeElement.dispatchEvent(new Event('input'));

    expect(dateFieldInstance.month.value).toBe('1');
  });

  it('updates the year value on each input change', () => {
    fixture.detectChanges();
    yearInput.nativeElement.value = '3';
    yearInput.nativeElement.dispatchEvent(new Event('input'));

    expect(dateFieldInstance.year.value).toBe('3');
  });

  it('publishes a change when the user enters a date', done => {
    fixture.detectChanges();

    component.dateChange.pipe(skip(2)).subscribe(change => {
      expect(change.dateOfBirth).toBe('1944-03-07');
      done();
    });

    dateFieldInstance.year.setValue('1944');
    dateFieldInstance.month.setValue('3');
    dateFieldInstance.date.setValue('7');
  });

  describe('validation rules', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('adds an invalid field validation rule if a field is invalid', () => {
      dateFieldInstance.month.markAsDirty();
      dateFieldInstance.month.setValue('x');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toEqual({
        invalidField: 'month',
      });
    });

    it('adds an invalid fields validation rule if more than one field is invalid', () => {
      dateFieldInstance.month.markAsDirty();
      dateFieldInstance.month.setValue('x');
      dateFieldInstance.date.markAsDirty();
      dateFieldInstance.date.setValue('1x');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toEqual({
        invalidFields: [ 'day', 'month' ],
      });
    });

    it('adds a required field validation rule if a field is empty', () => {
      dateFieldInstance.month.markAsDirty();
      dateFieldInstance.month.setValue('');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toEqual({
        requiredField: 'month',
      });
    });

    it('adds a required fields validation rule if more than one field is empty', () => {
      dateFieldInstance.month.markAsDirty();
      dateFieldInstance.month.setValue('');
      dateFieldInstance.date.markAsDirty();
      dateFieldInstance.date.setValue('');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toEqual({
        requiredFields: [ 'day', 'month' ],
      });
    });

    it('adds an invalid fields validation rule if there are both invalid and required fields', () => {
      dateFieldInstance.month.markAsDirty();
      dateFieldInstance.month.setValue('x');
      dateFieldInstance.date.markAsDirty();
      dateFieldInstance.date.setValue('');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toEqual({
        invalidField: 'month',
      });
    });

    it('adds an invalid date validation rule if the date is not a real date', () => {
      dateFieldInstance.date.markAsDirty();
      dateFieldInstance.date.setValue('30');
      dateFieldInstance.month.markAsDirty();
      dateFieldInstance.month.setValue('2');
      dateFieldInstance.year.markAsDirty();
      dateFieldInstance.year.setValue('1970');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toEqual({
        invalidDate: true,
      });
    });

    it('adds no validation rules if the date is valid', () => {
      dateFieldInstance.date.markAsDirty();
      dateFieldInstance.date.setValue('28');
      dateFieldInstance.month.markAsDirty();
      dateFieldInstance.month.setValue('2');
      dateFieldInstance.year.markAsDirty();
      dateFieldInstance.year.setValue('1970');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toBe(null);
    });
  });
});
