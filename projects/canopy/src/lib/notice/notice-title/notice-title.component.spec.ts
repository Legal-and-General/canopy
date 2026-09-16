import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgNoticeTitleComponent } from './notice-title.component';

describe('LgNoticeTitleComponent', () => {
  let component: LgNoticeTitleComponent;
  let fixture: ComponentFixture<LgNoticeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgNoticeTitleComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgNoticeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-notice-title');
  });
});
