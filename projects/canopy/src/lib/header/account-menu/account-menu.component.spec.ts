import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgAccountMenuComponent } from './account-menu.component';

describe('LgAccountMenuComponent', () => {
  let component: LgAccountMenuComponent;
  let fixture: ComponentFixture<LgAccountMenuComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgAccountMenuComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgAccountMenuComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-account-menu');
  });

  it('should set the role attribute', () => {
    expect(el.getAttribute('role')).toBe('list');
  });

  it('should set the aria label attribute', () => {
    expect(el.getAttribute('aria-label')).toBe('Account menu');
  });
});
