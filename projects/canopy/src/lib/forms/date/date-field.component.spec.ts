import {
  Component,
  DebugElement,
  EventEmitter,
  inject,
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

import { LgHintComponent } from '../hint';
import { LgErrorStateMatcher } from '../validation';
import { LgValidationComponent } from '../validation';

import { LgDateFieldComponent } from './date-field.component';

const errorId = 'test-error-id';
const hintId = 'test-hint-id';
const customAriaDescribedById = 'custom-aria-described-by-id';

@Component({
  template: `
    <form (ngSubmit)="submit()" [formGroup]="form" #testForm="ngForm">
      <lg-date-field formControlName="dateOfBirth">
        Date of birth
        <lg-validation id="${errorId}">Error</lg-validation>
      </lg-date-field>
    </form>
  `,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LgValidationComponent,
    LgDateFieldComponent,
  ],
})
class TestDateInputComponent {
  private fb = inject(UntypedFormBuilder);
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

  constructor() {
    this.form = this.fb.group({
      dateOfBirth: [ '' ],
    });

    this.form.valueChanges.subscribe(val => {
      this.dateChange.emit(val);
    });
  }

  submit() {
    // Form submit handler
  }
}

@Component({
  template: `
    <form (ngSubmit)="submit()" [formGroup]="form" #testForm="ngForm">
      <p id="${customAriaDescribedById}">Additional description for accessibility</p>
      <lg-date-field formControlName="dateOfBirth" [ariaDescribedBy]="customAriaId">
        Date of birth
        <lg-hint id="${hintId}">Hint</lg-hint>
        <lg-validation id="${errorId}">Error</lg-validation>
      </lg-date-field>
    </form>
  `,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LgHintComponent,
    LgValidationComponent,
    LgDateFieldComponent,
  ],
})
class TestDateInputWithCustomAriaComponent {
  private fb = inject(UntypedFormBuilder);
  customAriaId = customAriaDescribedById;
  form: UntypedFormGroup;

  @ViewChild('testForm')
  testFormDirective: FormGroupDirective;

  constructor() {
    this.form = this.fb.group({
      dateOfBirth: [ '' ],
    });
  }

  submit() {
    // Form submit handler
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
  let errorStateMatcherMock: LgErrorStateMatcher;

  beforeEach(waitForAsync(() => {
    errorStateMatcherMock = {
      isControlInvalid: jest.fn().mockReturnValue(false),
    } as unknown as LgErrorStateMatcher;

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TestDateInputComponent,
        LgDateFieldComponent,
        LgHintComponent,
        MockComponents(LgValidationComponent),
      ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useValue: errorStateMatcherMock,
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
  }));

  describe('markup', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('links the hint to the fieldset with the correct aria attributes', () => {
      const ariaDescribedBy =
        fieldsetElement.nativeElement.getAttribute('aria-describedby');

      // The hardcoded hint gets an auto-generated ID like 'lg-hint-1'
      expect(ariaDescribedBy).toMatch(/lg-hint-\d+/);
    });

    it('links custom error messages to the input field with the correct aria attributes', () => {
      expect(fieldsetElement.nativeElement.getAttribute('aria-describedby')).toContain(
        errorId,
      );
    });

    it('combines both the hint and error ids to create the aria described attribute', () => {
      const ariaDescribedBy =
        fieldsetElement.nativeElement.getAttribute('aria-describedby');

      // Should match pattern: 'lg-hint-{number} test-error-id'
      expect(ariaDescribedBy).toMatch(/^lg-hint-\d+ test-error-id$/);
    });
  });

