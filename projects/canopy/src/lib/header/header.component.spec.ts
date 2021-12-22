import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: LgHeaderComponent;
  let fixture: ComponentFixture<LgHeaderComponent>;

  const logo = 'http://a.b/logo.png';
  const href = 'http://a.b';
  const secondLogo = 'http://second/logo.png';
  const secondLogoHref = 'http://a.b.c';

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgHeaderComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeaderComponent);
    component = fixture.componentInstance;
    component.logo = logo;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('does not render a link if an href is not provided', () => {
    expect(fixture.debugElement.query(By.css(`a[href="${logo}"]`))).toBeNull();
  });

  it('renders a link if an href is provided', () => {
    component.logoHref = href;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(`a[href="${href}"]`))).toBeTruthy();
  });

  describe('co-branding', () => {
    it('renders a second logo when the secondLogo is specified', () => {
      component.secondLogo = secondLogo;
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.lg-header__second-logo'))).toBeTruthy();
    });

    it('does not render a second logo when the secondLogo is not specified', () => {
      expect(fixture.debugElement.query(By.css('.lg-header__second-logo'))).toBeNull();
    });

    it('does not render a link if an href is not provided', () => {
      component.secondLogo = secondLogo;
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css(`a[href="${secondLogo}"]`))).toBeNull();
    });

    it('renders a link if an href is provided', () => {
      component.secondLogo = secondLogo;
      component.secondLogoHref = secondLogoHref;
      fixture.detectChanges();

      expect(
        fixture.debugElement.query(By.css(`a[href="${secondLogoHref}"]`)),
      ).toBeTruthy();
    });
  });
});
