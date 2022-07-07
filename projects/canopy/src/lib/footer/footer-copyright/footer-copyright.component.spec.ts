import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgFooterCopyrightComponent } from './footer-copyright.component';

describe('LgFooterCopyrightComponent', () => {
  let component: LgFooterCopyrightComponent;
  let fixture: ComponentFixture<LgFooterCopyrightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgFooterCopyrightComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgFooterCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the generic class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-footer-copyright');
  });
});
