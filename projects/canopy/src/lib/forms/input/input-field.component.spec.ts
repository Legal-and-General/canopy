import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  Input
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CanopyModule } from '../../canopy.module';
import { LgHintComponent } from '../hint';
import { LgInputFieldComponent } from '../input/input-field.component';
import { LgLabelComponent } from '../label';
import { LgInputDirective } from './input.directive';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <lg-input-field [block]="block">
        Name
        <lg-hint>Full name including surname</lg-hint>
        <input lgInput formControlName="name" />
      </lg-input-field>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestInputComponent {
  @Input() block: boolean;

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
  let hintDebugElement: DebugElement;
  let inputDebugInstance: LgInputFieldComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CanopyModule, FormsModule, ReactiveFormsModule],
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

    labelDebugElement = fixture.debugElement.query(
      By.directive(LgLabelComponent)
    );

    hintDebugElement = fixture.debugElement.query(
      By.directive(LgHintComponent)
    );
  }));

  it('adds appropriate for attribute to the label', () => {
    fixture.detectChanges();
    expect(labelDebugElement.nativeElement.getAttribute('for')).toEqual(
      inputDebugElement.nativeElement.getAttribute('id')
    );
  });

  it('adds a unique id', () => {
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.getAttribute('id')).toContain(
      'lg-input-'
    );
  });

  it('adds the block property to the input field', () => {
    component.block = true;
    fixture.detectChanges();
    expect(inputDebugElement.componentInstance.block).toEqual(true);
  });

  it('links the hint to the input field with the correct aria attributes', () => {
    fixture.detectChanges();
    const id = hintDebugElement.nativeElement.getAttribute('id');
    expect(id).toBeTruthy();
    expect(
      inputDebugElement.nativeElement.getAttribute('aria-describedby')
    ).toBe(id);
  });
});
