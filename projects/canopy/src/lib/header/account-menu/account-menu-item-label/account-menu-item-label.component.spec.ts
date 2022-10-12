import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgAccountMenuItemLabelComponent } from './account-menu-item-label.component';

describe('LgAccountMenuItemLabelComponent', () => {
  let component: LgAccountMenuItemLabelComponent;
  let fixture: ComponentFixture<LgAccountMenuItemLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgAccountMenuItemLabelComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgAccountMenuItemLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(fixture.debugElement.nativeElement.getAttribute('class')).toContain(
      'lg-account-menu-item-label',
    );
  });
});
