import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgHeaderComponent } from './header.component';

describe('FooterComponent', () => {
  let component: LgHeaderComponent;
  let fixture: ComponentFixture<LgHeaderComponent>;

  const logo = 'http://a.b/logo.png';
  const logoHeight = '10rem';
  const href = 'http://a.b';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeaderComponent);
    component = fixture.componentInstance;
    component.logo = logo;
    component.logoHeight = logoHeight;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('controls the height of the logo', () => {
    const link = fixture.debugElement.query(By.css(`[src="${logo}"]`));
    expect(link).toBeTruthy();
    expect(link.styles.height).toBe(logoHeight);
  });

  it('does not render a link if an href is not provided', () => {
    expect(fixture.debugElement.query(By.css(`a[href="${logo}"]`))).toBeFalsy();
  });

  it('renders a link if an href is provided', () => {
    component.logoHref = href;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css(`a[href="${href}"]`))
    ).toBeTruthy();
  });
});
