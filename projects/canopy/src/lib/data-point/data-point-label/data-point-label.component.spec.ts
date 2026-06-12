import { By } from '@angular/platform-browser';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponent, MockRender, ngMocks } from 'ng-mocks';

import { LgHeadingComponent } from '../../heading';

import { LgDataPointLabelComponent } from './data-point-label.component';

describe('LgDataPointLabelComponent', () => {
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgDataPointLabelComponent, MockComponent(LgHeadingComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    ngMocks.flushTestBed();

    const fixture = MockRender(`
      <lg-data-point-label [headingLevel]="4">
        Name on account
      </lg-data-point-label>
    `);

    el = fixture.debugElement.children[0].nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(el).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-data-point-label');
  });

  it('should render an lg-heading with the provided headingLevel', () => {
    ngMocks.flushTestBed();

    const fixture = MockRender(`
      <lg-data-point-label [headingLevel]="3">Label</lg-data-point-label>
    `);

    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.directive(LgHeadingComponent));

    expect(heading).toBeTruthy();
    expect(heading.componentInstance.level).toBe(3);
  });
});
