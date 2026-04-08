import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgContentAreaContentComponent } from './content-area-content.component';

describe('LgContentAreaContentComponent', () => {
  let component: LgContentAreaContentComponent;
  let fixture: ComponentFixture<LgContentAreaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgContentAreaContentComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgContentAreaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the lg-content-area-content class', () => {
    expect(fixture.nativeElement.classList.contains('lg-content-area-content')).toBe(
      true,
    );
  });
});
