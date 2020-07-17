import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroCardNotificationComponent } from './hero-card-notification.component';

describe('LgHeroCardMessageComponent', () => {
  let component: LgHeroCardNotificationComponent;
  let fixture: ComponentFixture<LgHeroCardNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeroCardNotificationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
