import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgSideNavBarItemContentComponent } from './side-nav-bar-item-content.component';

describe('LgSideNavBarItemContentComponent', () => {
  let component: LgSideNavBarItemContentComponent;
  let fixture: ComponentFixture<LgSideNavBarItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgSideNavBarItemContentComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSideNavBarItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-side-nav-bar-item-content',
    );
  });
});
