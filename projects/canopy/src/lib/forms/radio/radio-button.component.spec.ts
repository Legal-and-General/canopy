import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, inject, Input } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MockComponents } from 'ng-mocks';

import { LgErrorStateMatcher } from '../validation';
import { LgHintComponent } from '../hint';

import { LgRadioButtonComponent } from './radio-button.component';
import { LgRadioGroupComponent } from './radio-group.component';
import { RadioSize } from './radio.interface';

const hintTestId = 'test-hint-id';

@Component({
  template: `
    <form [formGroup]="form" #testForm="ngForm">
      <lg-radio-group formControlName="color">
        Color
        <lg-radio-button value="red" [size]="size">Red</lg-radio-button>
        <lg-radio-button value="yellow">
          Yellow
          <div class="lg-radio-button__content">
            <lg-hint id="${hintTestId}">Custom text</lg-hint>
          </div>
        </lg-radio-button>
        <lg-radio-button value="blue">Blue</lg-radio-button>
      </lg-radio-group>
    </form>
  `,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LgRadioButtonComponent,
    LgRadioGroupComponent,
    LgHintComponent,
  ],
})
class TestRadioButtonComponent {
  private fb = inject(UntypedFormBuilder);
  form: UntypedFormGroup;
  @Input() size: RadioSize = 'sm';

  constructor() {
    this.form = this.fb.group({
      color: [ { value: '', disabled: false }, [ Validators.required ] ],
    });
  }
}

describe('LgRadioButtonComponent', () => {
  let component: LgRadioButtonComponent;
  let testComponent: TestRadioButtonComponent;
  let fixture: ComponentFixture<LgRadioButtonComponent>;
  let testFixture: ComponentFixture<TestRadioButtonComponent>;
  let errorStateMatcherMock: { isControlInvalid: jest.Mock };
  let radioGroupMock: {
    name: string;
    variant: string;
    disabled: boolean;
    onTouched: jest.Mock;
    onChange: jest.Mock;
  };
  let hintDebugElement: DebugElement;
  let inputDebugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    errorStateMatcherMock = {
      isControlInvalid: jest.fn(),
    };

    radioGroupMock = {
      name: 'color',
      variant: 'segment',
      disabled: false,
      onTouched: jest.fn(),
      onChange: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        LgRadioButtonComponent,
        LgRadioGroupComponent,
        TestRadioButtonComponent,
        MockComponents(LgHintComponent),
      ],
      providers: [
        { provide: LgRadioGroupComponent, useValue: radioGroupMock },
        { provide: LgErrorStateMatcher, useValue: errorStateMatcherMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    testFixture = TestBed.createComponent(TestRadioButtonComponent);
    testComponent = testFixture.componentInstance;
    testFixture.detectChanges();

    inputDebugElement = testFixture.debugElement.queryAll(By.css('input'))[1];
    hintDebugElement = testFixture.debugElement.query(By.directive(LgHintComponent));
  }));

  it('sets its name from the radio group name', () => {
    expect(component.name).toBe('color');
  });

  describe('the variant', () => {
    it('should be set based on the radio group variant', () => {
      expect(component.variant).toBe('segment');
    });

    it('should set the correct class modifier', () => {
      expect(fixture.debugElement.nativeElement.classList).toContain(
        'lg-radio-button--segment',
      );

      radioGroupMock.variant = 'radio';
      fixture = TestBed.createComponent(LgRadioButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const classList = fixture.debugElement.nativeElement.classList;

      expect(classList).toContain('lg-radio-button--radio');
      expect(classList).not.toContain('lg-radio-button--segment');
    });
  });

  it('adds the radio button size based on the variant', () => {
    expect(fixture.debugElement.query(By.css('.lg-radio-button__label--sm'))).toBeNull();

    radioGroupMock.variant = 'radio';
    fixture = TestBed.createComponent(LgRadioButtonComponent);
    component = fixture.componentInstance;
    component.size = 'sm';
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.lg-radio-button__label--sm'))?.nativeElement,
    ).toBeDefined();

    expect(fixture.debugElement.query(By.css('.lg-radio-button__label--lg'))).toBeNull();

    component.size = 'lg';
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.lg-radio-button__label--lg'))?.nativeElement,
    ).toBeDefined();

    expect(fixture.debugElement.query(By.css('.lg-radio-button__label--sm'))).toBeNull();
  });

  it('sets the disabled property when the radio group is disabled', () => {
    radioGroupMock.disabled = true;
    fixture.detectChanges();
    expect(component.disabled).toBe(true);
  });

  it('sets the aria-invalid attribute to false when the input is valid', () => {
    errorStateMatcherMock.isControlInvalid.mockReturnValue(false);
    fixture.detectChanges();
    const radio = fixture.debugElement.query(By.css('input'));

    expect(radio.nativeElement.getAttribute('aria-invalid')).toBe('false');
  });

  it('adds the error class and set aria-invalid to true if the form field is invalid', () => {
    errorStateMatcherMock.isControlInvalid.mockReturnValue(true);
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.className).toContain(
      'lg-radio-button--error',
    );

    const radio = fixture.debugElement.query(By.css('input'));

    expect(radio.nativeElement.getAttribute('aria-invalid')).toBe('true');
  });

  it('links the hint to the input with the correct aria attributes', () => {
    expect(testComponent).not.toBeNull();
    expect(hintDebugElement.nativeElement.id.length).toBeGreaterThan(0);

    expect(inputDebugElement.nativeElement.getAttribute('aria-describedby')).toContain(
      hintDebugElement.nativeElement.id,
    );
  });

  it('should emit an event when #onBlur is called', () => {
    const blurSpy = jest.spyOn(component.blur, 'emit');

    component.onBlur(new Event(''));
    expect(blurSpy).toHaveBeenCalled();
  });
});
