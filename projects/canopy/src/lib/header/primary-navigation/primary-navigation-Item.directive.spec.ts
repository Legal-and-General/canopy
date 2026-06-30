import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LgPrimaryNavItemDirective } from './primary-navigation-item.directive';

@Component({
  template: `
    <button id="test" type="button" lgPrimaryNavItem>Primary nav button</button>
  `,
  imports: [ LgPrimaryNavItemDirective ],
  changeDetection: ChangeDetectionStrategy.Default,
})
class PrimaryNavTestItemComponent {}

describe('PrimaryNavigationLinkDirective', () => {
  let fixtureButton: ComponentFixture<PrimaryNavTestItemComponent>;
  let testButtonElement: DebugElement;
  let directive: LgPrimaryNavItemDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ PrimaryNavTestItemComponent, LgPrimaryNavItemDirective ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureButton = TestBed.createComponent(PrimaryNavTestItemComponent);

    testButtonElement = fixtureButton.debugElement.query(
      By.directive(LgPrimaryNavItemDirective),
    );

    directive = testButtonElement.injector.get(LgPrimaryNavItemDirective);
    fixtureButton.detectChanges();
  });

  it('should set the default class', () => {
    expect(testButtonElement.nativeElement.getAttribute('class')).toContain(
      'lg-primary-nav-item',
    );
  });

  it('should set the active class', () => {
    directive.isActive = true;
    fixtureButton.changeDetectorRef.markForCheck();
    fixtureButton.detectChanges();

    expect(testButtonElement.nativeElement.getAttribute('class')).toContain(
      'lg-primary-nav-item--active',
    );
  });
});
