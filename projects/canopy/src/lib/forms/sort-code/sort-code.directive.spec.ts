import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  UntypedFormControl,
  UntypedFormGroup,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { instance, mock } from '@typestrong/ts-mockito';

import { LgSortCodeDirective } from '../sort-code/sort-code.directive';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <input lgInput lgSortCode formControlName="sortCode" />
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ],
})
class TestInputComponent {
  form = new UntypedFormGroup({
    sortCode: new UntypedFormControl('', [ Validators.required ]),
  });
}

describe('LgSortCodeDirective', () => {
  let fixture: ComponentFixture<TestInputComponent>;
  let component: TestInputComponent;
  let inputDebugElement: DebugElement;
  let inputInstance: LgSortCodeDirective;
  let control: NgControl;

  beforeEach(waitForAsync(() => {
    control = mock(NgControl);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        LgSortCodeDirective,
        TestInputComponent,
      ],
      providers: [ { provide: NgControl, useValue: instance(control) } ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestInputComponent);
    component = fixture.componentInstance;

    inputDebugElement = fixture.debugElement.query(By.directive(LgSortCodeDirective));

    inputInstance =
      inputDebugElement.injector.get<LgSortCodeDirective>(LgSortCodeDirective);
  }));

  it('adds a placeholder', () => {
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.placeholder).toContain('00-00-00');
  });

  it('adds a required attribute', () => {
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.required).toBe(true);
  });

  it('adds a numeric inputmode attribute', () => {
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.getAttribute('inputmode')).toBe('numeric');
  });

  it('adds a maxlength attribute', () => {
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.getAttribute('maxlength')).toBe('8');
  });

  it('adds a size attribute', () => {
    fixture.detectChanges();

    expect(inputDebugElement.nativeElement.getAttribute('size')).toBe('7');
  });

  describe('#format', () => {
    it('should add dashes between the numbers', () => {
      expect(inputInstance['format']('000000')).toEqual('00-00-00');
      expect(inputInstance['format']('00 00 00')).toEqual('00-00-00');
      expect(inputInstance['format']('00-00-00')).toEqual('00-00-00');
    });

    it('should be called on a focusout event', () => {
      component.form.get('sortCode').setValue('000');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const spy = spyOn<any>(inputInstance, 'format');

      fixture.detectChanges();
      inputDebugElement.nativeElement.dispatchEvent(new Event('focusout'));

      expect(spy).toHaveBeenCalledOnceWith('000');
    });
  });
});
