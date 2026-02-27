import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponents, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { DebugElement, EventEmitter } from '@angular/core';

import { LgButtonComponent, LgButtonToggleDirective } from '../button';
import { keyName } from '../utils/keyboard-keys';

import {
  LgFilterContainerComponent,
  LgFilterContainerPanelComponent,
  lgFilterContainerPanelIdPrefix,
  lgFilterContainerToggleIdPrefix,
} from './';

describe('LgFilterContainerComponent', () => {
  let component: LgFilterContainerComponent;
  let fixture: MockedComponentFixture<LgFilterContainerComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;
  let toggleActiveClassSpy: jest.SpyInstance;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgFilterContainerComponent,
        LgButtonToggleDirective,
        MockComponents(LgFilterContainerPanelComponent, LgButtonComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    ngMocks.flushTestBed();

    fixture = MockRender(`
      <lg-filter-container>
        <button id="test" lg-button priority="secondary" lgButtonToggle>Filters</button>
        <lg-filter-container-panel></lg-filter-container-panel>
      </lg-filter-container>
    `);

    debugElement = fixture.debugElement;
    el = debugElement.children[0].nativeElement;

    component = ngMocks.findInstance(LgFilterContainerComponent);

    toggleActiveClassSpy = jest.spyOn(component as any, 'toggleActiveClass');

    if (!component.filterContainerToggle.toggleActive) {
      component.filterContainerToggle.toggleActive = new EventEmitter<boolean>();
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-filter-container');
  });

  it('should set the id and aria-controls of the toggle', () => {
    expect(component.filterContainerToggle.id).toBe(
      `${lgFilterContainerToggleIdPrefix}${component['uniqueId']}`,
    );

    expect(component.filterContainerToggle.ariaControls).toBe(
      `${lgFilterContainerPanelIdPrefix}${component['uniqueId']}`,
    );
  });

  it('should set the unique id of the panel, its state and call #toggleActiveClass', () => {
    expect(component.filterContainerPanel.uniqueId).toBe(component['uniqueId']);

    // Clear previous calls before our test
    toggleActiveClassSpy.mockClear();

    // Use the direct emit method to ensure event propagation
    component.filterContainerToggle.toggleActive.emit(true);
    fixture.detectChanges();

    expect(component.filterContainerPanel.isActive).toBe(true);
    expect(toggleActiveClassSpy).toHaveBeenCalledWith(true);

    component.filterContainerToggle.toggleActive.emit(false);
    fixture.detectChanges();

    expect(component.filterContainerPanel.isActive).toBe(false);
    expect(toggleActiveClassSpy).toHaveBeenCalledWith(false);
  });

  it('should close the panel when the escape key is pressed and the panel is active', () => {
    const escEvent = new KeyboardEvent('keydown', {
      key: keyName.KEY_ESCAPE,
    });
    const toggleSpy = jest.spyOn(component.filterContainerToggle, 'toggle');

    component.onKeydown(escEvent);

    expect(component.filterContainerToggle.isActive).toBe(false);
    expect(toggleSpy).toHaveBeenCalledTimes(0);

    component.filterContainerToggle['_isActive'] = true;
    component.onKeydown(escEvent);

    expect(toggleSpy).toHaveBeenCalledTimes(1);
  });

  describe('#toggleActiveClass', () => {
    it('should toggle the active class', () => {
      component['toggleActiveClass'](true);
      fixture.detectChanges();

      expect(el.getAttribute('class')).toContain('lg-filter-container--active');

      component['toggleActiveClass'](false);
      fixture.detectChanges();

      expect(el.getAttribute('class')).not.toContain('lg-filter-container--active');
    });

    it('should remove the active class', () => {
      component['toggleActiveClass'](false);
      fixture.detectChanges();

      expect(el.getAttribute('class')).not.toContain('lg-filter-container--active');
    });
  });
});
