import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgFooterStickersComponent } from './footer-stickers.component';

describe('LgFooterStickersComponent', () => {
  let component: LgFooterStickersComponent;
  let fixture: ComponentFixture<LgFooterStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgFooterStickersComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgFooterStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class', () => {
    expect(fixture.nativeElement.classList.contains('lg-footer-stickers')).toBe(true);
  });
});
