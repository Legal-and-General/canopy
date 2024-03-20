import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LgAccountMenuItemDirective } from './account-menu-item.directive';

@Component({
  template: `
    <button id="test" type="button" lgAccountMenuItem>Menu nav button</button>
  `,
  standalone: true,
})
class AccountMenuTestItemComponent {}

describe('PrimaryNavigationLinkDirective', () => {
  let fixtureButton: ComponentFixture<AccountMenuTestItemComponent>;
  let testButtonElement: DebugElement;
  let directive: LgAccountMenuItemDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ AccountMenuTestItemComponent, LgAccountMenuItemDirective ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixtureButton = TestBed.createComponent(AccountMenuTestItemComponent);

    testButtonElement = fixtureButton.debugElement.query(
      By.directive(LgAccountMenuItemDirective),
    );

    directive = testButtonElement.injector.get(LgAccountMenuItemDirective);
    fixtureButton.detectChanges();
  }));

  it('should set the default class', () => {
    expect(testButtonElement.nativeElement.getAttribute('class')).toContain(
      'lg-account-menu-item',
    );
  });

  it('should set the active class', () => {
    directive.isActive = true;
    fixtureButton.detectChanges();

    expect(testButtonElement.nativeElement.getAttribute('class')).toContain(
      'lg-account-menu-item--active',
    );
  });
});
