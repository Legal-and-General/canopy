import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgNoticeDescriptionComponent } from './notice-description.component';

describe('LgNoticeDescriptionComponent', () => {
  let component: LgNoticeDescriptionComponent;
  let fixture: ComponentFixture<LgNoticeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgNoticeDescriptionComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgNoticeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-notice-description',
    );
  });
});
