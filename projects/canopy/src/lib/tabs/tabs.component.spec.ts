import { TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import {
  MockComponents,
  MockDirective,
  MockRender,
  MockedComponentFixture,
} from 'ng-mocks';
import { instance, mock, when } from 'ts-mockito';

import { LgFocusDirective } from '../focus';
import { LgHeadingComponent } from '../heading/heading.component';
import { keyName } from '../utils/keyboard-keys';
import { LgTabItemContentComponent } from './tab-item-content/tab-item-content.component';
import { LgTabItemHeadingComponent } from './tab-item-heading/tab-item-heading.component';
import { LgTabItemComponent } from './tab-item/tab-item.component';
import { LgTabsComponent } from './tabs.component';

describe('LgTabsComponent', () => {
  let component: LgTabsComponent;
  let fixture: MockedComponentFixture<LgTabsComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          LgTabsComponent,
          MockDirective(LgFocusDirective),
          MockComponents(
            LgTabItemComponent,
            LgTabItemHeadingComponent,
            LgTabItemContentComponent,
            LgHeadingComponent,
          ),
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = MockRender(`
      <lg-tabs [headingLevel]="1">
        <lg-tab-item>
          <lg-tab-item-heading>Heading 1</lg-tab-item-heading>
            <lg-tab-item-content>
              <div>Content 1</div>
            </lg-tab-item-content>
        </lg-tab-item>
      </lg-tabs>
    `);
    debugElement = fixture.debugElement;
    component = debugElement.children[0].componentInstance;
    el = debugElement.children[0].nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-tabs');
  });

  it('should have the role tab', () => {
    const listDebugElement = debugElement.query(By.css('.lg-tabs__list'));
    expect(listDebugElement.nativeElement.getAttribute('role')).toContain('tab');
  });

  it('should set content tab tabindex to zero', () => {
    const secondContentTab = debugElement.query(
      By.css(`#tab-item-content-${component.id}-0`),
    );
    expect(secondContentTab.nativeElement.getAttribute('tabindex')).toEqual('0');
  });

  it('should control tabs with matching label', () => {
    const secondContentTab = debugElement.query(
      By.css(`#tab-item-heading-${component.id}-0`),
    );
    expect(secondContentTab.nativeElement.getAttribute('aria-controls')).toEqual(
      `tab-item-content-${component.id}-0`,
    );
  });

  it('should set labelled by attribute for tab content', () => {
    const secondContentTab = debugElement.query(
      By.css(`#tab-item-content-${component.id}-0`),
    );
    expect(secondContentTab.nativeElement.getAttribute('aria-labelledby')).toEqual(
      `tab-item-heading-${component.id}-0`,
    );
  });

  it('should set tabpanel role on tab content', () => {
    const secondContentTab = debugElement.query(
      By.css(`#tab-item-content-${component.id}-0`),
    );
    expect(secondContentTab.nativeElement.getAttribute('role')).toEqual('tabpanel');
  });

  it('should reset isKeyboardEvent to false on blur', () => {
    component.selectedIndex = 0;
    component.isKeyboardEvent = true;
    component.blur(0);
    expect(component.isKeyboardEvent).toEqual(false);
  });

  describe('when label is investments', () => {
    beforeEach(() => {
      fixture = MockRender(`
        <lg-tabs [headingLevel]="1" label="investments">
          <lg-tab-item></lg-tab-item>
        </lg-tabs>
      `);
      debugElement = fixture.debugElement;
      component = debugElement.children[0].componentInstance;
      el = debugElement.children[0].nativeElement;
      fixture.detectChanges();
    });

    it('should set the aria label to investments', () => {
      const listDebugElement = debugElement.query(By.css('.lg-tabs__list'));

      expect(listDebugElement.nativeElement.getAttribute('aria-label')).toBe(
        'investments',
      );
    });
  });

  describe('when are 3 tab items', () => {
    beforeEach(() => {
      fixture = MockRender(`
        <lg-tabs [headingLevel]="1">
          <lg-tab-item>
            <lg-tab-item-heading>Heading 1</lg-tab-item-heading>
            <lg-tab-item-content>Content 1</lg-tab-item-content>
          </lg-tab-item>
          <lg-tab-item>
            <lg-tab-item-heading>Heading 2</lg-tab-item-heading>
            <lg-tab-item-content>Content 2</lg-tab-item-content>
          </lg-tab-item>
          <lg-tab-item>
            <lg-tab-item-heading>Heading 3</lg-tab-item-heading>
            <lg-tab-item-content>Content 3</lg-tab-item-content>
          </lg-tab-item>
        </lg-tabs>
      `);
      debugElement = fixture.debugElement;
      component = debugElement.children[0].componentInstance;
      el = debugElement.children[0].nativeElement;
      fixture.detectChanges();
    });

    it('should have 3 items in the tabs array', () => {
      expect(component.tabs.length).toEqual(3);
    });

    it('second tab content should be hidden', () => {
      const secondContentTab = debugElement.query(
        By.css(`#tab-item-content-${component.id}-1`),
      );
      expect(secondContentTab.nativeElement.getAttribute('hidden')).toBeDefined();
    });

    it('the second tab should be selected and attributes applied when clicked', () => {
      const button = debugElement.query(By.css(`#tab-item-heading-${component.id}-1`));
      const content = debugElement.query(By.css(`#tab-item-content-${component.id}-1`));
      button.triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(component.selectedIndex).toEqual(1);
      expect(button.nativeElement.getAttribute('tabIndex')).not.toEqual(-1);
      expect(button.nativeElement.getAttribute('aria-selected')).toEqual('true');
      expect(button.nativeElement.getAttribute('class')).toContain(
        'lg-tabs__list-item-toggle--selected',
      );
      expect(button.nativeElement.getAttribute('keyboard-focus')).not.toEqual('true');
      expect(content.nativeElement.getAttribute('hidden')).toEqual(null);
    });

    it('the selected index should be 2 when the key press is left', () => {
      component.selectedIndex = 0;
      const mockClickLeftEvent = mock(KeyboardEvent);
      when(mockClickLeftEvent.key).thenReturn(keyName.KEY_LEFT);
      component.keyboardNavigation(instance(mockClickLeftEvent));

      expect(component.isKeyboardEvent).toEqual(true);
      expect(component.selectedIndex).toEqual(2);
    });

    it('the selected index should be 2 when the key press is up', () => {
      component.selectedIndex = 0;
      const mockClickLeftEvent = mock(KeyboardEvent);
      when(mockClickLeftEvent.key).thenReturn(keyName.KEY_UP);
      component.keyboardNavigation(instance(mockClickLeftEvent));

      expect(component.isKeyboardEvent).toEqual(true);
      expect(component.selectedIndex).toEqual(2);
    });

    it('the selected index should be 1 when the key press is right', () => {
      component.selectedIndex = 0;
      const mockClickLeftEvent = mock(KeyboardEvent);
      when(mockClickLeftEvent.key).thenReturn(keyName.KEY_RIGHT);
      component.keyboardNavigation(instance(mockClickLeftEvent));

      expect(component.isKeyboardEvent).toEqual(true);
      expect(component.selectedIndex).toEqual(1);
    });

    it('the selected index should be 1 when the key press is down', () => {
      component.selectedIndex = 0;
      const mockClickLeftEvent = mock(KeyboardEvent);
      when(mockClickLeftEvent.key).thenReturn(keyName.KEY_DOWN);
      component.keyboardNavigation(instance(mockClickLeftEvent));

      expect(component.isKeyboardEvent).toEqual(true);
      expect(component.selectedIndex).toEqual(1);
    });

    it('the selected index should change from 2 to 0 when the key press is right', () => {
      component.selectedIndex = 2;
      const mockClickLeftEvent = mock(KeyboardEvent);
      when(mockClickLeftEvent.key).thenReturn(keyName.KEY_RIGHT);
      component.keyboardNavigation(instance(mockClickLeftEvent));

      expect(component.isKeyboardEvent).toEqual(true);
      expect(component.selectedIndex).toEqual(0);
    });
  });
});
