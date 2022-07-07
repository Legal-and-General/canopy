import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgFooterNavItemComponent } from './footer-nav-item.component';

describe('LgFooterNavComponent', () => {
  let component: LgFooterNavItemComponent;
  let fixture: MockedComponentFixture<LgFooterNavItemComponent>;
  let footerNavItemNativeEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgFooterNavItemComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <lg-footer-nav-item>
        <a href="#">Test</a>
      </lg-footer-nav-item>
    `);

    component = fixture.point.componentInstance;
    component.variant = 'secondary';
    footerNavItemNativeEl = fixture.nativeElement.firstChild;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the generic class', () => {
    expect(footerNavItemNativeEl.getAttribute('class')).toContain('lg-footer-nav-item');
  });

  it('should add the role listitem', () => {
    expect(footerNavItemNativeEl.getAttribute('role')).toBe('listitem');
  });

  it('should add the modifier class', () => {
    expect(footerNavItemNativeEl.getAttribute('class')).toContain(
      'lg-footer-nav-item--secondary',
    );
  });

  it('should add a class to the inner element', () => {
    expect(footerNavItemNativeEl.children[0].getAttribute('class')).toContain(
      'lg-footer-action',
    );
  });

  describe('when the inner element is a button', () => {
    beforeEach(() => {
      fixture = MockRender(`
        <lg-footer-nav-item>
          <button>Test</button>
        </lg-footer-nav-item>
      `);

      footerNavItemNativeEl = fixture.nativeElement.firstChild;
      fixture.detectChanges();
    });

    it('should add a modifier class to the element', () => {
      expect(footerNavItemNativeEl.children[0].getAttribute('class')).toContain(
        'lg-footer-action--button',
      );
    });

    it('should add the type button to the element', () => {
      expect(footerNavItemNativeEl.children[0].getAttribute('type')).toBe('button');
    });
  });

  it('should log an error message when the inner element is neither an anchor or a button', () => {
    spyOn(console, 'error');

    fixture = MockRender(`
        <lg-footer-nav-item>
          <p>Test</p>
        </lg-footer-nav-item>
      `);

    footerNavItemNativeEl = fixture.nativeElement.firstChild;
    fixture.detectChanges();

    expect(console.error).toHaveBeenCalledWith(
      'Unsupported tag: P. lg-footer-nav-item only supports A and BUTTON.',
    );
  });
});
