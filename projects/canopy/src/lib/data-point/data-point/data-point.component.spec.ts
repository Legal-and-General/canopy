import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockComponents, MockRender } from 'ng-mocks';
import { LgDataPointLabelComponent } from '../data-point-label/data-point-label.component';
import { LgDataPointValueComponent } from '../data-point-value/data-point-value.component';
import { LgDataPointComponent } from './data-point.component';

describe('LgDataPointComponent', () => {
  let component: LgDataPointComponent;
  let fixture: ComponentFixture<LgDataPointComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LgDataPointComponent,
        MockComponents(LgDataPointLabelComponent, LgDataPointValueComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <lg-data-point>
        <lg-data-point-label>
          Heading
        </lg-data-point-label>
        <lg-data-point-value>
          Content
        </lg-data-point-value>
      </lg-data-point>
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
    expect(el.getAttribute('class')).toContain('lg-data-point');
  });

  it(`should set the header to 'header'`, () => {
    expect(el.getAttribute('class')).toContain('lg-data-point');
  });

  it('should render the heading', () => {
    const headingElement = fixture.debugElement.query(
      By.css('lg-data-point-label')
    );
    expect(headingElement.nativeElement.innerHTML).toContain('Heading');
  });

  it('should render the content component', () => {
    const contentElement = fixture.debugElement.query(
      By.css('lg-data-point-value')
    );
    expect(contentElement.nativeElement.innerHTML).toContain('Content');
  });

  describe('isListItem input', () => {
    it('should have the aria role `listitem` if isListItem is `true`', () => {
      fixture = MockRender(`
        <lg-data-point [isListItem]="true"></lg-data-point>
      `);
      debugElement = fixture.debugElement;
      component = fixture.componentInstance;
      el = debugElement.children[0].nativeElement;
      fixture.detectChanges();
      expect(el.getAttribute('role')).toEqual('listitem');
    });
    it('should have no aria role if isListItem is falsy', () => {
      fixture = MockRender(`
        <lg-data-point></lg-data-point>
      `);
      debugElement = fixture.debugElement;
      component = fixture.componentInstance;
      el = debugElement.children[0].nativeElement;
      fixture.detectChanges();
      expect(el.getAttribute('role')).toEqual(null);
    });
  });
});
