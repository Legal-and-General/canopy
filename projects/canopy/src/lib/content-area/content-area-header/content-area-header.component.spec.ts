import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

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
          <h2>Header Content</h2>
          <p>Subtitle content</p>
        </lg-content-area-header>
      `,
      standalone: true,
      imports: [ LgContentAreaHeaderComponent ],
    })
    class TestContentComponent {}

    it('should project content into the header', () => {
      const testFixture = TestBed.createComponent(TestContentComponent);

      testFixture.detectChanges();

      const headerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-header',
      );
      const heading = headerElement.querySelector('h2');
      const paragraph = headerElement.querySelector('p');

      expect(heading).toBeTruthy();
      expect(heading.textContent).toContain('Header Content');
      expect(paragraph).toBeTruthy();
      expect(paragraph.textContent).toContain('Subtitle content');
    });

    @Component({
      template: `
        <lg-content-area-header>
          <div class="custom-content">Custom header content</div>
        </lg-content-area-header>
      `,
      standalone: true,
      imports: [ LgContentAreaHeaderComponent ],
    })
    class TestCustomContentComponent {}

    it('should project custom content elements', () => {
      const testFixture = TestBed.createComponent(TestCustomContentComponent);

      testFixture.detectChanges();

      const customContent = testFixture.nativeElement.querySelector('.custom-content');

      expect(customContent).toBeTruthy();
      expect(customContent.textContent).toContain('Custom header content');
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
  });
});
