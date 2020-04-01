import { Component, DebugElement, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';

import { CanopyModule } from '../../canopy.module';
import { LgToggleComponent } from './toggle.component';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <lg-toggle
        formControlName="umbrella"
        [value]="true"
        (change)="onChange()"
        [variant]="variant"
      >
        I will bring my Umbrella if it is raining
      </lg-toggle>
    </form>
  `
})
class TestToggleComponent {
  @Input() variant: 'checkbox' | 'switch';

  form = new FormGroup({
    umbrella: new FormControl(null)
  });
}

describe('LgToggleComponent', () => {
  let fixture: ComponentFixture<TestToggleComponent>;
  let component: TestToggleComponent;

  let toggleDebugElement: DebugElement;
  let toggleInstance: LgToggleComponent;

  let inputDebugElement: DebugElement;
  let inputLabelElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CanopyModule, ReactiveFormsModule],
      declarations: [TestToggleComponent]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestToggleComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    toggleDebugElement = fixture.debugElement.query(
      By.directive(LgToggleComponent)
    );

    toggleInstance = toggleDebugElement.injector.get<LgToggleComponent>(
      LgToggleComponent
    );

    inputDebugElement = fixture.debugElement.query(By.css('.lg-toggle__input'));

    inputLabelElement = fixture.debugElement.query(By.css('.lg-toggle__label'));
  }));

  it('sets a unique name for the toggle button', () => {
    fixture.detectChanges();
    expect(
      /lg-toggle-\d/.test(inputDebugElement.nativeElement.getAttribute('name'))
    ).toBe(true);
  });

  it('sets a unique id for the toggle button', () => {
    fixture.detectChanges();
    expect(
      /lg-toggle-\d/.test(inputDebugElement.nativeElement.getAttribute('id'))
    ).toBe(true);
  });

  it('sets the correct modifier class based on the variant', () => {
    component.variant = 'checkbox';
    fixture.detectChanges();

    expect(
      inputLabelElement.nativeElement.classList.contains(
        'lg-toggle__label--switch'
      )
    ).toBe(false);

    component.variant = 'switch';
    fixture.detectChanges();

    expect(
      inputLabelElement.nativeElement.classList.contains(
        'lg-toggle__label--switch'
      )
    ).toBe(true);
  });

  it('links the label to the input field with the correct attributes', () => {
    const id = inputDebugElement.nativeElement.getAttribute('id');
    expect(id).toBeTruthy();
    expect(inputLabelElement.nativeElement.getAttribute('for')).toBe(id);
  });

  it('checks the toggle by default if the value is true', () => {
    expect(inputDebugElement.nativeElement.checked).toBe(false);
    component.umbrella.setValue(true);
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.checked).toBe(true);
  });

  it('updates the model value when a toggle is checked', () => {
    expect(component.umbrella.value).toBe(null);
    fixture.detectChanges();
    inputDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.umbrella.value).toBe(true);
  });

  it('triggers the onChange action when the toggle is checked', () => {
    const onChangeSpy = spyOn(toggleInstance, 'onChange');
    inputDebugElement.triggerEventHandler('click', null);
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('disables the input field when the property is set', () => {
    expect(inputDebugElement.nativeElement.disabled).toBe(false);
    component.form.controls.umbrella.disable();
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.disabled).toBe(true);
  });
});
