import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LgAccountMenuItemDirective } from './account-menu-item.directive';

@Component({
  template: `
    <button id="test" type="button" lgAccountMenuItem>Menu nav button</button>
  `,
  imports: [ LgAccountMenuItemDirective ],
  changeDetection: ChangeDetectionStrategy.Default,
})
class AccountMenuTestItemComponent {}

describe('PrimaryNavigationLinkDirective', () => {
  let fixtureButton: ComponentFixture<AccountMenuTestItemComponent>;
  let testButtonElement: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ AccountMenuTestItemComponent, LgAccountMenuItemDirective ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixtureButton = TestBed.createComponent(AccountMenuTestItemComponent);

    testButtonElement = fixtureButton.debugElement.query(
      By.directive(LgAccountMenuItemDirective),
    );

    fixtureButton.detectChanges();
  });

  it('should set the default class', () => {
    expect(testButtonElement.nativeElement.getAttribute('class')).toContain(
      'lg-account-menu-item',
    );
  });

  it('should set the active class', () => {
    fixtureButton.componentRef.setInput('isActive', true);
    fixtureButton.detectChanges();

    expect(testButtonElement.nativeElement.getAttribute('class')).toContain(
      'lg-account-menu-item--active',
    );
  });
});
