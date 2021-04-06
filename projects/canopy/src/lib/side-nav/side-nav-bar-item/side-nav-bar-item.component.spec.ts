import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgSideNavBarItemComponent } from './side-nav-bar-item.component';

describe('LgSideNavBarItemComponent', () => {
  let component: LgSideNavBarItemComponent;
  let fixture: ComponentFixture<LgSideNavBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgSideNavBarItemComponent],
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

  it('should contain the description if appropriate data is present', () => {
    component.description = 'test';
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const innerEl: HTMLElement = el.querySelector('.lg-side-nav-bar-item__description');

    expect(innerEl).not.toBeNull();
    expect(innerEl.textContent).toContain(`test`);
  });

  it('should not contain the description if appropriate data is not present', () => {
    component.description = '';
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const innerEl: HTMLElement = el.querySelector('.lg-side-nav-bar-item__description');

    expect(innerEl).toBeNull();
  });
});
