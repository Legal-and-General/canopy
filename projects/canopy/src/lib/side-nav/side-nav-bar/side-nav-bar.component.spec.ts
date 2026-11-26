import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgSideNavBarComponent } from './side-nav-bar.component';

describe('LgSideNavBarComponent', () => {
  let component: LgSideNavBarComponent;
  let fixture: ComponentFixture<LgSideNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgSideNavBarComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a labelled navigation region without a card wrapper', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('navigation');
    expect(fixture.nativeElement.getAttribute('aria-label')).toBe('Nav');
    expect(fixture.nativeElement.querySelector('lg-card')).toBeNull();
    expect(fixture.nativeElement.querySelector('lg-card-content')).toBeNull();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-side-nav-bar');
  });
});
