import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgSpinnerComponent } from './spinner.component';

describe('LgSpinnerComponent', () => {
  let component: LgSpinnerComponent;
  let fixture: ComponentFixture<LgSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgSpinnerComponent]
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
    expect(component).toBeTruthy();
    let link = fixture.debugElement.query(By.css(`.lg-spinner__ring--color`));
    expect(link).toBeFalsy();
    component.variant = 'color';
    fixture.detectChanges();
    link = fixture.debugElement.query(By.css(`.lg-spinner__ring--color`));
    expect(link).toBeTruthy();
  });
});
