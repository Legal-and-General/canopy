import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPrimaryMessageTitleComponent } from './primary-message-title.component';

describe('LgPrimaryMessageTitleComponent', () => {
  let component: LgPrimaryMessageTitleComponent;
  let fixture: ComponentFixture<LgPrimaryMessageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgPrimaryMessageTitleComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPrimaryMessageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-primary-message-title',
    );
  });
});
