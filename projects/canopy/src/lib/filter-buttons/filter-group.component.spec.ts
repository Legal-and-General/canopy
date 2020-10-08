import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  NgControl,
  FormGroupDirective,
  FormArray,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MockComponents } from 'ng-mocks';
import { mock, instance, when, anything } from 'ts-mockito';

import { LgIconComponent } from '../icon';
import { LgErrorStateMatcher } from '../forms/validation/error-state-matcher';
import { LgValidationComponent } from '../forms/validation/validation.component';
import { LgFilterButtonComponent } from './filter-button/filter-button.component';
import { LgFilterGroupComponent } from './filter-group.component';
import { FilterVariant } from './filter-button.interface';

const validationTestId = 'test-validation-id';

@Component({
  template: `
    <form [formGroup]="form">
      <lg-filter-group [variant]="variant" formControlName="color">
        Color
        <lg-filter-button value="red">Red</lg-filter-button>
        <lg-filter-button value="yellow">Yellow</lg-filter-button>
        <lg-filter-button value="blue">Blue</lg-filter-button>
        <lg-validation id="${validationTestId}" *ngIf="isControlInvalid(color, testForm)">
          Error
        </lg-validation>
      </lg-filter-group>
    </form>
  `,
})
class TestFilterGroupSelectOneComponent {
  variant: FilterVariant = 'select-one';
  get color() {
    return this.form.get('color');
  }
  form: FormGroup;

