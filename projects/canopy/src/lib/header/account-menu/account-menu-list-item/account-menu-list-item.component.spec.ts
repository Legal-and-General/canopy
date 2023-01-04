import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgAccountMenuListItemComponent } from './account-menu-list-item.component';

describe('LgAccountMenuListItemComponent', () => {
  let component: LgAccountMenuListItemComponent;
  let fixture: ComponentFixture<LgAccountMenuListItemComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgAccountMenuListItemComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgAccountMenuListItemComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-account-menu-list-item');
  });

  it('should set the role attribute', () => {
    expect(el.getAttribute('role')).toBe('listitem');
  });

  it('emits an event when clicked', () => {
    const clickEvent = new KeyboardEvent('click');
    const clickedSpy = spyOn(component.clicked, 'emit');

    el.focus();
    el.dispatchEvent(clickEvent);

    expect(clickedSpy).toHaveBeenCalledTimes(1);
  });

  it('emits an event when tab keydown occurs', () => {
    const tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab' });
    const tabKeyDownSpy = spyOn(component.tabbedOut, 'emit');

    el.focus();
    el.dispatchEvent(tabKeyDownEvent);

    expect(tabKeyDownSpy).toHaveBeenCalledTimes(1);
  });
});
