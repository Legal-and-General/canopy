import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgFooterLogoComponent } from './footer-logo.component';

describe('LgFooterLogoComponent', () => {
  let component: LgFooterLogoComponent;
  let fixture: ComponentFixture<LgFooterLogoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgFooterLogoComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgFooterLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the generic class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-footer-logo');
  });
});
