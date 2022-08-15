import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LgButtonToggleDirective } from './button-toggle.directive';

@Component({
  template: '<a lg-button lgButtonToggle variant="secondary-dark">This is a link</a>',
})
class LinkTestComponent {}

@Component({
  template: `
    <button id="test" lg-button lgButtonToggle variant="secondary-dark">
      This is a button
    </button>
  `,
})
class ButtonTestComponent {}

describe('LgButtonToggleDirective', () => {
  let fixtureButton: ComponentFixture<ButtonTestComponent>;
  let testButtonElement: DebugElement;
  let directive: LgButtonToggleDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTestComponent, LinkTestComponent, LgButtonToggleDirective ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixtureButton = TestBed.createComponent(ButtonTestComponent);

    testButtonElement = fixtureButton.debugElement.query(
      By.directive(LgButtonToggleDirective),
    );

    directive = testButtonElement.injector.get(LgButtonToggleDirective);
    fixtureButton.detectChanges();
  }));

  it('should have the default class, role and aria-expanded set to false', () => {
    expect(testButtonElement.nativeElement.getAttribute('class')).toContain(
      'lg-btn-toggle',
    );

    expect(testButtonElement.nativeElement.getAttribute('role')).toBe('button');

    expect(testButtonElement.nativeElement.getAttribute('aria-expanded')).toBe('false');
  });

  it('should have the active class and aria-expanded set to true when active', () => {
    directive['_isActive'] = true;
    fixtureButton.detectChanges();

    expect(testButtonElement.nativeElement.getAttribute('aria-expanded')).toBe('true');
  });

  it('should set the id and the aria-controls when set', () => {
    directive.id = 'test';
    directive.ariaControls = 'testControl';
    fixtureButton.detectChanges();

    expect(testButtonElement.nativeElement.getAttribute('id')).toBe('test');

    expect(testButtonElement.nativeElement.getAttribute('aria-controls')).toBe(
      'testControl',
    );
  });

  describe('#toggle', () => {
    it('should toggle isActive and emit an event', () => {
      const toggleActiveSpy = spyOn(directive.toggleActive, 'emit');

      directive.toggle();

      expect(directive['_isActive']).toBe(true);
      expect(toggleActiveSpy).toHaveBeenCalledWith(true);

      directive.toggle();

      expect(directive['_isActive']).toBe(false);
      expect(toggleActiveSpy).toHaveBeenCalledWith(false);
    });
  });

  it('should call #toggle when clicked', () => {
    const toggleSpy = spyOn(directive, 'toggle');

    testButtonElement.nativeElement.click();

    expect(toggleSpy).toHaveBeenCalledTimes(1);
  });

  describe('#isActive', () => {
    it('should return the active state', () => {
      expect(directive['_isActive']).toBe(false);
      expect(directive.isActive).toBe(false);

      directive['_isActive'] = true;
      fixtureButton.detectChanges();

      expect(directive.isActive).toBe(true);
    });
  });

  it('should throw an error if the element is not a button', () => {
    expect(() => TestBed.createComponent(LinkTestComponent)).toThrowError(
      'The `lgButtonToggle` should always be a button. Please change the HTML tag accordingly',
    );
  });
});
