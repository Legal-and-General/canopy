import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MockRender } from 'ng-mocks';

import { LgTabNavContentComponent } from './tab-nav-content.component';

describe('LgTabNavBarComponent', () => {
  let component: LgTabNavContentComponent;
  let fixture: ComponentFixture<LgTabNavContentComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgTabNavContentComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = MockRender(`
      <lg-tab-nav-content selectedTabId="test-0">
        <p>Test content<p>
      </lg-tab-nav-content>
    `);
    debugElement = fixture.debugElement;
    component = debugElement.query(
      By.directive(LgTabNavContentComponent),
    ).componentInstance;
    el = debugElement.query(By.directive(LgTabNavContentComponent)).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default class', () => {
    expect(el.classList.contains('lg-tab-nav-content')).toBeTruthy();
  });

  it('should have the role `tabpanel`', () => {
    expect(el.getAttribute('role')).toEqual('tabpanel');
  });

  it('should set the correct aria labelledby attribute', () => {
    expect(el.getAttribute('aria-labelledby')).toEqual('test-0');
  });
});
