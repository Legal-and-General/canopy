import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponent, MockRender, ngMocks } from 'ng-mocks';

import { LgLinkMenuComponent } from '../../link-menu';

import { LgCardFooterComponent } from './card-footer.component';

describe('LgCardFooterComponent', () => {
  let component: LgCardFooterComponent;
  let fixture: ComponentFixture<LgCardFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgCardFooterComponent, MockComponent(LgLinkMenuComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    ngMocks.flushTestBed();

    fixture = MockRender('<lg-card-footer></lg-card-footer>');
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    const footer: HTMLElement = fixture.nativeElement.querySelector('lg-card-footer');

    expect(footer.classList.contains('lg-card-footer')).toBe(true);
  });

  it('should project allowed anchor actions', () => {
    ngMocks.flushTestBed();

    const hostFixture = MockRender(`
      <lg-card-footer>
        <a href="#">Primary action</a>
      </lg-card-footer>
    `);

    hostFixture.detectChanges();

    const footer: HTMLElement = hostFixture.nativeElement.querySelector('lg-card-footer');

    expect(footer.querySelector('a')).toBeTruthy();
    expect(footer.textContent).toContain('Primary action');
  });

  it('should not project plain text content', () => {
    ngMocks.flushTestBed();

    const hostFixture = MockRender(
      '<lg-card-footer> Footer text content </lg-card-footer>',
    );

    hostFixture.detectChanges();

    const footer: HTMLElement = hostFixture.nativeElement.querySelector('lg-card-footer');

    expect(footer.textContent?.trim()).toBe('');
  });

  it('should project only allowed content when mixed content is provided', () => {
    ngMocks.flushTestBed();

    const hostFixture = MockRender(
      `
      <lg-card-footer>
        <a href="#">Continue</a>
        <p>Unsupported paragraph</p>
      </lg-card-footer>
    `,
    );

    hostFixture.detectChanges();

    const footer: HTMLElement = hostFixture.nativeElement.querySelector('lg-card-footer');

    expect(footer.querySelector('a')).toBeTruthy();
    expect(footer.querySelector('p')).toBeNull();
    expect(footer.textContent).toContain('Continue');
  });

  it('should add link menu modifier class when link menu content is projected', () => {
    ngMocks.flushTestBed();

    const hostFixture = MockRender(`
      <lg-card-footer>
        <lg-link-menu></lg-link-menu>
      </lg-card-footer>
    `);

    hostFixture.detectChanges();

    const footer: HTMLElement = hostFixture.nativeElement.querySelector('lg-card-footer');

    expect(footer.classList.contains('lg-card-footer--link-menu')).toBe(true);
  });
});
