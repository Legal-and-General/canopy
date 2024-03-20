import { TestBed, waitForAsync } from '@angular/core/testing';
import {
  DefaultRenderComponent,
  MockComponents,
  MockedComponentFixture,
  MockRender,
} from 'ng-mocks';
import { DebugElement } from '@angular/core';

import { LgButtonComponent, LgButtonToggleDirective } from '../button';
import { keyName } from '../utils/keyboard-keys';

import {
  LgFilterContainerComponent,
  LgFilterContainerPanelComponent,
  lgFilterContainerPanelIdPrefix,
  lgFilterContainerToggleIdPrefix,
} from './';

describe('LgFilterContainerComponent', () => {
  let component: DefaultRenderComponent<LgFilterContainerComponent>;
  let fixture: MockedComponentFixture<LgFilterContainerComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

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
    fixture = MockRender(`
      <lg-filter-container>
        <button id="test" lg-button variant="secondary-dark" lgButtonToggle>Filters</button>

        <lg-filter-container-panel></lg-filter-container-panel>
      </lg-filter-container>
    `);

    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    el = debugElement.children[0].nativeElement;

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const toggleActiveClassSpy = spyOn<any>(component, 'toggleActiveClass');

    expect(component.filterContainerPanel.uniqueId).toBe(component['uniqueId']);
    component.filterContainerToggle.toggleActive.emit(true);

    expect(component.filterContainerPanel.isActive).toBe(true);
    expect(toggleActiveClassSpy).toHaveBeenCalledWith(true);

    component.filterContainerToggle.toggleActive.emit(false);

    expect(component.filterContainerPanel.isActive).toBe(false);
    expect(toggleActiveClassSpy).toHaveBeenCalledWith(false);
  });

  it('should close the panel when the escape key is pressed and the panel is active', () => {
    const escEvent = new KeyboardEvent('keydown', {
      key: keyName.KEY_ESCAPE,
    });
    const toggleSpy = spyOn(component.filterContainerToggle, 'toggle');

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
