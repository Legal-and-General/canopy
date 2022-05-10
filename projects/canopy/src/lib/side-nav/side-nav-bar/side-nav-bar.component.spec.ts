import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgSideNavBarComponent } from './side-nav-bar.component';

describe('LgSideNavBarComponent', () => {
  let component: LgSideNavBarComponent;
  let fixture: ComponentFixture<LgSideNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgSideNavBarComponent ],
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

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-side-nav-bar');
  });
});
