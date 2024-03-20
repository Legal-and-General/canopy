import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgSideNavBarLinkDirective } from './side-nav-bar-link.directive';

describe('LgSideNavLinkDirective', () => {
  let fixture: MockedComponentFixture<LgSideNavBarLinkDirective>;
  let directive: LgSideNavBarLinkDirective;
  let debugElement: DebugElement;
  let el: HTMLElement;
  let eventSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgSideNavBarLinkDirective ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <div>
        <a lgSideBarNavLink href="/">Test link</a>
      </div>
    `);

    debugElement = fixture.debugElement.children[0].query(By.css('a'));
    directive = debugElement.injector.get(LgSideNavBarLinkDirective);
    el = debugElement.nativeElement;
    eventSpy = spyOn(directive.activated, 'emit');

    fixture.detectChanges();
  });

  it('should set default class', () => {
    expect(el.classList.contains('lg-side-nav-bar-link')).toBeTruthy();
  });

  it('should have selected class if isActive is true', () => {
    directive.isActive = true;
    fixture.detectChanges();

    expect(el.classList.contains('lg-side-nav-bar-link--selected')).toBeTruthy();
  });

  it('should not have selected class if isActive is false', () => {
    expect(el.classList.contains('lg-side-nav-bar-link--selected')).not.toBeTruthy();
  });

  it('emits event containing selected tab index when activated', () => {
    directive.isActive = true;

    expect(eventSpy).toHaveBeenCalled();
  });
});
