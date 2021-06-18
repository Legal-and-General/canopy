import {
  Component,
  DebugElement,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MockComponents } from 'ng-mocks';
import { instance, mock } from 'ts-mockito';
import { skip } from 'rxjs/operators';

import { LgHintComponent } from '../hint/hint.component';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';
import { LgSortCodeComponent } from './sort-code.component';
import { LgInputModule } from '../input';
import { LgButtonComponent } from '../../button/button.component';

const errorId = 'test-error-id';
const hintId = 'test-hint-id';

const errorStateMatcherMock = mock(LgErrorStateMatcher);

@Component({
  template: `
    <form [formGroup]="form" #testForm="ngForm">
      <lg-sort-code formControlName="sortCode">
        Sort Code
        <lg-hint id="${hintId}">Must be 6 digits long</lg-hint>
        <lg-validation id="${errorId}">Error</lg-validation>
      </lg-sort-code>
      <button lg-button type="submit" variant="solid-primary">Submit</button>
    </form>
  `,
})
class TestSortCodeComponent {
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

  @Output() sortCodeChange: EventEmitter<{
    sortCode: string;
  }> = new EventEmitter();

  form: FormGroup;

  @ViewChild('testForm')
  testFormDirective: FormGroupDirective;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sortCode: [''],
    });
    this.form.valueChanges.subscribe((val) => {
      this.sortCodeChange.emit(val);
    });
  }
}

