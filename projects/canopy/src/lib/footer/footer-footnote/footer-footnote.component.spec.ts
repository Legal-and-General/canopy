import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgFooterFootnoteComponent } from './footer-footnote.component';

describe('LgFooterFootnoteComponent', () => {
  let component: LgFooterFootnoteComponent;
  let fixture: ComponentFixture<LgFooterFootnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgFooterFootnoteComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgFooterFootnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class', () => {
    expect(fixture.nativeElement.classList.contains('lg-footer-footnote')).toBe(true);
  });
});
