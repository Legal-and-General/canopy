import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { anything, instance, mock, verify, when } from 'ts-mockito';

import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgRadioButtonComponent } from './radio-button.component';
import { LgRadioGroupComponent } from './radio-group.component';

describe('LgRadioButtonComponent', () => {
  let component: LgRadioButtonComponent;
  let fixture: ComponentFixture<LgRadioButtonComponent>;
  let errorStateMatcherMock: LgErrorStateMatcher;
  let radioGroupMock: LgRadioGroupComponent;

  beforeEach(
    waitForAsync(() => {
      errorStateMatcherMock = mock(LgErrorStateMatcher);
      radioGroupMock = mock(LgRadioGroupComponent);
      when(radioGroupMock.name).thenReturn('color');
      when(radioGroupMock.variant).thenReturn('segment');

      TestBed.configureTestingModule({
        declarations: [LgRadioButtonComponent],
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
    }),
  );

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

  it('set the aria-invalid attribute to false when the input is valid', () => {
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
});
