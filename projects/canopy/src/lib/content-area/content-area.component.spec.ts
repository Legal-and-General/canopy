import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { LgContentAreaComponent } from './content-area.component';
import { LgContentAreaHeaderComponent } from './content-area-header/content-area-header.component';
import { LgContentAreaContentComponent } from './content-area-content/content-area-content.component';

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
            <h2>Test Header</h2>
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
          <p class="default-content">Default projected content</p>
        </lg-content-area>
      `,
      standalone: true,
      imports: [ LgContentAreaComponent ],
    })
    class TestDefaultContentComponent {}

    it('should project default content when header and content components are not used', () => {
      const testFixture = TestBed.createComponent(TestDefaultContentComponent);

      testFixture.detectChanges();

      const defaultContent = testFixture.nativeElement.querySelector('.default-content');

      expect(defaultContent).toBeTruthy();
      expect(defaultContent.textContent).toContain('Default projected content');
    });

    @Component({
      template: `
        <lg-content-area>
          <lg-content-area-header>
            <h2>Header</h2>
          </lg-content-area-header>
          <lg-content-area-content>
            <p>Content</p>
          </lg-content-area-content>
          <div class="additional-content">Additional content</div>
        </lg-content-area>
      `,
      standalone: true,
      imports: [
        LgContentAreaComponent,
        LgContentAreaHeaderComponent,
        LgContentAreaContentComponent,
      ],
    })
    class TestMixedContentComponent {}

    it('should project header, content, and additional default content', () => {
      const testFixture = TestBed.createComponent(TestMixedContentComponent);

      testFixture.detectChanges();

      const headerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-header',
      );
      const contentElement = testFixture.nativeElement.querySelector(
        'lg-content-area-content',
      );
      const additionalContent =
        testFixture.nativeElement.querySelector('.additional-content');

      expect(headerElement).toBeTruthy();
      expect(contentElement).toBeTruthy();
      expect(additionalContent).toBeTruthy();
      expect(additionalContent.textContent).toContain('Additional content');
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
