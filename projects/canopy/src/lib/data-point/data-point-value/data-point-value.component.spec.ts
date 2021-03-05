import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { MockRender } from 'ng-mocks';

import { LgDataPointValueComponent } from './data-point-value.component';

describe('LgDataPointValueComponent', () => {
  let component: LgDataPointValueComponent;
  let fixture: ComponentFixture<LgDataPointValueComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgDataPointValueComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = MockRender(`
    <lg-data-point-value>
      Joe Bloggs
    </lg-data-point-value>
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
    expect(el.getAttribute('class')).toContain('lg-data-point-value');
  });

  it(`should render the heading`, () => {
    expect(el.innerHTML).toContain('Joe Bloggs');
  });
});
