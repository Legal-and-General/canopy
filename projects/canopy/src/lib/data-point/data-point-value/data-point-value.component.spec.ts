import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MockRender, MockedComponentFixture } from 'ng-mocks';

import { LgDataPointComponent } from '../data-point/data-point.component';

import { LgDataPointValueComponent } from './data-point-value.component';

describe('LgDataPointValueComponent', () => {
  let component: LgDataPointValueComponent;
  let fixture: MockedComponentFixture;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ LgDataPointValueComponent, LgDataPointComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = MockRender(`
    <lg-data-point-value>
      Joe Bloggs
    </lg-data-point-value>
    `);

    debugElement = fixture.debugElement;
    component = fixture.point.componentInstance;
    el = debugElement.children[0].nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-data-point-value');
  });

  it('should not apply the card modifier class by default', () => {
    expect(el.getAttribute('class')).not.toContain('lg-data-point-value--card');
  });

  it('should not apply the form modifier class by default', () => {
    expect(el.getAttribute('class')).not.toContain('lg-data-point-value--form');
  });

  it('should render the heading', () => {
    expect(el.innerHTML).toContain('Joe Bloggs');
  });

  describe('size input', () => {
    it('should apply the sm modifier class by default', () => {
      expect(el.getAttribute('class')).toContain('lg-data-point-value--sm');
    });

    it('should apply the md modifier class when size is md', () => {
      const localFixture = MockRender(
        '<lg-data-point-value size=\'md\'>Value</lg-data-point-value>',
      );
      const localEl = localFixture.debugElement.children[0].nativeElement;

      localFixture.detectChanges();

      expect(localEl.getAttribute('class')).toContain('lg-data-point-value--md');
    });

    it('should apply the lg modifier class when size is lg', () => {
      const localFixture = MockRender(
        '<lg-data-point-value size=\'lg\'>Value</lg-data-point-value>',
      );
      const localEl = localFixture.debugElement.children[0].nativeElement;

      localFixture.detectChanges();

      expect(localEl.getAttribute('class')).toContain('lg-data-point-value--lg');
    });
  });

  describe('variant', () => {
    it('should apply the form modifier class when the parent data point has the form variant', () => {
      const localFixture = MockRender(`
        <lg-data-point variant="form">
          <lg-data-point-value size="lg">Value</lg-data-point-value>
        </lg-data-point>
      `);
      const valueEl = localFixture.debugElement.query(
        dbEl => dbEl.nativeElement.tagName.toLowerCase() === 'lg-data-point-value',
      ).nativeElement;

      localFixture.detectChanges();

      expect(valueEl.getAttribute('class')).toContain('lg-data-point-value--form');
    });

    it('should not apply the form modifier class when the parent data point has the card variant', () => {
      const localFixture = MockRender(`
        <lg-data-point variant="card">
          <lg-data-point-value size="lg">Value</lg-data-point-value>
        </lg-data-point>
      `);
      const valueEl = localFixture.debugElement.query(
        dbEl => dbEl.nativeElement.tagName.toLowerCase() === 'lg-data-point-value',
      ).nativeElement;

      localFixture.detectChanges();

      expect(valueEl.getAttribute('class')).not.toContain('lg-data-point-value--form');
    });
  });
});
