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

import { LgSelectDirective } from '../select/select.directive';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <select lgSelect formControlName="name">
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestSelectComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
}

describe('LgSelectDirective', () => {
  let fixture: ComponentFixture<TestSelectComponent>;
  let component: TestSelectComponent;
  let selectDebugElement: DebugElement;
  const errorStateMatcherMock = mock(LgErrorStateMatcher);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, ReactiveFormsModule],
        declarations: [LgSelectDirective, TestSelectComponent],
        providers: [
          {
            provide: LgErrorStateMatcher,
            useFactory: () => instance(errorStateMatcherMock),
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(TestSelectComponent);
      component = fixture.componentInstance;

      selectDebugElement = fixture.debugElement.query(By.directive(LgSelectDirective));
    }),
  );

  it('adds a unique name', () => {
    fixture.detectChanges();
    expect(selectDebugElement.nativeElement.name).toContain('lg-select-');
  });

  it('adds a unique id', () => {
    fixture.detectChanges();
    expect(selectDebugElement.nativeElement.id).toContain('lg-select-');
  });

  it('adds an error class when the field has a validation error', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(true);
    fixture.detectChanges();
    expect(selectDebugElement.nativeElement.className).toContain('lg-select--error');
  });

  it('removes the error class when the field is valid', () => {
    component.form.get('name').setValue('test');
    component.form.get('name').markAsTouched();
    expect(selectDebugElement.nativeElement.className).not.toContain('lg-input--error');
  });
});
