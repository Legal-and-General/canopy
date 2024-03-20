import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DefaultRenderComponent, MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgNotificationBadgeComponent } from './notification-badge.component';

describe('LgNotificationBadgeComponent', () => {
  let component: DefaultRenderComponent<LgNotificationBadgeComponent>;
  let fixture: MockedComponentFixture<LgNotificationBadgeComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgNotificationBadgeComponent ],
    }).compileComponents();

    fixture = MockRender(`
      <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>
    `);

    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets default class', () => {
    const hostEl = debugElement.queryAll(By.css('.lg-notification-badge'))[0];

    expect(hostEl).toBeDefined();
  });

  it('displays the count and hides it from screen readers', () => {
    const countEl = debugElement.queryAll(By.css('span'))[0];

    expect(countEl.nativeElement.textContent).toBe('3');
    expect(countEl.nativeElement.getAttribute('aria-hidden')).toBe('true');
  });

  it('provides alternative contectual text for screen readers', () => {
    const textEl = debugElement.queryAll(By.css('span'))[1];

    expect(textEl.nativeElement.textContent).toBe('You have 3 unread messages');
    expect(textEl.nativeElement.classList).toContain('lg-visually-hidden');
  });
});
