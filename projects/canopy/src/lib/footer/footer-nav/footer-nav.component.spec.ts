import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponent, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';

import { LgFooterNavItemComponent } from '../footer-nav-item/footer-nav-item.component';

import { LgFooterNavComponent } from './footer-nav.component';

describe('LgFooterNavComponent', () => {
  let fixture: MockedComponentFixture<LgFooterNavComponent>;
  let footerNavNativeEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgFooterNavComponent, MockComponent(LgFooterNavItemComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    ngMocks.flushTestBed();

    fixture = MockRender(`
      <lg-footer-nav>
        <lg-footer-nav-item></lg-footer-nav-item>
        <lg-footer-nav-item></lg-footer-nav-item>
      </lg-footer-nav>
    `);

    footerNavNativeEl = fixture.nativeElement.firstChild;
    fixture.detectChanges();
  });

  it('should add the generic class', () => {
    expect(footerNavNativeEl.getAttribute('class')).toContain('lg-footer-nav');
  });

  it('should add the role navigation', () => {
    expect(footerNavNativeEl.getAttribute('role')).toBe('navigation');
  });

  it('should add the aria-label attribute', () => {
    expect(footerNavNativeEl.getAttribute('aria-label')).toBe('Footer links');
  });
});
