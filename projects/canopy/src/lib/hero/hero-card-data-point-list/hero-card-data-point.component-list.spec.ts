import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroCardDataPointListComponent } from './hero-card-data-point-list.component';

describe('HeroCardDataPointComponent', () => {
  let component: LgHeroCardDataPointListComponent;
  let fixture: ComponentFixture<LgHeroCardDataPointListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeroCardDataPointListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardDataPointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the list role ', () => {
    expect(fixture.nativeElement.getAttribute('role')).toEqual('list');
  });
});
