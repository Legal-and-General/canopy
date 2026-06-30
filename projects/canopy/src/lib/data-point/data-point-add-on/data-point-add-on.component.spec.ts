import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MockRender } from 'ng-mocks';

import { LgDataPointAddOnComponent } from './data-point-add-on.component';

describe('LgDataPointAddOnComponent', () => {
  let component: LgDataPointAddOnComponent;
  let fixture: ComponentFixture<LgDataPointAddOnComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ LgDataPointAddOnComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = MockRender(`
      <lg-data-point-add-on>
        <a href="#">View details</a>
      </lg-data-point-add-on>
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
    expect(el.getAttribute('class')).toContain('lg-data-point-add-on');
  });

  it('should render the content', () => {
    expect(el.querySelector('a').textContent.trim()).toBe('View details');
  });
});
