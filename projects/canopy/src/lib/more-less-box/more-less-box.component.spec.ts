import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LgMoreLessBoxComponent } from './more-less-box.component';

describe('MoreLessBoxComponent', () => {
  let component: LgMoreLessBoxComponent;
  let fixture: ComponentFixture<LgMoreLessBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgMoreLessBoxComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgMoreLessBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.class).toBeTrue();
  });

  describe('id attribute', () => {
    const getPanel = () => fixture.debugElement.query(By.css('.lg-more-less-box__panel'));

    it('is as provided', () => {
      const expected = 'some-id';

      component.id = expected;
      fixture.detectChanges();

      const panel = getPanel();

      expect(panel.nativeElement.getAttribute('id')).toEqual(expected);
    });

    it('is automatically set if not provided', () => {
      const expected = 'lg-more-less-box-id-';

      const panel = getPanel();

      expect(panel.nativeElement.getAttribute('id')).toContain(expected);
    });
  });

  describe('read input', () => {
    const getIndicator = (read: boolean): string =>
      fixture.debugElement
        .query(By.css(`.lg-more-less-box__read-indicator--${read
          ? 'read'
          : 'unread'}`))
        .nativeElement.textContent.trim() as string;

    it('should set the read indicator as "READ" when true', () => {
      component.showReadIndicator = true;
      component.read = true;

      fixture.detectChanges();

      expect(getIndicator(true)).toEqual('READ');
    });

    it('should set the read indicator as "TO READ" by default', () => {
      component.showReadIndicator = true;

      fixture.detectChanges();

      expect(getIndicator(false)).toEqual('TO READ');
    });
  });

  describe('showReadIndicator', () => {
    const getIndicator = () =>
      fixture.debugElement.query(By.css('.lg-more-less-box__read-indicator--unread'));

    it('should display the read indicator when true', () => {
      component.showReadIndicator = true;
      fixture.detectChanges();

      expect(getIndicator()).toBeDefined();
    });

    it('should not display the read indicator by default', () => {
      expect(getIndicator()).toBeNull();
    });
  });

  describe('onToggleMoreLess', () => {
    it('should toggle the open property', () => {
      component.open = false;
      component.onToggleMoreLess();

      expect(component.open).toBeTrue();

      component.onToggleMoreLess();

      expect(component.open).toBeFalse();
    });
  });

  describe('open', () => {
    let openedSpy: jasmine.Spy;
    let closedSpy: jasmine.Spy;
    let moreLessBtn: DebugElement;

    beforeEach(() => {
      openedSpy = spyOn(component.opened, 'emit');
      closedSpy = spyOn(component.closed, 'emit');

      moreLessBtn = fixture.debugElement.query(By.css('button.lg-more-less-box__toggle'));
    });

    it('should emit the opened / closed events', () => {
      // open
      moreLessBtn.nativeElement.click();

      expect(component.read).toBeTrue();
      expect(openedSpy).toHaveBeenCalledTimes(1);

      // close
      moreLessBtn.nativeElement.click();

      expect(component.read).toBeTrue();
      expect(closedSpy).toHaveBeenCalledTimes(1);
    });
  });
});
