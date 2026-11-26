import { DebugElement } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import {
  FormControl,
  UntypedFormControl,
  UntypedFormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgErrorStateMatcher } from '../validation';

import { LgInputDirective } from './input.directive';

describe('LgInputDirective', () => {
  let fixture: MockedComponentFixture;
  let form: UntypedFormGroup;
  let inputDebugElement: DebugElement;
  let inputInstance: LgInputDirective;
  let errorStateMatcherMock: jest.Mocked<LgErrorStateMatcher>;

  beforeEach(waitForAsync(() => {
    errorStateMatcherMock = {
      isControlInvalid: jest.fn().mockReturnValue(false),
    } as unknown as jest.Mocked<LgErrorStateMatcher>;

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, LgInputDirective ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useValue: errorStateMatcherMock,
        },
      ],
    }).compileComponents();

    form = new UntypedFormGroup({
      name: new UntypedFormControl('', [ Validators.required ]),
    });

    fixture = MockRender(
      `
        <form (ngSubmit)="login()" [formGroup]="form">
          <input lgInput formControlName="name" />
        </form>
      `,
      { form, login: jest.fn() },
    );

    inputDebugElement = fixture.debugElement.query(By.directive(LgInputDirective));

    inputInstance = inputDebugElement.injector.get<LgInputDirective>(LgInputDirective);
  }));

  it('adds a unique name', () => {
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.name).toContain('lg-input-');
  });

  it('adds a unique id', () => {
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.id).toContain('lg-input-');
  });

  it('name matches id by default', () => {
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.name).toBe(inputDebugElement.nativeElement.id);
  });

  it('name follows id when id is overridden', () => {
    inputInstance.id = 'custom-id';
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.name).toBe('custom-id');
  });

  it('name can be set independently of id', () => {
    inputInstance.id = 'custom-id';
    inputInstance.name = 'custom-name';
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.name).toBe('custom-name');
  });

  it('adds a block class when the block property is set', () => {
    inputInstance.block = true;
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.className).toContain('lg-input--block');
  });

  it('sets and removes the native disabled state through the directive input', () => {
    const state = { disabled: false };
    const standaloneFixture = MockRender(
      '<input lgInput [disabled]="state.disabled" />',
      { state },
    );
    const input: HTMLInputElement =
      standaloneFixture.nativeElement.querySelector('input');

    state.disabled = true;
    standaloneFixture.detectChanges();

    expect(input.disabled).toBe(true);

    state.disabled = false;
    standaloneFixture.detectChanges();

    expect(input.hasAttribute('disabled')).toBe(false);
    expect(input.disabled).toBe(false);
  });

  it('preserves an initially disabled form control in the native input', () => {
    form.controls.name.disable();
    fixture.detectChanges();

    expect(inputInstance.disabled).toBe(false);
    expect(inputDebugElement.nativeElement.disabled).toBe(true);
  });

  describe('an initially disabled reactive input', () => {
    let reactiveFixture: MockedComponentFixture;
    let control: FormControl;
    let inputEl: HTMLInputElement;

    beforeEach(() => {
      control = new FormControl({ value: '', disabled: true });

      reactiveFixture = MockRender('<input lgInput [formControl]="control" />', {
        control,
      });

      inputEl = reactiveFixture.nativeElement.querySelector('input');
    });

    it('sets the native disabled attribute when the form control is disabled before first render', () => {
      reactiveFixture.detectChanges();

      expect(inputEl.disabled).toBe(true);
      expect(inputEl.hasAttribute('disabled')).toBe(true);
    });

    it('removes the native disabled attribute when the form control is re-enabled', () => {
      reactiveFixture.detectChanges();
      control.enable();
      reactiveFixture.detectChanges();

      expect(inputEl.disabled).toBe(false);
      expect(inputEl.hasAttribute('disabled')).toBe(false);
    });
  });

  it('still honours the disabled input without a form control', () => {
    const state = { disabled: true };
    const standaloneFixture = MockRender(
      '<input lgInput [disabled]="state.disabled" />',
      { state },
    );
    const inputEl: HTMLInputElement =
      standaloneFixture.nativeElement.querySelector('input');

    standaloneFixture.detectChanges();

    expect(inputEl.hasAttribute('disabled')).toBe(true);
  });

  it('keeps the native input disabled when the directive input is reset', () => {
    form.controls.name.disable();
    inputInstance.disabled = true;
    fixture.detectChanges();

    inputInstance.disabled = false;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.disabled).toBe(true);
  });

  it('adds an error class when the field has a validation error', () => {
    errorStateMatcherMock.isControlInvalid.mockReturnValue(true);
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.className).toContain('lg-input--error');
  });

  it('removes the error class when the field is valid', () => {
    form.get('name').setValue('test');
    form.get('name').markAsTouched();

    expect(inputDebugElement.nativeElement.className).not.toContain('lg-input--error');
  });
});
