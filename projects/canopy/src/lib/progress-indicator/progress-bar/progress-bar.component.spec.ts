import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgProgressBarComponent } from './progress-bar.component';

describe('HeroCardHeaderComponent', () => {
  let component: LgProgressBarComponent;
  let fixture: ComponentFixture<LgProgressBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgProgressBarComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
