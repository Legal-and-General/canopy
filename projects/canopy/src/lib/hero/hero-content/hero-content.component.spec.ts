import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgHeroContentComponent } from './hero-content.component';

describe('LgHeroContentComponent', () => {
  let component: LgHeroContentComponent;
  let fixture: ComponentFixture<LgHeroContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ LgHeroContentComponent ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
