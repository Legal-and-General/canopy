import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgTabNavBarLinkDirective } from './tab-nav-bar-link.directive';

describe('LgTabNavLinkDirective', () => {
  let fixture: MockedComponentFixture<LgTabNavBarLinkDirective>;
  let directive: LgTabNavBarLinkDirective;
  let debugElement: DebugElement;
  let el: HTMLElement;
  let eventSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgTabNavBarLinkDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <div>
        <a lgTabNavBarLink href="/">Test tab</a>
      </div>
    `);
    debugElement = fixture.debugElement.children[0].query(By.css('a'));
    directive = debugElement.injector.get(LgTabNavBarLinkDirective);
    el = debugElement.nativeElement;
    eventSpy = spyOn(directive.selectedTabIndexChange, 'emit');

    fixture.detectChanges();
  });

  it('should set role attribute to `tab`', () => {
    expect(el.getAttribute('role')).toEqual('tab');
  });

  it('should set default class', () => {
    expect(el.classList.contains('lg-tab-nav-bar-link')).toBeTruthy();
  });

  it('should have selected class if isActive is true', () => {
    directive.isActive = true;
    fixture.detectChanges();
    expect(el.classList.contains('lg-tab-nav-bar-link--selected')).toBeTruthy();
  });

  it('should not have selected class if isActive is false', () => {
    expect(el.classList.contains('lg-tab-nav-bar-link--selected')).not.toBeTruthy();
  });

  it('should set aria selected attribute if is Active is true', () => {
    directive.isActive = true;
    fixture.detectChanges();
    expect(el.getAttribute('aria-selected')).toBeTruthy();
  });

  it('should set aria selected attribute to null is isActive is false', () => {
    expect(el.getAttribute('aria-selected')).toBeNull();
  });

  it('should set tabindex to -1 if isActive is true', () => {
    directive.isActive = true;
    fixture.detectChanges();
    expect(el.getAttribute('tabindex')).toBeNull();
  });

  it('should set tabindex to null if isActive is false', () => {
    expect(el.getAttribute('tabindex')).toEqual('-1');
  });

  it('should set keyboard-focus attribute to null if isFocused is false', () => {
    directive.isFocused = false;
    expect(el.getAttribute('keyboard-focus')).toBeNull();
  });

  it('should set keyboard-focus attribute to true if isFocused and isKeyboardEvent event are true', () => {
    directive.isFocused = true;
    directive.isKeyboardEvent = true;
    fixture.detectChanges();
    expect(el.getAttribute('keyboard-focus')).toBeTruthy();
  });

  it('sets isKeyboardEvent to true on keyup', () => {
    directive.onKeyUp();
    fixture.detectChanges();
    expect(directive.isKeyboardEvent).toBeTruthy();
  });

  it('sets isActive to true when clicked', () => {
    directive.isActive = false;
    directive.onClick();
    expect(directive.isActive).toBeTruthy();
  });

  it('emits event containing selected tab index when clicked', () => {
    directive.index = 2;
    directive.isActive = false;
    directive.onClick();
    expect(eventSpy).toHaveBeenCalledWith(2);
  });

  describe('selectByKeyboard', () => {
    let clickSpy: jasmine.Spy;
    let focusSpy: jasmine.Spy;

    beforeEach(() => {
      clickSpy = spyOn(el, 'click');
      focusSpy = spyOn(el, 'focus');
    });

    it('sets isKeyboardEvent to true', () => {
      directive.selectByKeyboard();
      expect(directive.isKeyboardEvent).toBeTruthy();
    });

    it('focuses the element', () => {
      directive.selectByKeyboard();
      expect(focusSpy).toHaveBeenCalled();
    });

    it('clicks the element', () => {
      directive.selectByKeyboard();
      expect(clickSpy).toHaveBeenCalled();
    });
  });
});