  describe('custom ariaDescribedBy', () => {
    it('should preserve custom ariaDescribedBy value when provided via @Input', () => {
      const customId = 'custom-description-id';

      dateFieldInstance.ariaDescribedBy = customId;
      dateFieldInstance.ngAfterViewInit();
      fixture.detectChanges();

      const ariaDescribedBy =
        fieldsetElement.nativeElement.getAttribute('aria-describedby');

      expect(ariaDescribedBy).toContain(customId);
    });

    it('should merge custom ariaDescribedBy with hint ID', () => {
      const customId = 'custom-description-id';

      dateFieldInstance.ariaDescribedBy = customId;
      dateFieldInstance.ngAfterViewInit();
      fixture.detectChanges();

      const ariaDescribedBy =
        fieldsetElement.nativeElement.getAttribute('aria-describedby');

      expect(ariaDescribedBy).toContain(customId);
      expect(ariaDescribedBy).toMatch(/lg-hint-\d+/);
    });

    it('should merge custom ariaDescribedBy with error ID', () => {
      const customId = 'custom-description-id';

      dateFieldInstance.ariaDescribedBy = customId;
      dateFieldInstance.ngAfterViewInit();
      fixture.detectChanges();

      const ariaDescribedBy =
        fieldsetElement.nativeElement.getAttribute('aria-describedby');

      expect(ariaDescribedBy).toContain(customId);
      expect(ariaDescribedBy).toContain(errorId);
    });

    it('should merge custom ariaDescribedBy with both hint and error IDs', () => {
      const customId = 'custom-description-id';

      dateFieldInstance.ariaDescribedBy = customId;
      dateFieldInstance.ngAfterViewInit();
      fixture.detectChanges();

      const ariaDescribedBy =
        fieldsetElement.nativeElement.getAttribute('aria-describedby');

      // Should match pattern: 'custom-description-id lg-hint-{number} test-error-id'
      expect(ariaDescribedBy).toMatch(
        new RegExp(`^${customId} lg-hint-\\d+ ${errorId}$`),
      );
    });

    it('should place custom ariaDescribedBy first in the merged list', () => {
      const customId = 'custom-description-id';

      dateFieldInstance.ariaDescribedBy = customId;
      dateFieldInstance.ngAfterViewInit();
      fixture.detectChanges();

      const ariaDescribedBy =
        fieldsetElement.nativeElement.getAttribute('aria-describedby');

      expect(ariaDescribedBy.split(' ')[0]).toBe(customId);
    });

    it('should handle multiple space-separated custom IDs', () => {
      const customIds = 'custom-id-1 custom-id-2';

      dateFieldInstance.ariaDescribedBy = customIds;
      dateFieldInstance.ngAfterViewInit();
      fixture.detectChanges();

      const ariaDescribedBy =
        fieldsetElement.nativeElement.getAttribute('aria-describedby');

      expect(ariaDescribedBy).toContain(customIds);
      expect(ariaDescribedBy).toMatch(/lg-hint-\d+/);
      expect(ariaDescribedBy).toContain(errorId);
    });

    it('should not add custom ariaDescribedBy if not provided', () => {
      dateFieldInstance.ariaDescribedBy = null;
      dateFieldInstance.ngAfterViewInit();
      fixture.detectChanges();

      const ariaDescribedBy =
        fieldsetElement.nativeElement.getAttribute('aria-describedby');

      // Should only have hint and error IDs
      expect(ariaDescribedBy).toMatch(/^lg-hint-\d+ test-error-id$/);
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

    it('adds no validation rules if the day field is filled and then cleared', () => {
      dateFieldInstance.date.markAsDirty();
      dateFieldInstance.date.setValue('28');
      fixture.detectChanges();

      dateFieldInstance.date.setValue('');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toBe(null);
    });

    it('adds no validation rules if the month field is filled and then cleared', () => {
      dateFieldInstance.month.markAsDirty();
      dateFieldInstance.month.setValue('2');
      fixture.detectChanges();

      dateFieldInstance.month.setValue('');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toBe(null);
    });

    it('adds no validation rules if the year field is filled and then cleared', () => {
      dateFieldInstance.year.markAsDirty();
      dateFieldInstance.year.setValue('1970');
      fixture.detectChanges();

      dateFieldInstance.year.setValue('');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toBe(null);
    });

    it('adds no validation rules if all fields are filled and then cleared', () => {
      dateFieldInstance.date.markAsDirty();
      dateFieldInstance.date.setValue('28');
      dateFieldInstance.month.markAsDirty();
      dateFieldInstance.month.setValue('2');
      dateFieldInstance.year.markAsDirty();
      dateFieldInstance.year.setValue('1970');
      fixture.detectChanges();

      dateFieldInstance.date.setValue('');
      dateFieldInstance.month.setValue('');
      dateFieldInstance.year.setValue('');
      fixture.detectChanges();

      expect(fixture.componentInstance.form.controls.dateOfBirth.errors).toBe(null);
    });
  });
});

describe('LgDateFieldComponent with custom ariaDescribedBy', () => {
  let fixture: ComponentFixture<TestDateInputWithCustomAriaComponent>;
  let fieldsetElement: DebugElement;
  let component: TestDateInputWithCustomAriaComponent;
  let errorStateMatcherMock: LgErrorStateMatcher;

  beforeEach(waitForAsync(() => {
    errorStateMatcherMock = {
      isControlInvalid: jest.fn().mockReturnValue(false),
    } as unknown as LgErrorStateMatcher;

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TestDateInputWithCustomAriaComponent,
        LgDateFieldComponent,
        LgHintComponent,
        MockComponents(LgValidationComponent),
      ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useValue: errorStateMatcherMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestDateInputWithCustomAriaComponent);
    component = fixture.componentInstance;

    fieldsetElement = fixture.debugElement.query(By.css('fieldset'));
  }));

  it('should create component with custom ariaDescribedBy', () => {
    expect(component).toBeTruthy();
  });

  it('should include custom ariaDescribedBy ID in the aria-describedby attribute', () => {
    fixture.detectChanges();

    const ariaDescribedBy =
      fieldsetElement.nativeElement.getAttribute('aria-describedby');

    expect(ariaDescribedBy).toContain(customAriaDescribedById);
  });

  it('should merge custom ariaDescribedBy with hint and error IDs', () => {
    fixture.detectChanges();

    const ariaDescribedBy =
      fieldsetElement.nativeElement.getAttribute('aria-describedby');

    expect(ariaDescribedBy).toContain(customAriaDescribedById);
    expect(ariaDescribedBy).toMatch(/lg-hint-\d+/);
    expect(ariaDescribedBy).toContain(errorId);
  });

  it('should place custom ariaDescribedBy first in the list', () => {
    fixture.detectChanges();

    const ariaDescribedBy =
      fieldsetElement.nativeElement.getAttribute('aria-describedby');
    const ids = ariaDescribedBy.split(' ');

    expect(ids[0]).toBe(customAriaDescribedById);
  });

  it('should maintain all IDs in correct order: custom, hint, error', () => {
    fixture.detectChanges();

    const ariaDescribedBy =
      fieldsetElement.nativeElement.getAttribute('aria-describedby');

    // Should match pattern: 'custom-aria-described-by-id lg-hint-{number} test-error-id'
    expect(ariaDescribedBy).toMatch(
      new RegExp(`^${customAriaDescribedById} lg-hint-\\d+ ${errorId}$`),
    );
  });
});
