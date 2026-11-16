import { ChangeDetectionStrategy, Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  FormControl,
  UntypedFormControl,
  UntypedFormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LgErrorStateMatcher } from '../validation';

import { LgInputDirective } from './input.directive';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <input lgInput formControlName="name" />
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ FormsModule, ReactiveFormsModule, LgInputDirective ],
})
class TestInputComponent {
  form = new UntypedFormGroup({
    name: new UntypedFormControl('', [ Validators.required ]),
  });
}

@Component({
  template: '<input lgInput [disabled]="disabled" />',
  imports: [ LgInputDirective ],
})
class StandaloneInputTestComponent {
  @Input() disabled = false;
}

@Component({
  template: '<input lgInput [formControl]="control" />',
  imports: [ ReactiveFormsModule, LgInputDirective ],
})
class DisabledReactiveInputTestComponent {
  control = new FormControl({ value: '', disabled: true });
}

describe('LgInputDirective', () => {
  let fixture: ComponentFixture<TestInputComponent>;
  let component: TestInputComponent;
  let inputDebugElement: DebugElement;
  let inputInstance: LgInputDirective;
  let errorStateMatcherMock: Mocked<LgErrorStateMatcher>;

  beforeEach(waitForAsync(() => {
    errorStateMatcherMock = {
      isControlInvalid: vi.fn().mockReturnValue(false),
    };

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, LgInputDirective, TestInputComponent ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useValue: errorStateMatcherMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestInputComponent);
    component = fixture.componentInstance;

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
    const standaloneFixture = TestBed.createComponent(StandaloneInputTestComponent);
    const input: HTMLInputElement =
      standaloneFixture.nativeElement.querySelector('input');

    standaloneFixture.componentRef.setInput('disabled', true);
    standaloneFixture.detectChanges();

    expect(input.disabled).toBe(true);

    standaloneFixture.componentRef.setInput('disabled', false);
    standaloneFixture.detectChanges();

    expect(input.hasAttribute('disabled')).toBe(false);
    expect(input.disabled).toBe(false);
  });

  it('preserves an initially disabled form control in the native input', () => {
    component.form.controls.name.disable();
    fixture.detectChanges();

    expect(inputInstance.disabled).toBe(false);
    expect(inputDebugElement.nativeElement.disabled).toBe(true);
  });

  describe('an initially disabled reactive input', () => {
    let reactiveFixture: ComponentFixture<DisabledReactiveInputTestComponent>;
    let control: FormControl;
    let inputEl: HTMLInputElement;

    beforeEach(() => {
      reactiveFixture = TestBed.createComponent(DisabledReactiveInputTestComponent);
      control = reactiveFixture.componentInstance.control;
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
    const standaloneFixture = TestBed.createComponent(StandaloneInputTestComponent);
    const inputEl: HTMLInputElement =
      standaloneFixture.nativeElement.querySelector('input');

    standaloneFixture.componentRef.setInput('disabled', true);
    standaloneFixture.detectChanges();

    expect(inputEl.hasAttribute('disabled')).toBe(true);
  });

  it('keeps the native input disabled when the directive input is reset', () => {
    component.form.controls.name.disable();
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
    component.form.get('name').setValue('test');
    component.form.get('name').markAsTouched();

    expect(inputDebugElement.nativeElement.className).not.toContain('lg-input--error');
  });
});
