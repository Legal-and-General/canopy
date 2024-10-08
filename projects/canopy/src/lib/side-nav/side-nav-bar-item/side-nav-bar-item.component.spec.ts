import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { LgIconComponent } from '../../icon';

import { LgSideNavBarItemComponent } from './side-nav-bar-item.component';

describe('LgSideNavBarItemComponent', () => {
  let component: LgSideNavBarItemComponent;
  let fixture: ComponentFixture<LgSideNavBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgSideNavBarItemComponent, MockComponent(LgIconComponent) ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSideNavBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-side-nav-bar-item');
  });
});
