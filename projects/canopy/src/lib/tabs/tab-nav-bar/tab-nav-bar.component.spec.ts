import { TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { instance, mock, when } from '@typestrong/ts-mockito';
import { MockedComponentFixture, MockRender } from 'ng-mocks';

import { keyName } from '../../utils/keyboard-keys';

import { LgTabNavBarComponent } from './tab-nav-bar.component';
import { LgTabNavBarLinkDirective } from './tab-nav-bar-link.directive';

describe('LgTabNavBarComponent', () => {
  let component: LgTabNavBarComponent;
  let fixture: MockedComponentFixture<LgTabNavBarComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgTabNavBarComponent, LgTabNavBarLinkDirective ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <lg-tab-nav-bar label="Tabbed Navigation Label">
        <a lgTabNavBarLink href="/" [isActive]="true">Tab 1</a>
        <a lgTabNavBarLink href="/">Tab 2</a>
        <a lgTabNavBarLink href="/">Tab 3</a>
        <a lgTabNavBarLink href="/">Tab 4</a>
      </lg-tab-nav-bar>
    `);

    debugElement = fixture.debugElement;
    component = debugElement.query(By.directive(LgTabNavBarComponent)).componentInstance;
    el = debugElement.query(By.directive(LgTabNavBarComponent)).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the role `tablist`', () => {
    expect(el.getAttribute('role')).toEqual('tablist');
  });

  it('should have the default class', () => {
    expect(el.classList.contains('lg-tab-nav-bar')).toBeTruthy();
  });

  it('should set the aria-label attribute', () => {
    expect(el.getAttribute('aria-label')).toEqual('Tabbed Navigation Label');
  });

  describe('tabs', () => {
    let tabs: Array<DebugElement>;

    beforeEach(() => {
      tabs = debugElement.queryAll(By.directive(LgTabNavBarLinkDirective));
    });

    it('should have correct number of tabs', () => {
      expect(tabs.length).toEqual(4);
    });

    it('selected tab should have correct attributes applied', () => {
      expect(tabs[0].nativeElement.getAttribute('tabIndex')).not.toEqual(-1);
      expect(tabs[0].nativeElement.getAttribute('aria-selected')).toEqual('true');

      expect(tabs[0].nativeElement.getAttribute('class')).toContain(
        'lg-tab-nav-bar-link--selected',
      );

      expect(tabs[0].nativeElement.getAttribute('keyboard-focus')).not.toEqual('true');
    });
  });

  describe('Selected tab change', () => {
    let tabs: Array<DebugElement>;

    beforeEach(() => {
      tabs = debugElement.queryAll(By.directive(LgTabNavBarLinkDirective));
      component.updateSelectedTab(1);
      fixture.detectChanges();
    });

    it('sets the selected index to tab index', () => {
      expect(component.selectedIndex).toEqual(1);
    });

    it('selects tab', () => {
      expect(tabs[1].nativeElement.getAttribute('class')).toContain(
        'lg-tab-nav-bar-link--selected',
      );
    });

    it('deselects other tabs', () => {
      expect(tabs[0].nativeElement.getAttribute('class')).not.toContain(
        'lg-tab-nav-bar-link--selected',
      );

      expect(tabs[2].nativeElement.getAttribute('class')).not.toContain(
        'lg-tab-nav-bar-link--selected',
      );

      expect(tabs[3].nativeElement.getAttribute('class')).not.toContain(
        'lg-tab-nav-bar-link--selected',
      );
    });
  });

  describe('keyboard navigation', () => {
    let mockKeyEvent: KeyboardEvent;

    beforeEach(() => {
      component.selectedIndex = 0;
      mockKeyEvent = mock(KeyboardEvent);
    });

    it('should select the next tab when using right key', () => {
      when(mockKeyEvent.key).thenReturn(keyName.KEY_RIGHT);
      const selectSpy = spyOn(component.tabs[1], 'selectByKeyboard');

      component.onKeyUp(instance(mockKeyEvent));

      expect(component.selectedIndex).toEqual(1);
      expect(selectSpy).toHaveBeenCalled();
    });

    it('should select the next tab when using down key', () => {
      when(mockKeyEvent.key).thenReturn(keyName.KEY_DOWN);
      const selectSpy = spyOn(component.tabs[1], 'selectByKeyboard');

      component.onKeyUp(instance(mockKeyEvent));

      expect(component.selectedIndex).toEqual(1);
      expect(selectSpy).toHaveBeenCalled();
    });

    it('should select the previous tab when using left key', () => {
      when(mockKeyEvent.key).thenReturn(keyName.KEY_LEFT);
      const selectSpy = spyOn(component.tabs[3], 'selectByKeyboard');

      component.onKeyUp(instance(mockKeyEvent));

      expect(component.selectedIndex).toEqual(3);
      expect(selectSpy).toHaveBeenCalled();
    });

    it('should select the previous tab when using up key', () => {
      when(mockKeyEvent.key).thenReturn(keyName.KEY_UP);
      const selectSpy = spyOn(component.tabs[3], 'selectByKeyboard');

      component.onKeyUp(instance(mockKeyEvent));

      expect(component.selectedIndex).toEqual(3);
      expect(selectSpy).toHaveBeenCalled();
    });
  });
});
