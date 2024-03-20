import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { lgCardPanelIdPrefix, lgCardToggleIdPrefix } from '../card.interface';

import { LgCardToggableContentComponent } from './card-toggable-content.component';

describe('LgCardToggableContentComponent', () => {
  let component: LgCardToggableContentComponent;
  let fixture: ComponentFixture<LgCardToggableContentComponent>;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgCardToggableContentComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardToggableContentComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    component.uniqueId = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-card-toggable-content');
  });

  it('shouldn\'t have the hidden class and should have the tabindex set to -1 when isActive is true', () => {
    component.isActive = true;
    fixture.detectChanges();

    expect(el.getAttribute('tabindex')).toContain('-1');
  });

  it('should have the hidden class and unset the tabindex when isActive is false', () => {
    component.isActive = false;
    fixture.detectChanges();

    expect(el.getAttribute('class')).toContain('lg-card-toggable-content--hidden');
    expect(el.getAttribute('tabindex')).not.toContain('-1');
  });

  it('should have the correct id', () => {
    expect(el.getAttribute('id')).toContain(`${lgCardPanelIdPrefix}0`);
  });

  it('should have role region', () => {
    expect(el.getAttribute('role')).toBe('region');
  });

  it('should have the correct aria-labelledby attribute', () => {
    expect(el.getAttribute('aria-labelledby')).toBe(`${lgCardToggleIdPrefix}0`);
  });

  it('should unset the tabindex on blur', () => {
    el.blur();

    expect(el.getAttribute('tabindex')).not.toContain('-1');
  });

  it('should set the focus on the panel when active', () => {
    component.isActive = true;
    const focusSpy = spyOn(el, 'focus');

    fixture.detectChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('shouldn\'t set the focus on the panel when inactive', () => {
    component.isActive = false;
    const focusSpy = spyOn(el, 'focus');

    fixture.detectChanges();

    expect(focusSpy).not.toHaveBeenCalled();
  });
});
