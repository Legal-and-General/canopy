import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgHeaderLogoComponent } from './header-logo.component';

describe('LgHeaderLogosComponent', () => {
  let component: LgHeaderLogoComponent;
  let fixture: ComponentFixture<LgHeaderLogoComponent>;
  const src = 'http://a.b/logo.png';
  const href = 'http://a.b';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgHeaderLogoComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeaderLogoComponent);
    component = fixture.componentInstance;
    component.src = src;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should add the generic header logo class', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-header-logo');
  });

  it('does not render a link if an href is not provided', () => {
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css(`a[href="${src}"]`))).toBeNull();
  });

  it('renders a link if an href is provided', () => {
    component.href = href;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css(`a[href="${href}"]`))).toBeTruthy();
  });
});
