import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MockRender } from 'ng-mocks';

import { LgHeaderComponent } from './header.component';
import { LgHeaderLogoComponent } from './header-logo/header-logo.component';

describe('HeaderComponent', () => {
  let component: LgHeaderComponent;
  let fixture: ComponentFixture<LgHeaderComponent>;
  let logoDebugElements: Array<DebugElement>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgHeaderComponent, LgHeaderLogoComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <header lg-header>
        <lg-header-logo src="http://a.b/logo.png" href="http://a.b"></lg-header-logo>
      </header>
    `);

    component = fixture.componentInstance;
    logoDebugElements = fixture.debugElement.queryAll(By.css('.lg-header-logo img'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds a class to the logo', () => {
    expect(logoDebugElements[0].nativeElement.getAttribute('class')).toContain(
      'lg-header-logo__img',
    );
  });

  describe('co-branding', () => {
    it('adds a class to each of the logos', () => {
      fixture = MockRender(`
      <header lg-header>
        <lg-header-logo src="http://a.b/logo.png" href="http://a.b"></lg-header-logo>
        <lg-header-logo src="http://second/logo.png" href="http://a.b.c"></lg-header-logo>
      </header>
    `);

      component = fixture.componentInstance;
      logoDebugElements = fixture.debugElement.queryAll(By.css('.lg-header-logo img'));
      fixture.detectChanges();

      logoDebugElements.forEach((el, i) => {
        expect(el.nativeElement.getAttribute('class')).toContain(
          i === 0
            ? 'lg-header-logo__img'
            : 'lg-header-logo__second-img',
        );
      });
    });
  });
});
