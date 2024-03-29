import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, Input } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { anything, instance, mock, spy, verify, when } from '@typestrong/ts-mockito';
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
        <lg-radio-button value="yellow"
          >Yellow
          <div class="lg-radio-button__content">
            <lg-hint id="${hintTestId}">Custom text</lg-hint>
          </div>
        </lg-radio-button>
        <lg-radio-button value="blue">Blue</lg-radio-button>
      </lg-radio-group>
    </form>
  `,
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LgRadioButtonComponent,
    LgRadioGroupComponent,
    LgHintComponent,
  ],
})
class TestRadioButtonComponent {
  form: UntypedFormGroup;
  @Input() size: RadioSize = 'sm';

  constructor(public fb: UntypedFormBuilder) {
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
  let errorStateMatcherMock: LgErrorStateMatcher;
  let radioGroupMock: LgRadioGroupComponent;
  let hintDebugElement: DebugElement;
  let inputDebugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    errorStateMatcherMock = mock(LgErrorStateMatcher);
    radioGroupMock = mock(LgRadioGroupComponent);
    when(radioGroupMock.name).thenReturn('color');
    when(radioGroupMock.variant).thenReturn('segment');

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
        {
          provide: LgRadioGroupComponent,
          useFactory: () => instance(radioGroupMock),
        },
        {
          provide: LgErrorStateMatcher,
          useFactory: () => instance(errorStateMatcherMock),
        },
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
      expect(fixture.debugElement.nativeElement.getAttribute('class')).toContain(
        'lg-radio-button--segment',
      );

      when(radioGroupMock.variant).thenReturn('radio');
      fixture = TestBed.createComponent(LgRadioButtonComponent);
      component = fixture.componentInstance;

      expect(fixture.debugElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-radio-button--segment',
      );
    });
  });

  it('adds the radio button size based on the variant', () => {
    expect(fixture.debugElement.query(By.css('.lg-radio-button__label--sm'))).toBeNull();

    when(radioGroupMock.variant).thenReturn('radio');
    fixture = TestBed.createComponent(LgRadioButtonComponent);
    component = fixture.componentInstance;
    component.size = 'sm';
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.lg-radio-button__label--sm')).nativeElement,
    ).toBeDefined();

    expect(fixture.debugElement.query(By.css('.lg-radio-button__label--lg'))).toBeNull();

    component.size = 'lg';
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.lg-radio-button__label--lg')).nativeElement,
    ).toBeDefined();

    expect(fixture.debugElement.query(By.css('.lg-radio-button__label--sm'))).toBeNull();
  });

  // https://github.com/NagRock/ts-mockito/issues/120
  xit('sets the radio group value when checked', () => {
    component.value = 'red';
    const radio = fixture.debugElement.query(By.css('input'));

    radio.triggerEventHandler('click', null);
    fixture.detectChanges();
    verify(radioGroupMock.value).called();

    expect().nothing();
  });

  it('sets the disabled property when the radio group is disabled', () => {
    when(radioGroupMock.disabled).thenReturn(true);
    fixture.detectChanges();

    expect(component.disabled).toBe(true);
  });

  // https://github.com/NagRock/ts-mockito/issues/120
  xit('marks the radioGroup as touched if the radio is checked', () => {
    const radio = fixture.debugElement.query(By.css('input'));

    radio.triggerEventHandler('click', null);
    fixture.detectChanges();
    verify(radioGroupMock.onTouched()).once();

    expect().nothing();
  });

  it('sets the aria-invalid attribute to false when the input is valid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
      false,
    );

    fixture.detectChanges();
    const radio = fixture.debugElement.query(By.css('input'));

    expect(radio.nativeElement.getAttribute('aria-invalid')).toBe('false');
  });

  it('adds the error class and set aria-invalid to true if the form field is invalid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.className).toContain(
      'lg-radio-button--error',
    );

    const radio = fixture.debugElement.query(By.css('input'));

    expect(radio.nativeElement.getAttribute('aria-invalid')).toBe('true');
  });

  it('links the hint to the input with the correct aria attributes', () => {
    expect(testComponent).not.toBe(null);
    expect(hintDebugElement.nativeElement.getAttribute('id').length).not.toEqual(0);

    expect(inputDebugElement.nativeElement.getAttribute('aria-describedBy')).toContain(
      hintDebugElement.nativeElement.getAttribute('id'),
    );
  });

  it('should emit an event when #onBlur is called', () => {
    const blurEmitterSpy = spy(component.blur);

    component.onBlur(new Event(''));
    verify(blurEmitterSpy.emit(anything())).once();
  });
});
