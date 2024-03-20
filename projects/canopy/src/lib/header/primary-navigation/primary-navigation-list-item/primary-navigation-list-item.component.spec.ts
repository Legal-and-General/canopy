import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { LgPrimaryNavListItemComponent } from './primary-navigation-list-item.component';

describe('PrimaryNavigationListItemComponent', () => {
  let component: LgPrimaryNavListItemComponent;
  let fixture: ComponentFixture<LgPrimaryNavListItemComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgPrimaryNavListItemComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgPrimaryNavListItemComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    el = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-primary-nav-list-item');
  });

  it('should set the role attribute', () => {
    expect(el.getAttribute('role')).toBe('listitem');
  });

  it('should align the item right', () => {
    component.alignRight = true;
    fixture.detectChanges();

    expect(el.getAttribute('class')).toContain('lg-primary-nav-list-item--right');
  });

  it('emits an event when tab keydown occurs', () => {
    const tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab' });
    const tabKeyDownSpy = spyOn(component.tabbedOut, 'emit');

    el.focus();
    el.dispatchEvent(tabKeyDownEvent);

    expect(tabKeyDownSpy).toHaveBeenCalledTimes(1);
  });

  it('emits an event when clicked', () => {
    const clickEvent = new KeyboardEvent('click');
    const clickedSpy = spyOn(component.clicked, 'emit');

    el.focus();
    el.dispatchEvent(clickEvent);

    expect(clickedSpy).toHaveBeenCalledTimes(1);
  });
});
