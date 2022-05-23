import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgLinkMenuItemContentComponent } from './link-menu-item-content.component';

describe('LgLinkMenuItemContentComponent', () => {
  let component: LgLinkMenuItemContentComponent;
  let fixture: ComponentFixture<LgLinkMenuItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgLinkMenuItemContentComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgLinkMenuItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-link-menu-item-content',
    );
  });
});
