import { Component, DebugElement, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';

import { CanopyModule } from '../../canopy.module';
import { LgCheckmarkComponent } from './checkmark.component';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <lg-checkmark
        formControlName="umbrella"
        value="yes"
        (change)="onChange()"
        [variant]="variant"
      >
        I will bring my Umbrella if it is raining
      </lg-checkmark>
    </form>
  `
})
class TestCheckmarkComponent {
  @Input() variant: 'checkbox' | 'switch';

  form = new FormGroup({
    umbrella: new FormControl(null)
  });
}

describe('LgCheckmarkComponent', () => {
  let fixture: ComponentFixture<TestCheckmarkComponent>;
  let component: TestCheckmarkComponent;

  let checkmarkDebugElement: DebugElement;
  let checkmarkInstance: LgCheckmarkComponent;

  let inputDebugElement: DebugElement;
  let inputLabelElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CanopyModule, ReactiveFormsModule],
      declarations: [TestCheckmarkComponent]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestCheckmarkComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    checkmarkDebugElement = fixture.debugElement.query(
      By.directive(LgCheckmarkComponent)
    );

    checkmarkInstance = checkmarkDebugElement.injector.get<
      LgCheckmarkComponent
    >(LgCheckmarkComponent);

    inputDebugElement = fixture.debugElement.query(
      By.css('.lg-checkmark__input')
    );

    inputLabelElement = fixture.debugElement.query(
      By.css('.lg-checkmark__label')
    );
  }));

  it('sets a unique name for the checkmark button', () => {
    fixture.detectChanges();
    expect(
      /lg-checkmark-\d/.test(
        inputDebugElement.nativeElement.getAttribute('name')
      )
    ).toBe(true);
  });

  it('sets a unique id for the checkmark button', () => {
    fixture.detectChanges();
    expect(
      /lg-checkmark-\d/.test(inputDebugElement.nativeElement.getAttribute('id'))
    ).toBe(true);
  });

  it('sets the correct modifier class based on the variant', () => {
    component.variant = 'checkbox';
    fixture.detectChanges();

    expect(
      inputLabelElement.nativeElement.classList.contains(
        'lg-checkmark__label--switch'
      )
    ).toBe(false);

    component.variant = 'switch';
    fixture.detectChanges();

    expect(
      inputLabelElement.nativeElement.classList.contains(
        'lg-checkmark__label--switch'
      )
    ).toBe(true);
  });

  it('links the label to the input field with the correct attributes', () => {
    const id = inputDebugElement.nativeElement.getAttribute('id');
    expect(id).toBeTruthy();
    expect(inputLabelElement.nativeElement.getAttribute('for')).toBe(id);
  });

  it('checks the checkmark by default if the value is true', () => {
    expect(inputDebugElement.nativeElement.checked).toBe(false);
    component.form.controls.umbrella.setValue('yes');
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.checked).toBe(true);
  });

  it('updates the model value when a checkmark is checked', () => {
    expect(component.form.controls.umbrella.value).toBe(null);
    fixture.detectChanges();
    inputDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.form.controls.umbrella.value).toBe('yes');
  });

  it('triggers the onChange action when the checkmark is checked', () => {
    const onChangeSpy = spyOn(checkmarkInstance, 'onChange');
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
