import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {
  lgFilterContainerPanelIdPrefix,
  lgFilterContainerToggleIdPrefix,
} from '../filter-container.constants';

import { LgFilterContainerPanelComponent } from './filter-container-panel.component';

describe('LgFilterContainerPanelComponent', () => {
  let component: LgFilterContainerPanelComponent;
  let fixture: ComponentFixture<LgFilterContainerPanelComponent>;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgFilterContainerPanelComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgFilterContainerPanelComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    component.uniqueId = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-filter-container-panel');
    expect(el.getAttribute('class')).not.toContain('lg-filter-container-panel--active');
  });

  it('should have the active class when isActive is true', () => {
    component.isActive = true;
    fixture.detectChanges();

    expect(el.getAttribute('class')).toContain('lg-filter-container-panel--active');
  });

  it('should have the correct id', () => {
    expect(el.getAttribute('id')).toContain(`${lgFilterContainerPanelIdPrefix}0`);
  });

  it('should have role region', () => {
    expect(el.getAttribute('role')).toBe('region');
  });

  it('should have the correct aria-labelledby attribute', () => {
    expect(el.getAttribute('aria-labelledby')).toBe(
      `${lgFilterContainerToggleIdPrefix}0`,
    );
  });
});
