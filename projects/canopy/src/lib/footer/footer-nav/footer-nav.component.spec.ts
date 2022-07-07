import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponent, MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgFooterNavItemComponent } from '../footer-nav-item/footer-nav-item.component';

import { LgFooterNavComponent } from './footer-nav.component';

describe('LgFooterNavComponent', () => {
  let component: LgFooterNavComponent;
  let fixture: MockedComponentFixture<LgFooterNavComponent>;
  let footerNavNativeEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgFooterNavComponent, MockComponent(LgFooterNavItemComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <lg-footer-nav variant="primary">
        <lg-footer-nav-item></lg-footer-nav-item>
        <lg-footer-nav-item></lg-footer-nav-item>
      </lg-footer-nav>
    `);

    component = fixture.point.componentInstance;
    footerNavNativeEl = fixture.nativeElement.firstChild;
    fixture.detectChanges();
  });

  it('should add the generic class', () => {
    expect(footerNavNativeEl.getAttribute('class')).toContain('lg-footer-nav');
  });

  it('should add the role navigation', () => {
    expect(footerNavNativeEl.getAttribute('role')).toBe('navigation');
  });

  it('should add the modifier class for the variant', () => {
    expect(footerNavNativeEl.getAttribute('class')).toContain('lg-footer-nav--primary');
  });

  it('should add the `aria-labelledby` attribute', () => {
    expect(footerNavNativeEl.getAttribute('aria-labelledby')).toBe(
      'lg-footer-links-primary',
    );
  });

  it('should pass the variant to the children components', () => {
    expect(component.footerNavItemComponents.first.variant).toBe('primary');
    expect(component.footerNavItemComponents.last.variant).toBe('primary');
  });
});
