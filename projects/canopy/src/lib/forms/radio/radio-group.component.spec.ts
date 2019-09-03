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
import { LgLabelDirective } from '../label';
import { LgRadioButtonComponent } from './radio-button.component';
import { LgRadioGroupComponent } from './radio-group.component';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <lg-radio-group formControlName="color">
        <label lgLabel>Color</label>
        <lg-radio-button value="red">Red</lg-radio-button>
        <lg-radio-button value="yellow">Yellow</lg-radio-button>
        <lg-radio-button value="blue">Blue</lg-radio-button>
      </lg-radio-group>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestRadioGroupComponent {
  form = new FormGroup({
    color: new FormControl('red')
  });
}

describe('LgRadioGroupComponent', () => {
  let fixture: ComponentFixture<TestRadioGroupComponent>;
  let groupDebugElement: DebugElement;
  let labelDebugElement: DebugElement;
  let radioDebugElements: DebugElement[];

  let labelInstance: LgLabelDirective;
  let groupInstance: LgRadioGroupComponent;
  let radioInstances: LgRadioButtonComponent[];
  let component: TestRadioGroupComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LgFormsModule, FormsModule, ReactiveFormsModule],
      declarations: [TestRadioGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestRadioGroupComponent);
    component = fixture.componentInstance;

    groupDebugElement = fixture.debugElement.query(
      By.directive(LgRadioGroupComponent)
    );
    groupInstance = groupDebugElement.injector.get<LgRadioGroupComponent>(
      LgRadioGroupComponent
    );

    labelDebugElement = fixture.debugElement.query(
      By.directive(LgLabelDirective)
    );
    labelInstance = labelDebugElement.injector.get<LgLabelDirective>(
      LgLabelDirective
    );

    radioDebugElements = fixture.debugElement.queryAll(
      By.css('[type="radio"]')
    );
    radioInstances = radioDebugElements.map(
      debugEl => debugEl.componentInstance
    );
  }));

  it('sets all radio buttons to the same name', () => {
    fixture.detectChanges();
    expect(groupInstance.name).toBeTruthy();
    const name = radioInstances.pop().name;
    for (const radio of radioInstances) {
      expect(radio.name).toBe(name);
    }
  });

  it('checks the selected radio button when a value is provided', () => {
    fixture.detectChanges();
    const selectedRadioElement = fixture.debugElement.query(
      By.css('[value="red"]')
    );
    const selectedRadioInstance = selectedRadioElement.injector.get<
      LgRadioButtonComponent
    >(LgRadioButtonComponent);
    expect(selectedRadioInstance.checked).toBe(true);
  });

  it('sets unique ids on all the radio buttons', () => {
    fixture.detectChanges();
    const radioIds = radioInstances.map(({ id }) => id);
    expect(new Set(radioIds).size).toBe(radioIds.length);
    for (const id of radioIds) {
      expect(id).toBeTruthy();
    }
  });

  it('marks the selected radio when the value is changed', () => {
    groupInstance.value = 'red';
    fixture.detectChanges();
    const selected = radioInstances.find(radio => radio.value === 'red');
    expect(selected.checked).toBeTruthy();
    const notSelected = radioInstances.filter(radio => radio.value !== 'red');
    for (const radio of notSelected) {
      expect(radio.checked).toBeFalsy();
    }
  });

  it('updates the model value when a radio option is checked', () => {
    expect(component.form.controls.color.value).toBe('red');
    fixture.detectChanges();
    radioDebugElements[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.form.controls.color.value).toBe('yellow');
  });

  it('sets the group label in an accessible way ', () => {
    fixture.detectChanges();
    expect(groupInstance.ariaLabelledBy).toBeTruthy();
    expect(groupInstance.ariaLabelledBy).toEqual(labelInstance.id);
  });
});
