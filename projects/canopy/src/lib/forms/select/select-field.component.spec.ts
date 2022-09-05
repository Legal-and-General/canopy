import { DebugElement } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import {
  MockComponents,
  MockDirectives,
  MockedComponentFixture,
  MockRender,
  ngMocks,
} from 'ng-mocks';
import { anything, instance, mock, when } from '@typestrong/ts-mockito/ts-mockito';

import { LgIconComponent } from '../../icon/icon.component';
import { LgHintComponent } from '../hint';
import { LgLabelComponent } from '../label';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';

import { LgSelectFieldComponent } from './select-field.component';
import { LgSelectDirective } from './select.directive';

describe('LgSelectFieldComponent', () => {
  let fixture: MockedComponentFixture<LgSelectFieldComponent>;
  let labelInstance: LgLabelComponent;
  let selectDirectiveInstance: LgSelectDirective;
  let selectFieldDebugElement: DebugElement;

  const errorId = 'test-error-id';
  const hintId = 'test-hint-id';

  const errorStateMatcherMock = mock(LgErrorStateMatcher);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        LgSelectFieldComponent,
        MockComponents(
          LgValidationComponent,
          LgLabelComponent,
          LgIconComponent,
          LgHintComponent,
        ),
        MockDirectives(LgSelectDirective),
      ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useFactory: () => instance(errorStateMatcherMock),
        },
      ],
    }).compileComponents();
  }));

  function renderComponent({ block } = { block: false }) {
    fixture = MockRender(`
      <lg-select-field [block]="${block}">
        Label
        <select lgSelect>
          <option value="red">Red</option>
        </select>
        <lg-hint id="${hintId}">Hint</lg-hint>
        <lg-validation id="${errorId}">Error</lg-validation>
      </lg-select-field>
    `);

    fixture.detectChanges();

    selectFieldDebugElement = fixture.debugElement.query(
      By.directive(LgSelectFieldComponent),
    );

    labelInstance = fixture.debugElement.query(
      By.directive(LgLabelComponent),
    ).componentInstance;

    selectDirectiveInstance = ngMocks.get(ngMocks.find('select'), LgSelectDirective);
  }

  it('adds the for attribute to the label', () => {
    renderComponent();

    expect(labelInstance.for).toEqual(selectDirectiveInstance.id);
  });

  it('links the hint to the input field with the correct aria attributes', () => {
    renderComponent();

    expect(selectDirectiveInstance.ariaDescribedBy).toContain(hintId);
  });

  it('links the error to the input field with the correct aria attributes', () => {
    renderComponent();

    expect(selectDirectiveInstance.ariaDescribedBy).toContain(errorId);
  });

  it('combines both the hint and error ids to create the aria described attribute', () => {
    renderComponent();

    expect(selectDirectiveInstance.ariaDescribedBy).toBe(`${hintId} ${errorId}`);
  });

  it('sets the input element to block if block property is set', () => {
    renderComponent({ block: true });

    expect(selectDirectiveInstance.block).toBe(true);
  });

  it('adds the error class to the select field when the input field is invalid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    renderComponent();

    expect(selectFieldDebugElement.nativeElement.className).toContain(
      'lg-select-field--error',
    );
  });

  it('does not add the error class to the select field when the input field is valid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
      false,
    );

    renderComponent();

    expect(selectFieldDebugElement.nativeElement.className).not.toContain(
      'lg-select-field--error',
    );
  });
});
