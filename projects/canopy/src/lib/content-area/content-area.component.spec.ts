import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { LgContentAreaComponent } from './content-area.component';
import { LgContentAreaHeaderComponent } from './content-area-header/content-area-header.component';
import { LgContentAreaContentComponent } from './content-area-content/content-area-content.component';
import { LgContentAreaTitleComponent } from './content-area-title/content-area-title.component';

describe('LgContentAreaComponent', () => {
  let component: LgContentAreaComponent;
  let fixture: ComponentFixture<LgContentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgContentAreaComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the lg-content-area class', () => {
    expect(fixture.nativeElement.classList.contains('lg-content-area')).toBe(true);
  });

  describe('content projection', () => {
    @Component({
      template: `
        <lg-content-area>
          <lg-content-area-header>
            <lg-content-area-title [headingLevel]="2">Test Header</lg-content-area-title>
          </lg-content-area-header>
          <lg-content-area-content>
            <p>Test Content</p>
          </lg-content-area-content>
        </lg-content-area>
      `,
      standalone: true,
      imports: [
        LgContentAreaComponent,
        LgContentAreaHeaderComponent,
        LgContentAreaContentComponent,
        LgContentAreaTitleComponent,
      ],
    })
    class TestHeaderContentComponent {}

    it('should project header and content components', () => {
      const testFixture = TestBed.createComponent(TestHeaderContentComponent);

      testFixture.detectChanges();

      const headerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-header',
      );
      const contentElement = testFixture.nativeElement.querySelector(
        'lg-content-area-content',
      );

      expect(headerElement).toBeTruthy();
      expect(contentElement).toBeTruthy();
      expect(headerElement.textContent).toContain('Test Header');
      expect(contentElement.textContent).toContain('Test Content');
    });

    @Component({
      template: `
        <lg-content-area>
          <lg-content-area-header>
            <lg-content-area-title [headingLevel]="2">Header</lg-content-area-title>
          </lg-content-area-header>
          <lg-content-area-content>
            <p>Content</p>
          </lg-content-area-content>
        </lg-content-area>
      `,
      standalone: true,
      imports: [
        LgContentAreaComponent,
        LgContentAreaHeaderComponent,
        LgContentAreaContentComponent,
        LgContentAreaTitleComponent,
      ],
    })
    class TestMixedContentComponent {}

    it('should project header and content with strict structure', () => {
      const testFixture = TestBed.createComponent(TestMixedContentComponent);

      testFixture.detectChanges();

      const headerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-header',
      );
      const contentElement = testFixture.nativeElement.querySelector(
        'lg-content-area-content',
      );
      const titleElement = testFixture.nativeElement.querySelector(
        'lg-content-area-title',
      );

      expect(headerElement).toBeTruthy();
      expect(contentElement).toBeTruthy();
      expect(titleElement).toBeTruthy();
      expect(titleElement.textContent).toContain('Header');
    });

    @Component({
      template: `
        <lg-content-area>
          <lg-content-area-content>
            <p>Content only</p>
          </lg-content-area-content>
        </lg-content-area>
      `,
      standalone: true,
      imports: [ LgContentAreaComponent, LgContentAreaContentComponent ],
    })
    class TestContentOnlyComponent {}

    it('should project only content when header is not provided', () => {
      const testFixture = TestBed.createComponent(TestContentOnlyComponent);

      testFixture.detectChanges();

      const headerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-header',
      );
      const contentElement = testFixture.nativeElement.querySelector(
        'lg-content-area-content',
      );

      expect(headerElement).toBeFalsy();
      expect(contentElement).toBeTruthy();
      expect(contentElement.textContent).toContain('Content only');
    });
  });
});
