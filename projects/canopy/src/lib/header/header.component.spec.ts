import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgHeaderComponent } from './header.component';

describe('FooterComponent', () => {
  let component: LgHeaderComponent;
  let fixture: ComponentFixture<LgHeaderComponent>;

  const logo = 'http://a.b/logo.png';
  const href = 'http://a.b';

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
    expect(fixture.debugElement.query(By.css(`a[href="${logo}"]`))).toBeFalsy();
  });

  it('renders a link if an href is provided', () => {
    component.logoHref = href;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(`a[href="${href}"]`))).toBeTruthy();
  });
});
