import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { anything, instance, mock, when } from 'ts-mockito';

import { LgInputDirective } from '../input/input.directive';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <input lgInput formControlName="name" />
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestInputComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
}

describe('LgInputDirective', () => {
  let fixture: ComponentFixture<TestInputComponent>;
  let component: TestInputComponent;
  let inputDebugElement: DebugElement;
  let inputInstance: LgInputDirective;
  const errorStateMatcherMock = mock(LgErrorStateMatcher);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, ReactiveFormsModule],
        declarations: [LgInputDirective, TestInputComponent],
        providers: [
          {
            provide: LgErrorStateMatcher,
            useFactory: () => instance(errorStateMatcherMock),
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(TestInputComponent);
      component = fixture.componentInstance;

      inputDebugElement = fixture.debugElement.query(By.directive(LgInputDirective));

      inputInstance = inputDebugElement.injector.get<LgInputDirective>(LgInputDirective);
    }),
  );

  it('adds a unique name', () => {
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.name).toContain('lg-input-');
  });

  it('adds a unique id', () => {
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.id).toContain('lg-input-');
  });

  it('adds a block class when the block property is set', () => {
    inputInstance.block = true;
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.className).toContain('lg-input--block');
  });

  it('adds an error class when the field has a validation error', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.className).toContain('lg-input--error');
  });

  it('removes the error class when the field is valid', () => {
    component.form.get('name').setValue('test');
    component.form.get('name').markAsTouched();
    expect(inputDebugElement.nativeElement.className).not.toContain('lg-input--error');
  });
});
