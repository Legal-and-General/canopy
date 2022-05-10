import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPrimaryMessageDescriptionComponent } from './primary-message-description.component';

describe('LgPrimaryMessageDescriptionComponent', () => {
  let component: LgPrimaryMessageDescriptionComponent;
  let fixture: ComponentFixture<LgPrimaryMessageDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgPrimaryMessageDescriptionComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPrimaryMessageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-primary-message-description',
    );
  });
});
