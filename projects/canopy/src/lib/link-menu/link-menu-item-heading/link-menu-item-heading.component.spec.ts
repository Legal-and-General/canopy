import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgLinkMenuItemHeadingComponent } from './link-menu-item-heading.component';

describe('LgLinkMenuItemHeadingComponent', () => {
  let component: LgLinkMenuItemHeadingComponent;
  let fixture: ComponentFixture<LgLinkMenuItemHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgLinkMenuItemHeadingComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgLinkMenuItemHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-link-menu-item-heading',
    );
  });
});
