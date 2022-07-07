import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MockRender } from 'ng-mocks';

import { LgFooterModule } from './footer.module';
import { LgFooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: LgFooterComponent;
  let fixture: ComponentFixture<LgFooterComponent>;
  let logoDebugElements: Array<DebugElement>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgFooterModule ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <footer lg-footer>
        <lg-footer-logo src="http://a.b/logo.png" alt="logo alt"></lg-footer-logo>
      </footer>
    `);

    component = fixture.componentInstance;
    logoDebugElements = fixture.debugElement.queryAll(By.css('.lg-footer-logo img'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds a class to the logo', () => {
    expect(logoDebugElements[0].nativeElement.getAttribute('class')).toContain(
      'lg-footer-logo__img',
    );
  });

  describe('co-branding', () => {
    it('adds a class to each of the logos', () => {
      fixture = MockRender(`
      <footer lg-footer>
        <lg-footer-logo src="http://a.b/logo.png" alt="logo alt"></lg-footer-logo>
        <lg-footer-logo src="http://a.b.c/logo.png" alt="second logo alt"></lg-footer-logo>
      </footer>
    `);

      component = fixture.componentInstance;
      logoDebugElements = fixture.debugElement.queryAll(By.css('.lg-footer-logo img'));
      fixture.detectChanges();

      logoDebugElements.forEach((el, i) => {
        expect(el.nativeElement.getAttribute('class')).toContain(
          i === 0
            ? 'lg-footer-logo__img'
            : 'lg-footer-logo__second-img',
        );
      });
    });
  });
});
