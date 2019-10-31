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
import { LgInputDirective } from '../input/input.directive';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <input lgInput formControlName="name" />
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestInputComponent {
  form = new FormGroup({
    name: new FormControl('')
  });
}

describe('LgInputDirective', () => {
  let fixture: ComponentFixture<TestInputComponent>;
  let component: TestInputComponent;
  let inputDebugElement: DebugElement;
  let inputInstance: LgInputDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LgFormsModule, FormsModule, ReactiveFormsModule],
      declarations: [TestInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestInputComponent);
    component = fixture.componentInstance;

    inputDebugElement = fixture.debugElement.query(
      By.directive(LgInputDirective)
    );

    inputInstance = inputDebugElement.injector.get<LgInputDirective>(
      LgInputDirective
    );
  }));

  it('adds a unique name', () => {
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.name).toContain('lg-input-');
  });

  it('adds a unique id', () => {
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.id).toContain('lg-input-');
  });
});
