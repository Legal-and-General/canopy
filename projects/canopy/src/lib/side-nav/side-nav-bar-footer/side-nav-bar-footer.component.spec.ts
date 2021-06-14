import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgSideNavBarFooterComponent } from './side-nav-bar-footer.component';

describe('LgSideNavBarFooterComponent', () => {
  let component: LgSideNavBarFooterComponent;
  let fixture: ComponentFixture<LgSideNavBarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgSideNavBarFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSideNavBarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-side-nav-bar-footer',
    );
  });
});
