import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MockComponents, MockRender } from 'ng-mocks';

import { LgHintComponent } from '../hint';
import { LgInputFieldComponent } from '../input/input-field.component';
import { LgLabelComponent } from '../label';
import { LgValidationComponent } from '../validation/validation.component';
import { LgInputDirective } from './input.directive';

describe('LgInputFieldComponent', () => {
  let fixture: ComponentFixture<LgInputFieldComponent>;
  let labelInstance: LgLabelComponent;
  let inputDirectiveInstance: LgInputDirective;

  const errorId = 'test-error-id';
  const hintId = 'test-hint-id';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        LgInputFieldComponent,
        MockComponents(
          LgInputDirective,
          LgValidationComponent,
          LgLabelComponent,
          LgHintComponent,
        ),
      ],
    }).compileComponents();
  }));

  function renderComponent({ block } = { block: false }) {
    fixture = MockRender(`
      <lg-input-field [block]="${block}">
        Label
        <input lgInput />
        <lg-hint id="${hintId}">Hint</lg-hint>
        <lg-validation id="${errorId}">Error</lg-validation>
      </lg-input-field>
    `);
    fixture.detectChanges();

    labelInstance = fixture.debugElement.query(By.directive(LgLabelComponent))
      .componentInstance;

    inputDirectiveInstance = fixture.debugElement.query(
      By.directive(LgInputDirective),
    ).componentInstance;
  }

  it('adds the for attribute to the label', () => {
    renderComponent();
    expect(labelInstance.for).toEqual(inputDirectiveInstance.id);
  });

  it('links the hint to the input field with the correct aria attributes', () => {
    renderComponent();
    expect(inputDirectiveInstance.ariaDescribedBy).toContain(hintId);
  });

  it('links the error to the input field with the correct aria attributes', () => {
    renderComponent();
    expect(inputDirectiveInstance.ariaDescribedBy).toContain(errorId);
  });

  it('combines both the hint and error ids to create the aria described attribute', () => {
    renderComponent();
    expect(inputDirectiveInstance.ariaDescribedBy).toBe(`${hintId} ${errorId}`);
  });

  it('sets the input element to block if block property is set', () => {
    renderComponent({ block: true });
    expect(inputDirectiveInstance.block).toBe(true);
  });
});
