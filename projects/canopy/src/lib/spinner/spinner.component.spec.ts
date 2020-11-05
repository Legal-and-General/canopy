import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgSpinnerComponent } from './spinner.component';

describe('LgSpinnerComponent', () => {
  let component: LgSpinnerComponent;
  let fixture: ComponentFixture<LgSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgSpinnerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds the variant class to the spinner ring', () => {
    let link = fixture.debugElement.query(By.css('.lg-spinner__ring--color'));
    expect(link).toBeFalsy();
    component.variant = 'color';
    fixture.detectChanges();
    link = fixture.debugElement.query(By.css('.lg-spinner__ring--color'));
    expect(link).toBeTruthy();
  });

  it('adds the small size variant to the component', () => {
    expect(fixture.debugElement.nativeElement.getAttribute('class')).not.toContain(
      'lg-spinner--sm',
    );
    component.size = 'sm';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.getAttribute('class')).toContain(
      'lg-spinner--sm',
    );
  });

  describe('text input', () => {
    describe('when not specified', () => {
      it('should add a visually hidden element with default text', () => {
        const hiddenEl = fixture.nativeElement.querySelector('.lg-visually-hidden');
        const textEl = fixture.nativeElement.querySelector('.lg-spinner__content');

        expect(textEl).toBeNull();
        expect(hiddenEl).toBeDefined();
        expect(hiddenEl.innerText).toEqual('Loading...');
      });
    });

    describe('when specified', () => {
      it('should add an element with the specified text', () => {
        component.text = 'Test text';
        fixture.detectChanges();

        const hiddenEl = fixture.nativeElement.querySelector('.lg-visually-hidden');
        const textEl = fixture.nativeElement.querySelector('.lg-spinner__content');

        expect(hiddenEl).toBeNull();
        expect(textEl).toBeDefined();
        expect(textEl.innerText).toBe('Test text');
      });
    });
  });
});
