import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LgPageComponent } from './page.component';

describe('LgPageComponent', () => {
  let component: LgPageComponent;
  let fixture: ComponentFixture<LgPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgPageComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the default variant when omitted', () => {
    expect(component.variant).toBe('default');
    expect(fixture.nativeElement.classList.contains('lg-page')).toBe(true);
    expect(fixture.nativeElement.classList.contains('lg-page--default')).toBe(true);
    expect(fixture.nativeElement.classList.contains('lg-page--branded')).toBe(false);
  });

  it('should accept the explicit default variant', () => {
    fixture.componentRef.setInput('variant', 'default');
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('lg-page--default')).toBe(true);
    expect(fixture.nativeElement.classList.contains('lg-page--branded')).toBe(false);
  });

  it('should apply the branded variant and retain the base class', () => {
    fixture.componentRef.setInput('variant', 'branded');
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('lg-page')).toBe(true);
    expect(fixture.nativeElement.classList.contains('lg-page--branded')).toBe(true);
    expect(fixture.nativeElement.classList.contains('lg-page--default')).toBe(false);
  });

  it('should remove the branded variant when switching back to default', () => {
    fixture.componentRef.setInput('variant', 'branded');
    fixture.detectChanges();
    fixture.componentRef.setInput('variant', 'default');
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('lg-page')).toBe(true);
    expect(fixture.nativeElement.classList.contains('lg-page--default')).toBe(true);
    expect(fixture.nativeElement.classList.contains('lg-page--branded')).toBe(false);
  });

  it('should focus to main container on click of skip to main content', () => {
    const mainElement: DebugElement = fixture.debugElement.query(By.css('#main'));
    const focusSpy = jest.spyOn(mainElement.nativeElement, 'focus');
    const event = {
      preventDefault: jest.fn(),
    };

    fixture.debugElement
      .query(By.css('.lg-page__skip-link'))
      .triggerEventHandler('click', event);

    expect(focusSpy).toHaveBeenCalled();
  });
});
