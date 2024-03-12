import { DebugElement } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MockComponents, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { instance, mock, spy, when } from '@typestrong/ts-mockito';
import { NgIf } from '@angular/common';

import { LgHintComponent } from '../hint';
import { LgLabelComponent } from '../label';
import { LgValidationComponent } from '../validation';
import { LgButtonComponent } from '../../button';
import { LgErrorStateMatcher } from '../validation';
import { LgPrefixDirective } from '../../prefix';
import { LgSuffixDirective } from '../../suffix';
import { LgIconComponent } from '../../icon';

import { LgInputFieldComponent } from './input-field.component';
import { LgInputDirective } from './input.directive';

describe('LgInputFieldComponent', () => {
  let fixture: MockedComponentFixture<LgInputFieldComponent>;
  let component: LgInputFieldComponent;
  let labelInstance: LgLabelComponent;
  let inputDirectiveInstance: LgInputDirective;
  let inputFieldDebugElement: DebugElement;
  let inputWrapperDebugElement: DebugElement;
  let errorStateMatcherMock: LgErrorStateMatcher;
  let labelDebugElement: DebugElement;

  const errorId = 'test-error-id';
  const hintId = 'test-hint-id';
  const prefixId = 'prefix-id';
  const suffixId = 'suffix-id';

  const suffixText = 'suffix';
  const prefixText = 'prefix';

  beforeEach(waitForAsync(() => {
    errorStateMatcherMock = mock(LgErrorStateMatcher);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        LgInputFieldComponent,
        LgHintComponent,
        LgValidationComponent,
        LgInputDirective,
        LgSuffixDirective,
        LgPrefixDirective,
        LgLabelComponent,
        NgIf,
        MockComponents(LgButtonComponent, LgIconComponent),
      ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useFactory: () => instance(errorStateMatcherMock),
        },
      ],
    }).compileComponents();
  }));

  function renderComponent({
    block = false,
    hasPrefix = false,
    hasSuffix = false,
    showLabel = true,
  }) {
    fixture = MockRender(`
      <lg-input-field [block]="${block}" [showLabel]="${showLabel}">
        Label
        <input lgInput />
        <lg-hint id="${hintId}">Hint</lg-hint>
        <lg-validation id="${errorId}">Error</lg-validation>
        ${hasPrefix && `<span lgPrefix id="${prefixId}">${prefixText}</span>`}
        ${hasSuffix && `<span lgSuffix id="${suffixId}">${suffixText}</span>`}
      </lg-input-field>
    `);

    component = fixture.point.componentInstance;
    fixture.detectChanges();

    inputFieldDebugElement = fixture.debugElement.query(
      By.directive(LgInputFieldComponent),
    );

    labelInstance = fixture.debugElement.query(
      By.directive(LgLabelComponent),
    ).componentInstance;

    inputDirectiveInstance = ngMocks.get(ngMocks.find('input'), LgInputDirective);

    inputWrapperDebugElement = fixture.debugElement.query(
      By.css('.lg-input-field__inputs'),
    );

    labelDebugElement = fixture.debugElement.query(By.directive(LgLabelComponent));
  }

  describe('markup', () => {
    beforeEach(() => {
      renderComponent({});
    });

    it('adds the for attribute to the label', () => {
      expect(labelInstance.for).toEqual(inputDirectiveInstance.id);
    });

    it('links the hint to the input field with the correct aria attributes', () => {
      expect(inputDirectiveInstance.ariaDescribedBy).toContain(hintId);
    });

    it('links the error to the input field with the correct aria attributes', () => {
      expect(inputDirectiveInstance.ariaDescribedBy).toContain(errorId);
    });

    it('combines both the hint and error ids to create the aria described attribute', () => {
      expect(inputDirectiveInstance.ariaDescribedBy).toBe(`${hintId} ${errorId}`);
    });
  });

  describe('showLabel', () => {
    it('doesn\'t add the visually hidden class if the showLabel property is true', () => {
      renderComponent({ showLabel: true });

      expect(labelDebugElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-visually-hidden',
      );
    });

    it('adds the visually hidden class if the showLabel property is false', () => {
      renderComponent({ showLabel: false });

      expect(labelDebugElement.nativeElement.getAttribute('class')).toContain(
        'lg-visually-hidden',
      );
    });
  });

  describe('block', () => {
    beforeEach(() => {
      renderComponent({ block: true });
    });

    it('sets the input element to block if block property is set', () => {
      expect(inputDirectiveInstance.block).toBe(true);
    });

    it('adds the input element block class if block property is set', () => {
      expect(inputFieldDebugElement.nativeElement.getAttribute('class')).toContain(
        'lg-input-field--block',
      );
    });
  });

  describe('focus', () => {
    beforeEach(() => {
      renderComponent({});
    });

    it('adds a focus class when the input is focused', () => {
      inputWrapperDebugElement.triggerEventHandler('focusin', {
        target: { nodeName: 'INPUT' },
      });

      fixture.detectChanges();

      expect(inputFieldDebugElement.nativeElement.getAttribute('class')).toContain(
        'lg-input-field--focus',
      );
    });

    it('does not add a focus class if a child other than the input itself is focused', () => {
      inputWrapperDebugElement.triggerEventHandler('focusin', {
        target: { nodeName: 'BUTTON' },
      });

      fixture.detectChanges();

      expect(inputFieldDebugElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-input-field--focus',
      );
    });

    it('removes a focus class when the input wrapper is focused out', () => {
      inputWrapperDebugElement.triggerEventHandler('focusin', {
        target: { nodeName: 'INPUT' },
      });

      fixture.detectChanges();

      expect(inputFieldDebugElement.nativeElement.getAttribute('class')).toContain(
        'lg-input-field--focus',
      );

      inputWrapperDebugElement.triggerEventHandler('focusout', {});
      fixture.detectChanges();

      expect(inputFieldDebugElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-input-field--focus',
      );
    });
  });

  describe('hover', () => {
    beforeEach(() => {
      renderComponent({});
      inputWrapperDebugElement.triggerEventHandler('mouseenter', {});
      fixture.detectChanges();
    });

    it('adds a hover class to the input wrapper when the input is moused over', () => {
      expect(inputFieldDebugElement.nativeElement.getAttribute('class')).toContain(
        'lg-input-field--hover',
      );
    });

    it('removes a hover class from the input wrapper when the input is moused out', () => {
      expect(inputFieldDebugElement.nativeElement.getAttribute('class')).toContain(
        'lg-input-field--hover',
      );

      inputWrapperDebugElement.triggerEventHandler('mouseleave', {});
      fixture.detectChanges();

      expect(inputFieldDebugElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-input-field--hover',
      );
    });
  });

  describe('error', () => {
    let componentSpy: LgInputFieldComponent;

    beforeEach(() => {
      renderComponent({});
      componentSpy = spy(component);
      fixture.detectChanges();
    });

    it('adds an error class to the input wrapper when the control is invalid', () => {
      when(componentSpy.errorClass).thenReturn(true);
      fixture.detectChanges();

      expect(inputFieldDebugElement.nativeElement.getAttribute('class')).toContain(
        'lg-input-field--error',
      );
    });

    it('does not add the error class to the input wrapper when the control is valid', () => {
      when(componentSpy.errorClass).thenReturn(false);
      fixture.detectChanges();

      expect(inputFieldDebugElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-input-field--error',
      );
    });
  });

  describe('suffixes', () => {
    beforeEach(() => {
      renderComponent({ hasSuffix: true });
    });

    it('renders the suffix into the suffix wrapper', () => {
      expect(inputWrapperDebugElement.nativeElement.innerText).toContain(suffixText);
    });

    it('links the hint to the input field with the correct aria attributes', () => {
      expect(inputDirectiveInstance.ariaDescribedBy).toContain(suffixId);
    });
  });

  describe('prefixes', () => {
    beforeEach(() => {
      renderComponent({ hasPrefix: true });
    });

    it('renders the prefix into the prefix wrapper', () => {
      expect(inputWrapperDebugElement.nativeElement.innerText).toContain(prefixText);
    });

    it('links the hint to the input field with the correct aria attributes', () => {
      expect(inputDirectiveInstance.ariaDescribedBy).toContain(prefixId);
    });
  });
});
