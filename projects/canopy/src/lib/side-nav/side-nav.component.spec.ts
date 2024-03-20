import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgSideNavComponent } from './side-nav.component';

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
});
