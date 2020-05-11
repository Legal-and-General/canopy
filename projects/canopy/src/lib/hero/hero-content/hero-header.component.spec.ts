import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroHeaderComponent } from './hero-header.component';

describe('LgHeroHeaderComponent', () => {
  let component: LgHeroHeaderComponent;
  let fixture: ComponentFixture<LgHeroHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeroHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
