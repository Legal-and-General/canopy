import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgModalFooterComponent } from './modal-footer.component';

describe('LgModalFooterComponent', () => {
  let component: LgModalFooterComponent;
  let fixture: ComponentFixture<LgModalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgModalFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-modal-footer');
  });
});
