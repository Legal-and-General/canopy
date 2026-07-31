import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  UntypedFormControl,
  UntypedFormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { keyName } from '../../utils/keyboard-keys';
import { LgErrorStateMatcher } from '../validation';

import { LgSelectDirective } from './select.directive';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <input id="before-select" />
      <select lgSelect formControlName="name">
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select>
      <input id="after-select" />
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ FormsModule, ReactiveFormsModule, LgSelectDirective ],
})
class TestSelectComponent {
  form = new UntypedFormGroup({
    name: new UntypedFormControl('', [ Validators.required ]),
  });

  login() {}
}

describe('LgSelectDirective', () => {
  let fixture: ComponentFixture<TestSelectComponent>;
  let component: TestSelectComponent;
  let selectDebugElement: DebugElement;
  let beforeInput: HTMLInputElement;
  let afterInput: HTMLInputElement;
  let errorStateMatcherMock: jest.Mocked<LgErrorStateMatcher>;

  beforeEach(waitForAsync(() => {
    errorStateMatcherMock = {
      isControlInvalid: jest.fn(),
    } as unknown as jest.Mocked<LgErrorStateMatcher>;

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, LgSelectDirective, TestSelectComponent ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useValue: errorStateMatcherMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestSelectComponent);
    component = fixture.componentInstance;

    selectDebugElement = fixture.debugElement.query(By.directive(LgSelectDirective));
    beforeInput = fixture.debugElement.query(By.css('#before-select')).nativeElement;
    afterInput = fixture.debugElement.query(By.css('#after-select')).nativeElement;
  }));

  it('adds a unique name', () => {
    fixture.detectChanges();

    expect(selectDebugElement.nativeElement.name).toContain('lg-select-');
  });

  it('adds a unique id', () => {
    fixture.detectChanges();

    expect(selectDebugElement.nativeElement.id).toContain('lg-select-');
  });

  it('name matches id by default', () => {
    fixture.detectChanges();

    expect(selectDebugElement.nativeElement.name).toBe(
      selectDebugElement.nativeElement.id,
    );
  });

  it('name follows id when id is overridden', () => {
    const selectInstance =
      selectDebugElement.injector.get<LgSelectDirective>(LgSelectDirective);

    selectInstance.id = 'custom-id';
    fixture.detectChanges();

    expect(selectDebugElement.nativeElement.name).toBe('custom-id');
  });

  it('name can be set independently of id', () => {
    const selectInstance =
      selectDebugElement.injector.get<LgSelectDirective>(LgSelectDirective);

    selectInstance.id = 'custom-id';
    selectInstance.name = 'custom-name';
    fixture.detectChanges();

    expect(selectDebugElement.nativeElement.name).toBe('custom-name');
  });

  it('adds an error class when the field has a validation error', () => {
    errorStateMatcherMock.isControlInvalid.mockReturnValue(true);
    fixture.detectChanges();

    expect(selectDebugElement.nativeElement.className).toContain('lg-select--error');
  });

  it('removes the error class when the field is valid', () => {
    component.form.get('name').setValue('test');
    component.form.get('name').markAsTouched();

    expect(selectDebugElement.nativeElement.className).not.toContain('lg-input--error');
  });

  it('blurs the select and moves focus to next control on tab', async () => {
    fixture.detectChanges();
    const selectElement = selectDebugElement.nativeElement as HTMLSelectElement;
    const blurSpy = jest.spyOn(selectElement, 'blur');
    const nextFocusSpy = jest.spyOn(afterInput, 'focus');
    const event = new KeyboardEvent('keydown', {
      cancelable: true,
      key: keyName.KEY_TAB,
    });

    selectDebugElement.triggerEventHandler('keydown', event);

    await fixture.whenStable();
    await new Promise(resolve => setTimeout(resolve));

    expect(blurSpy).toHaveBeenCalledTimes(1);
    expect(nextFocusSpy).toHaveBeenCalledTimes(1);
    expect(event.defaultPrevented).toBe(false);
  });

  it('blurs the select and moves focus to previous control on shift+tab', async () => {
    fixture.detectChanges();
    const selectElement = selectDebugElement.nativeElement as HTMLSelectElement;
    const blurSpy = jest.spyOn(selectElement, 'blur');
    const previousFocusSpy = jest.spyOn(beforeInput, 'focus');
    const event = new KeyboardEvent('keydown', {
      cancelable: true,
      key: keyName.KEY_TAB,
      shiftKey: true,
    });

    selectDebugElement.triggerEventHandler('keydown', event);

    await fixture.whenStable();
    await new Promise(resolve => setTimeout(resolve));

    expect(blurSpy).toHaveBeenCalledTimes(1);
    expect(previousFocusSpy).toHaveBeenCalledTimes(1);
    expect(event.defaultPrevented).toBe(false);
  });

  it('synchronises option selection and emits change on arrow navigation', async () => {
    fixture.detectChanges();

    const selectElement = selectDebugElement.nativeElement as HTMLSelectElement;
    const changeSpy = jest.fn();

    selectElement.addEventListener('change', changeSpy);
    selectElement.selectedIndex = 0;

    selectDebugElement.triggerEventHandler(
      'keydown',
      new KeyboardEvent('keydown', { key: keyName.KEY_DOWN }),
    );

    // Simulate browser moving focus to the next option while the list is expanded.
    selectElement.selectedIndex = 1;

    await fixture.whenStable();

    expect(selectElement.options[0].selected).toBe(false);
    expect(selectElement.options[1].selected).toBe(true);
    expect(changeSpy).toHaveBeenCalledTimes(1);
  });
});
