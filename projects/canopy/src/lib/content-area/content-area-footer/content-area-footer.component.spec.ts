import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { LgButtonComponent, LgButtonGroupComponent } from '../../button';

import { LgContentAreaFooterComponent } from './content-area-footer.component';

describe('LgContentAreaFooterComponent', () => {
  let component: LgContentAreaFooterComponent;
  let fixture: ComponentFixture<LgContentAreaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgContentAreaFooterComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgContentAreaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-content-area-footer',
    );
  });

  describe('content projection', () => {
    @Component({
      template: `
        <lg-content-area-footer>
          <lg-button-group>
            <button lg-button type="button">Continue</button>
          </lg-button-group>
        </lg-content-area-footer>
      `,
      standalone: true,
      imports: [ LgContentAreaFooterComponent, LgButtonComponent, LgButtonGroupComponent ],
    })
    class TestWithButtonGroupComponent {}

    it('should project lg-button-group into the footer', () => {
      const testFixture = TestBed.createComponent(TestWithButtonGroupComponent);

      testFixture.detectChanges();

      const footerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-footer',
      );
      const buttonGroup = footerElement.querySelector('lg-button-group');
      const button = footerElement.querySelector('button');

      expect(buttonGroup).toBeTruthy();
      expect(button).toBeTruthy();
      expect(button.textContent).toContain('Continue');
    });

    @Component({
      template: `
        <lg-content-area-footer>
          <div>This should not be projected</div>
        </lg-content-area-footer>
      `,
      standalone: true,
      imports: [ LgContentAreaFooterComponent ],
    })
    class TestInvalidContentComponent {}

    it('should only project lg-button-group elements', () => {
      const testFixture = TestBed.createComponent(TestInvalidContentComponent);

      testFixture.detectChanges();

      const footerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-footer',
      );
      const divElement = footerElement.querySelector('div');

      expect(divElement).toBeNull();
    });

    @Component({
      template: ' <lg-content-area-footer></lg-content-area-footer> ',
      standalone: true,
      imports: [ LgContentAreaFooterComponent ],
    })
    class TestEmptyFooterComponent {}

    it('should allow empty footer when no button group is provided', () => {
      const testFixture = TestBed.createComponent(TestEmptyFooterComponent);

      testFixture.detectChanges();

      const footerElement = testFixture.nativeElement.querySelector(
        'lg-content-area-footer',
      );

      expect(footerElement).toBeTruthy();
      expect(footerElement.textContent.trim()).toBe('');
    });
  });
});
