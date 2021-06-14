import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LgPageComponent } from './page.component';

describe('LgPageComponent', () => {
  let component: LgPageComponent;
  let fixture: ComponentFixture<LgPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgPageComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should focus to main container on click of skip to main content', () => {
    const mainElement: DebugElement = fixture.debugElement.query(By.css('#main'));
    const focusSpy = spyOn(mainElement.nativeElement, 'focus');
    fixture.debugElement
      .query(By.css('.lg-page__skip-link'))
      .triggerEventHandler('click', null);
    expect(focusSpy).toHaveBeenCalled();
  });
});
