import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { LgContentAreaTitleComponent } from '../content-area-title/content-area-title.component';

import { LgContentAreaHeaderComponent } from './content-area-header.component';

describe('LgContentAreaHeaderComponent', () => {
  let component: LgContentAreaHeaderComponent;
  let fixture: ComponentFixture<LgContentAreaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgContentAreaHeaderComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgContentAreaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the lg-content-area-header class', () => {
    expect(fixture.nativeElement.classList.contains('lg-content-area-header')).toBe(true);
  });

  describe('content projection', () => {
    @Component({
      template: `
        <lg-content-area-header>
          <lg-content-area-title [headingLevel]="2">Header Content</lg-content-area-title>
        </lg-content-area-header>
      `,
      standalone: true,
      imports: [ LgContentAreaHeaderComponent, LgContentAreaTitleComponent ],
    })
    class TestContentComponent {}

    it('should project lg-content-area-title into the header', () => {
      const testFixture = TestBed.createComponent(TestContentComponent);

      testFixture.detectChanges();

      const headerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-header',
      );
      const titleElement = headerElement.querySelector('lg-content-area-title');
      const heading = headerElement.querySelector('lg-heading');

      expect(titleElement).toBeTruthy();
      expect(heading).toBeTruthy();
      expect(heading.textContent).toContain('Header Content');
    });

    @Component({
      template: ' <lg-content-area-header></lg-content-area-header> ',
      standalone: true,
      imports: [ LgContentAreaHeaderComponent ],
    })
    class TestEmptyContentComponent {}

    it('should handle empty content projection', () => {
      const testFixture = TestBed.createComponent(TestEmptyContentComponent);

      testFixture.detectChanges();

      const headerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-header',
      );

      expect(headerElement).toBeTruthy();
      expect(headerElement.textContent.trim()).toBe('');
    });

    @Component({
      template: `
        <lg-content-area-header>
          <div>This should not be projected</div>
          <lg-content-area-title [headingLevel]="2">Valid Content</lg-content-area-title>
        </lg-content-area-header>
      `,
      standalone: true,
      imports: [ LgContentAreaHeaderComponent, LgContentAreaTitleComponent ],
    })
    class TestSelectiveProjectionComponent {}

    it('should only project lg-content-area-title and anchor elements', () => {
      const testFixture = TestBed.createComponent(TestSelectiveProjectionComponent);

      testFixture.detectChanges();

      const headerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-header',
      );
      const divElement = headerElement.querySelector('div');
      const titleElement = headerElement.querySelector('lg-content-area-title');

      expect(divElement).toBeNull();
      expect(titleElement).toBeTruthy();
    });

    @Component({
      template: `
        <lg-content-area-header>
          <lg-content-area-title [headingLevel]="2">Title</lg-content-area-title>
          <a href="#">Link</a>
        </lg-content-area-header>
      `,
      standalone: true,
      imports: [ LgContentAreaHeaderComponent, LgContentAreaTitleComponent ],
    })
    class TestAnchorProjectionComponent {}

    it('should project anchor elements', () => {
      const testFixture = TestBed.createComponent(TestAnchorProjectionComponent);

      testFixture.detectChanges();

      const headerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-header',
      );
      const anchorElement = headerElement.querySelector('a');
      const titleElement = headerElement.querySelector('lg-content-area-title');

      expect(anchorElement).toBeTruthy();
      expect(anchorElement.textContent).toContain('Link');
      expect(titleElement).toBeTruthy();
    });
  });
});