describe('SortCodeComponent', () => {
  let fixture: ComponentFixture<TestSortCodeComponent>;
  let component: TestSortCodeComponent;
  let sortCodeFieldInstance: LgSortCodeComponent;
  let sortCodeDebugElement: DebugElement;
  let fieldsetElement: DebugElement;
  let firstInput: DebugElement;
  let secondInput: DebugElement;
  let thirdInput: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, ReactiveFormsModule, LgInputModule],
        declarations: [
          TestSortCodeComponent,
          LgSortCodeComponent,
          MockComponents(LgHintComponent, LgValidationComponent, LgButtonComponent),
        ],
        providers: [
          {
            provide: LgErrorStateMatcher,
            useFactory: () => instance(errorStateMatcherMock),
          },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSortCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    sortCodeDebugElement = fixture.debugElement.query(By.directive(LgSortCodeComponent));
    sortCodeFieldInstance = sortCodeDebugElement.componentInstance;

    fieldsetElement = fixture.debugElement.query(By.css('fieldset'));
    firstInput = fixture.debugElement.query(By.css('[formcontrolname="first"]'));
    secondInput = fixture.debugElement.query(By.css('[formcontrolname="second"]'));
    thirdInput = fixture.debugElement.query(By.css('[formcontrolname="third"]'));
  });

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

  it('sets the individual input fields when a sort code value is provided', () => {
    component.form.get('sortCode').setValue('204060');
    fixture.detectChanges();
    expect(firstInput.nativeElement.value).toEqual('20');
    expect(secondInput.nativeElement.value).toEqual('40');
    expect(thirdInput.nativeElement.value).toEqual('60');
  });

  it('joins the individual input fields and sets the value', () => {
    sortCodeFieldInstance.first.setValue('10');
    sortCodeFieldInstance.second.setValue('20');
    sortCodeFieldInstance.third.setValue('30');
    expect(component.form.controls.sortCode.value).toEqual('102030');
  });

  describe('disabling fields', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('disables the first input field when the disabled property is set', () => {
      expect(firstInput.nativeElement.disabled).toEqual(false);
      component.disabled = true;
      fixture.detectChanges();
      expect(firstInput.nativeElement.disabled).toEqual(true);
    });

    it('disables the second input field when the disabled property is set', () => {
      expect(secondInput.nativeElement.disabled).toEqual(false);
      component.disabled = true;
      fixture.detectChanges();
      expect(secondInput.nativeElement.disabled).toEqual(true);
    });

    it('disables the third input field when the disabled property is set', () => {
      expect(thirdInput.nativeElement.disabled).toEqual(false);
      component.disabled = true;
      fixture.detectChanges();
      expect(thirdInput.nativeElement.disabled).toEqual(true);
    });
  });

  it('sets unique identifiers for each input field', () => {
    expect(/lg-input-sort-code-first-\d{1,3}/.test(firstInput.nativeElement.id)).toBe(
      true,
    );
    expect(/lg-input-sort-code-second-\d{1,3}/.test(secondInput.nativeElement.id)).toBe(
      true,
    );
    expect(/lg-input-sort-code-third-\d{1,3}/.test(thirdInput.nativeElement.id)).toBe(
      true,
    );
  });

  it('replaces empty fields with an empty string if sort code is not complete', (done) => {
    component.sortCodeChange.pipe(skip(1)).subscribe((change) => {
      expect(change.sortCode).toBe('1020');
      done();
    });
    sortCodeFieldInstance.first.setValue('10');
    sortCodeFieldInstance.second.setValue('20');
  });

  it('updates the first sort code value on each input change', () => {
    firstInput.nativeElement.value = '11';
    firstInput.nativeElement.dispatchEvent(new Event('input'));
    expect(sortCodeFieldInstance.first.value).toBe('11');
  });

  it('updates the second sort code value on each input change', () => {
    secondInput.nativeElement.value = '22';
    secondInput.nativeElement.dispatchEvent(new Event('input'));
    expect(sortCodeFieldInstance.second.value).toBe('22');
  });

  it('updates the third sort code value on each input change', () => {
    thirdInput.nativeElement.value = '33';
    thirdInput.nativeElement.dispatchEvent(new Event('input'));
    expect(sortCodeFieldInstance.third.value).toBe('33');
  });

  it('publishes a change when the user enters a sort code', (done) => {
    component.sortCodeChange.pipe(skip(2)).subscribe((change) => {
      expect(change.sortCode).toBe('001122');
      done();
    });
    sortCodeFieldInstance.first.setValue('00');
    sortCodeFieldInstance.second.setValue('11');
    sortCodeFieldInstance.third.setValue('22');
  });

  describe('validation rules', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('adds an invalid field validation rule if the first input field is invalid', () => {
      sortCodeFieldInstance.first.markAsDirty();
      sortCodeFieldInstance.first.setValue('xx');
      fixture.detectChanges();
      expect(fixture.componentInstance.form.controls.sortCode.errors).toEqual({
        invalidField: true,
      });
    });

    it('adds an invalid field validation rule if the second input field is invalid', () => {
      sortCodeFieldInstance.second.markAsDirty();
      sortCodeFieldInstance.second.setValue('xx');
      fixture.detectChanges();
      expect(fixture.componentInstance.form.controls.sortCode.errors).toEqual({
        invalidField: true,
      });
    });

    it('adds an invalid field validation rule if the third input field is invalid', () => {
      sortCodeFieldInstance.third.markAsDirty();
      sortCodeFieldInstance.third.setValue('xx');
      fixture.detectChanges();
      expect(fixture.componentInstance.form.controls.sortCode.errors).toEqual({
        invalidField: true,
      });
    });

    it('adds a required field validation rule if all the input fields are empty', () => {
      sortCodeFieldInstance.first.markAsDirty();
      sortCodeFieldInstance.second.markAsDirty();
      sortCodeFieldInstance.third.markAsDirty();
      sortCodeFieldInstance.first.setValue('');
      sortCodeFieldInstance.second.setValue('');
      sortCodeFieldInstance.third.setValue('');
      fixture.detectChanges();
      expect(fixture.componentInstance.form.controls.sortCode.errors).toEqual({
        requiredField: true,
      });
    });
  });

  describe('when parent form is submitted', () => {
    let sortCodeComponent: LgSortCodeComponent;

    beforeEach(() => {
      sortCodeDebugElement = fixture.debugElement.query(
        By.directive(LgSortCodeComponent),
      );
      sortCodeComponent = sortCodeDebugElement.componentInstance;
    });

    it('should submit the form group', () => {
      const spy = spyOn(sortCodeComponent.formGroupDirective, 'onSubmit');
      const buttonDebugElement = fixture.debugElement.query(
        By.directive(LgButtonComponent),
      );
      buttonDebugElement.nativeElement.click();

      expect(spy).toHaveBeenCalled();
    });
  });
});
