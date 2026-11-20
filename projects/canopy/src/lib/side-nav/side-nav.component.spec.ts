import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  provideRouter,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

import {
  LgContentAreaComponent,
  LgContentAreaContentComponent,
  LgContentAreaHeaderComponent,
} from '../content-area';
import {
  LgLinkMenuComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemTextComponent,
} from '../link-menu';
import {
  LgInputDirective,
  LgInputFieldComponent,
  LgSelectDirective,
  LgSelectFieldComponent,
} from '../forms';

import { LgSideNavComponent } from './side-nav.component';
import { LgSideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { LgSideNavBarLinkDirective } from './side-nav-bar-link/side-nav-bar-link.directive';
import { LgSideNavContentComponent } from './side-nav-content/side-nav-content.component';

@Component({
  imports: [
    LgInputDirective,
    LgInputFieldComponent,
    LgSelectDirective,
    LgSelectFieldComponent,
  ],
  template: `
    <form>
      <h2>{{ route.snapshot.data['title'] }}</h2>
      <lg-input-field [block]="true">
        Name
        <input lgInput autocomplete="name" />
      </lg-input-field>
      <lg-select-field [block]="true">
        Marital status
        <select lgSelect>
          <option value="single">Single</option>
        </select>
      </lg-select-field>
    </form>
  `,
})
class RoutedContentComponent {
  route = inject(ActivatedRoute);
}

@Component({
  imports: [
    LgContentAreaComponent,
    LgContentAreaContentComponent,
    LgContentAreaHeaderComponent,
    LgSideNavComponent,
    LgSideNavBarComponent,
    LgSideNavBarLinkDirective,
    LgSideNavContentComponent,
    LgLinkMenuComponent,
    LgLinkMenuItemComponent,
    LgLinkMenuItemTextComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  template: `
    <lg-content-area>
      @if (showHeader) {
        <lg-content-area-header>
          <a href="/">Back</a>
        </lg-content-area-header>
      }
      <lg-content-area-content>
        <lg-side-nav>
          <lg-side-nav-bar label="Account navigation">
            <lg-link-menu>
              @for (page of pages; track page) {
                <a
                  [routerLink]="'/' + page"
                  routerLinkActive
                  #activeRoute="routerLinkActive"
                  ariaCurrentWhenActive="page"
                  [isActive]="activeRoute.isActive"
                  lgSideBarNavLink
                >
                  <lg-link-menu-item [rightIcon]="null">
                    <lg-link-menu-item-text>{{ page }}</lg-link-menu-item-text>
                  </lg-link-menu-item>
                </a>
              }
            </lg-link-menu>
          </lg-side-nav-bar>
          <lg-side-nav-content><router-outlet /></lg-side-nav-content>
        </lg-side-nav>
      </lg-content-area-content>
    </lg-content-area>
  `,
})
class SideNavPatternComponent {
  pages = [ 'overview', 'contact' ];
  showHeader = false;
}

describe('LgSideNavComponent', () => {
  let component: LgSideNavComponent;
  let fixture: ComponentFixture<LgSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgSideNavComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-side-nav');
  });

  it('should not render an additional content area', () => {
    expect(fixture.nativeElement.querySelector('lg-content-area')).toBeNull();
    expect(fixture.nativeElement.querySelector('.lg-side-nav__layout')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('lg-content-area-header')).toBeNull();
    expect(fixture.nativeElement.querySelector('lg-card')).toBeNull();
  });
});

describe('Side nav with a link menu inside a content area', () => {
  let fixture: ComponentFixture<SideNavPatternComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SideNavPatternComponent ],
      providers: [
        provideRouter([
          {
            path: 'overview',
            component: RoutedContentComponent,
            data: { title: 'Overview' },
          },
          {
            path: 'contact',
            component: RoutedContentComponent,
            data: { title: 'Contact details' },
          },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavPatternComponent);
    fixture.autoDetectChanges();
    router = TestBed.inject(Router);
    await fixture.whenStable();
  });

  it('should project navigation and routed content into the outer content area', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelectorAll('lg-content-area')).toHaveLength(1);

    expect(
      element.querySelector('lg-content-area > lg-content-area-content > lg-side-nav'),
    ).toBeTruthy();

    expect(
      element.querySelector(
        '.lg-side-nav__layout > .lg-side-nav__navigation > lg-side-nav-bar',
      ),
    ).toBeTruthy();

    expect(
      element.querySelector(
        '.lg-side-nav__layout > .lg-side-nav__content > lg-side-nav-content',
      ),
    ).toBeTruthy();

    expect(
      element.querySelectorAll('.lg-side-nav__layout > lg-content-area-content'),
    ).toHaveLength(2);

    expect(element.querySelector('lg-card')).toBeNull();
    expect(element.querySelector('lg-card-content')).toBeNull();
    expect(element.querySelector('lg-side-nav-bar lg-link-menu')).toBeTruthy();
    expect(element.querySelector('lg-side-nav-content router-outlet')).toBeTruthy();

    expect(element.querySelector('[role="navigation"]')?.getAttribute('aria-label')).toBe(
      'Account navigation',
    );
  });

  it('should expose the routed form to the scoped content spacing selectors', async () => {
    await router.navigateByUrl('/overview');
    await fixture.whenStable();

    const element: HTMLElement = fixture.nativeElement;
    const form = element.querySelector('.lg-side-nav-content > router-outlet + * > form');

    expect(form).not.toBeNull();

    expect(
      form?.querySelectorAll(
        ':scope > h2, :scope > lg-input-field, :scope > lg-select-field',
      ),
    ).toHaveLength(3);

    expect(element.querySelectorAll('lg-content-area')).toHaveLength(1);
  });

  it('should update the URL, content, current item and focus when a link is selected', async () => {
    await router.navigateByUrl('/overview');
    await fixture.whenStable();

    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll<HTMLAnchorElement>('lg-link-menu a');

    expect(links[0].getAttribute('aria-current')).toBe('page');

    expect(element.querySelector('lg-side-nav-content')?.textContent).toContain(
      'Overview',
    );

    links[1].click();
    await fixture.whenStable();

    expect(router.url).toBe('/contact');

    expect(element.querySelector('lg-side-nav-content')?.textContent).toContain(
      'Contact details',
    );

    expect(links[0].getAttribute('aria-current')).toBeNull();
    expect(links[1].getAttribute('aria-current')).toBe('page');
    expect(links[1].classList.contains('lg-side-nav-bar-link--selected')).toBe(true);
    expect(document.activeElement).toBe(element.querySelector('lg-side-nav-content'));
  });

  it('should render an optional outer header outside the side nav layout', () => {
    fixture.componentInstance.showHeader = true;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelectorAll('lg-content-area-header')).toHaveLength(1);

    expect(
      element.querySelector('lg-content-area > lg-content-area-header a')?.textContent,
    ).toBe('Back');

    expect(
      element.querySelector('.lg-side-nav__layout lg-content-area-header'),
    ).toBeNull();

    fixture.componentInstance.showHeader = false;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    expect(element.querySelector('lg-content-area-header')).toBeNull();
  });

  it('should reflect direct navigation and subsequent route changes', async () => {
    await router.navigateByUrl('/contact');
    await fixture.whenStable();

    expect(
      fixture.nativeElement.querySelector('[aria-current="page"]').textContent,
    ).toContain('contact');

    await router.navigateByUrl('/overview');
    await fixture.whenStable();

    expect(
      fixture.nativeElement.querySelector('[aria-current="page"]').textContent,
    ).toContain('overview');
  });
});