  constructor(public fb: FormBuilder, private errorState: LgErrorStateMatcher) {
    this.form = fb.group({
      color: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }
}

@Component({
  template: `
    <form [formGroup]="form" #testForm="ngForm">
      <lg-filter-group [variant]="variant">
        Color
        <lg-filter-button formControlName="red" value="true">
          Red
        </lg-filter-button>
        <lg-filter-button formControlName="yellow" value="true">
          Yellow
        </lg-filter-button>
        <lg-filter-button formControlName="blue" value="true">Blue</lg-filter-button>
        <lg-validation id="${validationTestId}" *ngIf="isControlInvalid(color, testForm)">
          Error
        </lg-validation>
      </lg-filter-group>
    </form>
  `,
})
class TestFilterGroupSelectMultipleComponent {
  variant: FilterVariant = 'select-multiple';
  form: FormGroup;

  get red() {
    return this.form.get('red');
  }
  get yellow() {
    return this.form.get('yellow');
  }
  get blue() {
    return this.form.get('blue');
  }

  constructor(public fb: FormBuilder, private errorState: LgErrorStateMatcher) {
    this.form = fb.group({
      red: [
        { value: '', disabled: false },
        [Validators.required, Validators.requiredTrue],
      ],
      yellow: [{ value: '', disabled: false }],
      blue: [{ value: '', disabled: false }],
    });
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }
}

@Component({
  template: `
    <form [formGroup]="form" #testForm="ngForm">
      <lg-filter-group [variant]="variant" [valueArrayName]="valueArrayName">
        Color
        <lg-filter-button value="red">
          Red
        </lg-filter-button>
        <lg-filter-button value="yellow">
          Yellow
        </lg-filter-button>
        <lg-filter-button value="blue">Blue</lg-filter-button>
        <lg-validation id="${validationTestId}" *ngIf="isControlInvalid(color, testForm)">
          Error
        </lg-validation>
      </lg-filter-group>
    </form>
  `,
})
class TestFilterGroupSelectMultipleArrayComponent {
  variant: FilterVariant = 'select-multiple';
  valueArrayName = 'filters';
  form: FormGroup;

  constructor(public fb: FormBuilder, private errorState: LgErrorStateMatcher) {
    this.form = fb.group({
      filters: new FormArray([]),
    });
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }
}

describe('LgFilterGroupComponent', () => {
  let groupDebugElement: DebugElement;
  let filterDebugElements: Array<DebugElement>;
  let groupInstance: LgFilterGroupComponent;
  let filterInstances: Array<LgFilterButtonComponent>;

  describe('Select One variant', () => {
    let fixture: ComponentFixture<TestFilterGroupSelectOneComponent>;
    let component: TestFilterGroupSelectOneComponent;
    let fieldsetDebugElement: DebugElement;

    let errorDebugElement: DebugElement;
    let errorStateMatcherMock: LgErrorStateMatcher;

    beforeEach(async(() => {
      errorStateMatcherMock = mock(LgErrorStateMatcher);

      TestBed.configureTestingModule({
        imports: [FormsModule, ReactiveFormsModule],
        declarations: [
          TestFilterGroupSelectOneComponent,
          MockComponents(LgIconComponent, LgValidationComponent),
          LgFilterGroupComponent,
          LgFilterButtonComponent,
        ],
        providers: [
          {
            provide: LgErrorStateMatcher,
            useFactory: () => instance(errorStateMatcherMock),
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(TestFilterGroupSelectOneComponent);
      component = fixture.componentInstance;

      groupDebugElement = fixture.debugElement.query(
        By.directive(LgFilterGroupComponent),
      );
      groupInstance = groupDebugElement.injector.get<LgFilterGroupComponent>(
        LgFilterGroupComponent,
      );

      fieldsetDebugElement = fixture.debugElement.query(By.css('fieldset'));

      filterDebugElements = fixture.debugElement.queryAll(By.css('lg-filter-button'));

      filterInstances = filterDebugElements.map(debugEl => debugEl.componentInstance);

      fixture.detectChanges();
    }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('sets all filter buttons to the same name', () => {
      expect(groupInstance.name.length > 0).toBe(true);
      const name = filterInstances.pop().name;
      for (const filter of filterInstances) {
        expect(filter.name).toBe(name);
      }
    });

    it('selects the correct filter button when a value is provided', () => {
      groupInstance.value = 'blue';
      fixture.detectChanges();
      const checkedOption: DebugElement = filterDebugElements.find(
        filterDebugElement => filterDebugElement.componentInstance.checked === true,
      );
      expect(checkedOption.componentInstance.value).toBe('blue');
    });

    it('selects the correct filter button when a option is clicked', () => {
      const blueOption: DebugElement = filterDebugElements.find(
        filterDebugElement => filterDebugElement.componentInstance.value === 'blue',
      );
      blueOption.query(By.css('input')).triggerEventHandler('click', null);
      fixture.detectChanges();
      const checkedOption: DebugElement = filterDebugElements.find(
        filterDebugElement => filterDebugElement.componentInstance.checked === true,
      );
      expect(checkedOption.componentInstance.value).toBe('blue');
    });

    it('sets unique ids on all the filter buttons', () => {
      const filterIds = filterInstances.map(({ id }) => id);
      expect(new Set(filterIds).size).toBe(filterIds.length);
      for (const id of filterIds) {
        expect(/lg-filter-button-\d{1,3}/.test(id)).toBe(true);
      }
    });

    it('updates the model value when a filter option is clicked', () => {
      const blueOption: DebugElement = filterDebugElements.find(
        filterDebugElement => filterDebugElement.componentInstance.value === 'blue',
      );
      blueOption.query(By.css('input')).triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.form.controls.color.value).toBe('blue');
    });

    it('disables the filter buttons when the disabled property is set', () => {
      component.form.controls.color.disable();
      fixture.detectChanges();
      for (const filter of filterInstances) {
        expect(filter.disabled).toBe(true);
      }
    });

    it('links the error to the fieldset with the correct aria attributes', () => {
      when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
        true,
      );
      fixture.detectChanges();
      errorDebugElement = fixture.debugElement.query(By.directive(LgValidationComponent));

      expect(errorDebugElement.nativeElement.getAttribute('id').length).not.toEqual(0);
      expect(
        fieldsetDebugElement.nativeElement.getAttribute('aria-describedBy'),
      ).toContain(errorDebugElement.nativeElement.getAttribute('id'));
    });

    it('adds the error class if the form field is invalid', () => {
      when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
        true,
      );
      fixture.detectChanges();
      expect(groupDebugElement.nativeElement.className).toContain(
        'lg-filter-group--error',
      );
    });

    it('removes the error class if the form field is valid', () => {
      when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
        false,
      );
      fixture.detectChanges();
      expect(groupDebugElement.nativeElement.className).not.toContain(
        'lg-filter-group--error',
      );
    });
  });

  describe('Select Multiple', () => {
    let fixture: ComponentFixture<TestFilterGroupSelectMultipleComponent>;
    let component: TestFilterGroupSelectMultipleComponent;
    let inputDebugElement: DebugElement;
    let filterButtonDebugElement: DebugElement;

    let errorStateMatcherMock: LgErrorStateMatcher;

    beforeEach(async(() => {
      errorStateMatcherMock = mock(LgErrorStateMatcher);

      TestBed.configureTestingModule({
        imports: [FormsModule, ReactiveFormsModule],
        declarations: [
          TestFilterGroupSelectMultipleComponent,
          MockComponents(LgIconComponent, LgValidationComponent),
          LgFilterGroupComponent,
          LgFilterButtonComponent,
        ],
        providers: [
          {
            provide: LgErrorStateMatcher,
            useFactory: () => instance(errorStateMatcherMock),
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(TestFilterGroupSelectMultipleComponent);
      component = fixture.componentInstance;

      groupDebugElement = fixture.debugElement.query(
        By.directive(LgFilterGroupComponent),
      );
      groupInstance = groupDebugElement.injector.get<LgFilterGroupComponent>(
        LgFilterGroupComponent,
      );

      filterDebugElements = fixture.debugElement.queryAll(By.css('lg-filter-button'));

      filterInstances = filterDebugElements.map(debugEl => debugEl.componentInstance);

      inputDebugElement = fixture.debugElement.query(By.css('.lg-filter-button__input'));

      fixture.detectChanges();
    }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('sets different names for filter buttons', () => {
      expect(groupInstance.name.length > 0).toBe(true);
      const name = filterInstances.pop().name;
      for (const filter of filterInstances) {
        expect(filter.name === name).toBe(false);
      }
    });

    it('sets unique ids on all the filter buttons', () => {
      const filterIds = filterInstances.map(({ id }) => id);
      expect(new Set(filterIds).size).toBe(filterIds.length);
      for (const id of filterIds) {
        expect(/lg-filter-button-\d{1,3}/.test(id)).toBe(true);
      }
    });

    it('updates the model value when a filter button is selected', () => {
      expect(component.form.controls.red.value).toBe('');
      fixture.detectChanges();
      inputDebugElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.form.controls.red.value).toBe('true');
    });

    it('disables the filter buttons when the property is set', () => {
      expect(inputDebugElement.nativeElement.disabled).toBe(false);
      component.form.controls.red.disable();
      fixture.detectChanges();
      expect(inputDebugElement.nativeElement.disabled).toBe(true);
    });

    it('adds the error class if the form field is invalid', () => {
      when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
        true,
      );
      fixture.detectChanges();
      filterButtonDebugElement = fixture.debugElement.query(By.css('.lg-filter-button'));
      expect(filterButtonDebugElement.nativeElement.className).toContain(
        'lg-filter-button--error',
      );
    });

    it('removes the error class if the form field is valid', () => {
      when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
        false,
      );
      fixture.detectChanges();
      filterButtonDebugElement = fixture.debugElement.query(By.css('.lg-filter-button'));
      expect(filterButtonDebugElement.nativeElement.className).not.toContain(
        'lg-filter-button--error',
      );
    });
  });

  describe('Select Multiple with form array implementation', () => {
    let fixture: ComponentFixture<TestFilterGroupSelectMultipleArrayComponent>;
    let component: TestFilterGroupSelectMultipleArrayComponent;
    let inputDebugElement: DebugElement;
    let filterButtonDebugElement: DebugElement;

    let errorStateMatcherMock: LgErrorStateMatcher;

    beforeEach(async(() => {
      errorStateMatcherMock = mock(LgErrorStateMatcher);

      TestBed.configureTestingModule({
        imports: [FormsModule, ReactiveFormsModule],
        declarations: [
          TestFilterGroupSelectMultipleArrayComponent,
          MockComponents(LgIconComponent, LgValidationComponent),
          LgFilterGroupComponent,
          LgFilterButtonComponent,
        ],
        providers: [
          {
            provide: LgErrorStateMatcher,
            useFactory: () => instance(errorStateMatcherMock),
          },
        ],
      }).compileComponents();
      fixture = TestBed.createComponent(TestFilterGroupSelectMultipleArrayComponent);
      component = fixture.componentInstance;

      groupDebugElement = fixture.debugElement.query(
        By.directive(LgFilterGroupComponent),
      );
      groupInstance = groupDebugElement.injector.get<LgFilterGroupComponent>(
        LgFilterGroupComponent,
      );

      filterDebugElements = fixture.debugElement.queryAll(By.css('lg-filter-button'));

      inputDebugElement = fixture.debugElement.query(By.css('.lg-filter-button__input'));

      fixture.detectChanges();
    }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('updates the model value when a filter button is selected', () => {
      expect(component.form.controls.filters.value.length).toBe(0);
      const redOption: DebugElement = filterDebugElements.find(
        filterDebugElement => filterDebugElement.componentInstance.value === 'red',
      );
      redOption.query(By.css('input')).nativeElement.click();
      fixture.detectChanges();
      expect(component.form.controls.filters.value.length).toBe(1);
    });

    it('disables the filter buttons when the property is set', () => {
      expect(inputDebugElement.nativeElement.disabled).toBe(false);
      component.form.controls.filters.disable();
      fixture.detectChanges();
      expect(inputDebugElement.nativeElement.disabled).toBe(true);
    });

    it('adds the error class if the form field is invalid', () => {
      when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
        true,
      );
      fixture.detectChanges();
      filterButtonDebugElement = fixture.debugElement.query(By.css('.lg-filter-button'));
      expect(filterButtonDebugElement.nativeElement.className).toContain(
        'lg-filter-button--error',
      );
    });

    it('removes the error class if the form field is valid', () => {
      when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
        false,
      );
      fixture.detectChanges();
      filterButtonDebugElement = fixture.debugElement.query(By.css('.lg-filter-button'));
      expect(filterButtonDebugElement.nativeElement.className).not.toContain(
        'lg-filter-button--error',
      );
    });
  });
});
