import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroCardDataPointComponent } from './hero-card-data-point.component';

describe('HeroCardDataPointComponent', () => {
  let component: LgHeroCardDataPointComponent;
  let fixture: ComponentFixture<LgHeroCardDataPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeroCardDataPointComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardDataPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the listitem role ', () => {
    expect(fixture.nativeElement.getAttribute('role')).toEqual('listitem');
  });
});
