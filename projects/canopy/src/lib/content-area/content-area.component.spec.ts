import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { LgButtonComponent, LgButtonGroupComponent } from '../button';

import { LgContentAreaComponent } from './content-area.component';
import { LgContentAreaHeaderComponent } from './content-area-header/content-area-header.component';
import { LgContentAreaContentComponent } from './content-area-content/content-area-content.component';
import { LgContentAreaFooterComponent } from './content-area-footer/content-area-footer.component';
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

  it('should have the default variant class', () => {
    expect(fixture.nativeElement.classList.contains('lg-content-area--default')).toBe(
      true,
    );
  });

  it('should apply the form-journey variant class when variant is set', () => {
    component.variant = 'form-journey';
    fixture.detectChanges();

    expect(
      fixture.nativeElement.classList.contains('lg-content-area--form-journey'),
    ).toBe(true);
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

    @Component({
      template: `
        <lg-content-area>
          <lg-content-area-header>
            <lg-content-area-title [headingLevel]="2">Test Header</lg-content-area-title>
          </lg-content-area-header>
          <lg-content-area-content>
            <p>Test Content</p>
          </lg-content-area-content>
          <lg-content-area-footer>
            <lg-button-group>
              <button lg-button type="button">Submit</button>
            </lg-button-group>
          </lg-content-area-footer>
        </lg-content-area>
      `,
      standalone: true,
      imports: [
        LgContentAreaComponent,
        LgContentAreaHeaderComponent,
        LgContentAreaContentComponent,
        LgContentAreaFooterComponent,
        LgContentAreaTitleComponent,
        LgButtonComponent,
        LgButtonGroupComponent,
      ],
    })
    class TestWithFooterComponent {}

    it('should project header, content, and footer components', () => {
      const testFixture = TestBed.createComponent(TestWithFooterComponent);

      testFixture.detectChanges();

      const headerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-header',
      );
      const contentElement = testFixture.nativeElement.querySelector(
        'lg-content-area-content',
      );
      const footerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-footer',
      );

      expect(headerElement).toBeTruthy();
      expect(contentElement).toBeTruthy();
      expect(footerElement).toBeTruthy();
      expect(footerElement.textContent).toContain('Submit');
    });
  });

  describe('form-journey variant', () => {
    @Component({
      template: `
        <lg-content-area variant="form-journey">
          <lg-content-area-header>
            <lg-content-area-title [headingLevel]="2">Form Journey</lg-content-area-title>
          </lg-content-area-header>
          <lg-content-area-content>
            <p>Form content</p>
          </lg-content-area-content>
          <lg-content-area-footer>
            <button>Submit</button>
          </lg-content-area-footer>
        </lg-content-area>
      `,
      standalone: true,
      imports: [
        LgContentAreaComponent,
        LgContentAreaHeaderComponent,
        LgContentAreaContentComponent,
        LgContentAreaFooterComponent,
        LgContentAreaTitleComponent,
      ],
    })
    class TestFormJourneyComponent {}

    it('should apply form-journey variant class', () => {
      const testFixture = TestBed.createComponent(TestFormJourneyComponent);

      testFixture.detectChanges();

      const contentAreaElement =
        testFixture.nativeElement.querySelector('lg-content-area');

      expect(contentAreaElement.classList.contains('lg-content-area--form-journey')).toBe(
        true,
      );
    });
  });
});
