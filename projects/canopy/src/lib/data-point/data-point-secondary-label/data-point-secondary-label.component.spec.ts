import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MockRender } from 'ng-mocks';

import { LgDataPointSecondaryLabelComponent } from './data-point-secondary-label.component';

describe('LgDataPointSecondaryLabelComponent', () => {
  let component: LgDataPointSecondaryLabelComponent;
  let fixture: ComponentFixture<LgDataPointSecondaryLabelComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgDataPointSecondaryLabelComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <lg-data-point-secondary-label>
        as of 01 Jan 2026
      </lg-data-point-secondary-label>
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
    expect(el.getAttribute('class')).toContain('lg-data-point-secondary-label');
  });

  it('should render the content', () => {
    expect(el.innerHTML).toContain('as of 01 Jan 2026');
  });
});
