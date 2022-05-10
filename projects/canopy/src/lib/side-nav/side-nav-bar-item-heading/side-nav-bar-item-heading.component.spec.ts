import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgSideNavBarItemHeadingComponent } from './side-nav-bar-item-heading.component';

describe('LgSideNavBarItemHeadingComponent', () => {
  let component: LgSideNavBarItemHeadingComponent;
  let fixture: ComponentFixture<LgSideNavBarItemHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgSideNavBarItemHeadingComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSideNavBarItemHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-side-nav-bar-item-heading',
    );
  });
});
