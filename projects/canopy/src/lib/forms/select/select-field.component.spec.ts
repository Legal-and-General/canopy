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
import { LgLabelComponent } from '../label';
import { LgSelectFieldComponent } from './select-field.component';
import { LgSelectDirective } from './select.directive';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <lg-select-field [block]="block">
        Color
        <lg-hint>Pick a color</lg-hint>
        <select lgSelect>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </lg-select-field>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestSelectComponent {
  @Input() block: boolean;

  form = new FormGroup({
    name: new FormControl('')
  });
}

describe('LgSelectFieldComponent', () => {
  let fixture: ComponentFixture<TestSelectComponent>;
  let component: TestSelectComponent;
  let selectFieldDebugElement: DebugElement;
  let labelDebugElement: DebugElement;
  let selectDebugElement: DebugElement;
  let hintDebugElement: DebugElement;
  let wrapperDebugElement: DebugElement;
  let selectDebugInstance: LgSelectFieldComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CanopyModule, FormsModule, ReactiveFormsModule],
      declarations: [TestSelectComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestSelectComponent);
    component = fixture.componentInstance;

    selectFieldDebugElement = fixture.debugElement.query(
      By.directive(LgSelectFieldComponent)
    );

    selectDebugElement = fixture.debugElement.query(
      By.directive(LgSelectDirective)
    );

    selectDebugInstance = selectFieldDebugElement.componentInstance;

    labelDebugElement = fixture.debugElement.query(
      By.directive(LgLabelComponent)
    );

    hintDebugElement = fixture.debugElement.query(
      By.directive(LgHintComponent)
    );

    wrapperDebugElement = fixture.debugElement.query(
      By.css('.lg-select__wrapper')
    );
  }));

  it('adds appropriate for attribute to the label', () => {
    fixture.detectChanges();
    expect(labelDebugElement.nativeElement.getAttribute('for')).toEqual(
      selectDebugElement.nativeElement.getAttribute('id')
    );
  });

  it('adds a unique id', () => {
    fixture.detectChanges();
    expect(selectDebugElement.nativeElement.getAttribute('id')).toContain(
      'lg-select-'
    );
  });

  it('adds the select field class to the lgSelect directive', () => {
    fixture.detectChanges();
    const className = selectDebugElement.nativeElement.getAttribute('class');
    expect(className).toContain('lg-select__field');
  });

  it('adds the block modifier to the wrapper class', () => {
    component.block = true;
    fixture.detectChanges();
    const className = wrapperDebugElement.nativeElement.getAttribute('class');
    expect(className).toContain('lg-select__wrapper--block');
  });

  it('links the hint to the input field with the correct aria attributes', () => {
    fixture.detectChanges();
    const id = hintDebugElement.nativeElement.getAttribute('id');
    expect(id).toBeTruthy();
    expect(
      selectDebugElement.nativeElement.getAttribute('aria-describedby')
    ).toBe(id);
  });
});
