import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgSideNavContentComponent } from './side-nav-content.component';

describe('LgSideNavContentComponent', () => {
  let component: LgSideNavContentComponent;
  let fixture: ComponentFixture<LgSideNavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgSideNavContentComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSideNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-side-nav-content');
  });

  it('should contain the tab index', () => {
    expect(fixture.nativeElement.getAttribute('tabindex')).toEqual('-1');
  });
});
