import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';

import { CanopyModule } from '../../canopy.module';
import { LgCheckboxComponent } from './checkbox.component';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <lg-checkbox formControlName="umbrella" value="yes" (change)="onChange()">
        I will bring my Umbrella if it is raining
      </lg-checkbox>
    </form>
  `
})
class TestCheckboxComponent {
  form = new FormGroup({
    umbrella: new FormControl(null)
  });
}

describe('LgCheckboxComponent', () => {
  let fixture: ComponentFixture<TestCheckboxComponent>;
  let component: TestCheckboxComponent;

  let checkboxDebugElement: DebugElement;
  let checkboxInstance: LgCheckboxComponent;

  let inputDebugElement: DebugElement;
  let inputLabelElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CanopyModule, ReactiveFormsModule],
      declarations: [TestCheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestCheckboxComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    checkboxDebugElement = fixture.debugElement.query(
      By.directive(LgCheckboxComponent)
    );

    checkboxInstance = checkboxDebugElement.injector.get<LgCheckboxComponent>(
      LgCheckboxComponent
    );

    inputDebugElement = fixture.debugElement.query(
      By.css('.lg-checkbox__input')
    );

    inputLabelElement = fixture.debugElement.query(
      By.css('.lg-checkbox__label')
    );
  }));

  it('sets a unique name for the checkbox button', () => {
    fixture.detectChanges();
    expect(
      /lg-checkbox-\d/.test(
        inputDebugElement.nativeElement.getAttribute('name')
      )
    ).toBe(true);
  });

  it('sets a unique id for the checkbox button', () => {
    fixture.detectChanges();
    expect(
      /lg-checkbox-\d/.test(inputDebugElement.nativeElement.getAttribute('id'))
    ).toBe(true);
  });

  it('links the label to the input field with the correct attributes', () => {
    const id = inputDebugElement.nativeElement.getAttribute('id');
    expect(id).toBeTruthy();
    expect(inputLabelElement.nativeElement.getAttribute('for')).toBe(id);
  });

  it('checks the checkbox by default if the value is true', () => {
    expect(inputDebugElement.nativeElement.checked).toBe(false);
    component.form.controls.umbrella.setValue('yes');
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.checked).toBe(true);
  });

  it('updates the model value when a checkbox is checked', () => {
    expect(component.form.controls.umbrella.value).toBe(null);
    fixture.detectChanges();
    inputDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.form.controls.umbrella.value).toBe('yes');
  });

  it('triggers the onChange action when the checkbox is checked', () => {
    const onChangeSpy = spyOn(checkboxInstance, 'onChange');
    inputDebugElement.triggerEventHandler('click', null);
    expect(onChangeSpy).toHaveBeenCalled();
  });
});
