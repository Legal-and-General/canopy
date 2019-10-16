import {
  ChangeDetectionStrategy,
  Component,
  DebugElement
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LgFormsModule } from '../forms.module';
import { LgInputFieldComponent } from '../input/input-field.component';
import { LgInputDirective } from './input.directive';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <lg-input-field>
        Name
        <input lgInput formControlName="name" />
      </lg-input-field>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestInputComponent {
  form = new FormGroup({
    name: new FormControl('')
  });
}

describe('LgInputFieldComponent', () => {
  let fixture: ComponentFixture<TestInputComponent>;
  let component: TestInputComponent;
  let inputFieldDebugElement: DebugElement;
  let labelDebugElement: DebugElement;
  let inputDebugElement: DebugElement;
  let inputDebugInstance: LgInputFieldComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LgFormsModule, FormsModule, ReactiveFormsModule],
      declarations: [TestInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestInputComponent);
    component = fixture.componentInstance;

    inputFieldDebugElement = fixture.debugElement.query(
      By.directive(LgInputFieldComponent)
    );

    inputDebugElement = fixture.debugElement.query(
      By.directive(LgInputDirective)
    );

    inputDebugInstance = inputFieldDebugElement.componentInstance;

    labelDebugElement = fixture.debugElement.query(By.css('label'));
  }));

  it('adds appropriate for attribute to the label', () => {
    fixture.detectChanges();
    expect(inputDebugInstance.labelElement.for).toBeTruthy();
    expect(inputDebugInstance.labelElement.for).toEqual(
      inputDebugInstance.inputElement.id
    );
  });

  it('adds a unique id', () => {
    fixture.detectChanges();
    expect(inputDebugInstance.inputElement.id).toContain('lg-input-');
  });
});
