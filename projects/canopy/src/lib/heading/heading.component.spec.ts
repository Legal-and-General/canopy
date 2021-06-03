import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgHeadingComponent } from './heading.component';

describe('LgHeadingComponent', () => {
  let component: LgHeadingComponent;
  let fixture: ComponentFixture<LgHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgHeadingComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the level input', () => {
    it('should show a heading level 2 when the input is not specified', () => {
      expect(fixture.debugElement.query(By.css('h2'))).toBeDefined();
    });

    it('should show the correct heading level based on the input specified', () => {
      component.level = 4;
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('h4'))).toBeDefined();
    });
  });
});
