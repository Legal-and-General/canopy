import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockComponent, MockRender } from 'ng-mocks';

import { LgHeadingComponent } from '../../heading';

import { LgDataPointLabelComponent } from './data-point-label.component';

describe('LgDataPointLabelComponent', () => {
  let component: LgDataPointLabelComponent;
  let fixture: ComponentFixture<LgDataPointLabelComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ LgDataPointLabelComponent, MockComponent(LgHeadingComponent) ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = MockRender(`
      <lg-data-point-label [headingLevel]="4">
        Name on account
      </lg-data-point-label>
    `);

    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    el = debugElement.children[0].nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-data-point-label');
  });

  it('should wrap the content with the lg heading', () => {
    const headingElement = fixture.debugElement.query(By.css('lg-heading'));

    expect(headingElement.nativeElement.tagName.toLowerCase()).toEqual('lg-heading');
  });

  it('should render the heading', () => {
    expect(el.innerHTML).toContain('Name on account');
  });
});
