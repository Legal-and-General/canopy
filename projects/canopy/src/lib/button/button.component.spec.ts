import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgSpinnerComponent } from '../spinner/spinner.component';
import { LgButtonComponent } from './button.component';

describe('LgButtonComponent', () => {
  let component: LgButtonComponent;
  let fixture: ComponentFixture<LgButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgButtonComponent, LgSpinnerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loading button', () => {
    it('does not have the loading class by default', () => {
      const buttonClass = fixture.debugElement
        .query(By.css('button'))
        .nativeElement.getAttribute('class');
      expect(buttonClass).not.toContain('lg-btn--loading');
    });
    it('does not display the spinner by default', () => {
      const spinnerComponent = fixture.debugElement.query(
        By.directive(LgSpinnerComponent)
      );
      expect(spinnerComponent).toBeNull();
    });

    describe('when the [loading] input is `true`', () => {
      let buttonClass;
      beforeEach(() => {
        component.loading = true;
        fixture.detectChanges();
        buttonClass = fixture.debugElement
          .query(By.css('button'))
          .nativeElement.getAttribute('class');
      });
      it('adds the loading class ', () => {
        expect(buttonClass).toContain('lg-btn--loading');
      });
      it('displays the spinner when the [loading] input is `true`', () => {
        const spinnerComponent = fixture.debugElement.query(
          By.directive(LgSpinnerComponent)
        );
        expect(spinnerComponent).toBeDefined();
      });
    });
  });
});
