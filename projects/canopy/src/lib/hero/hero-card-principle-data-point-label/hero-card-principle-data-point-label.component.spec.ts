import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgHeadingComponent } from '../../heading/heading.component';

import { LgHeroCardPrincipleDataPointLabelComponent } from './hero-card-principle-data-point-label.component';

describe('LgHeroCardPrincipleDataPointLabelComponent', () => {
  let component: LgHeroCardPrincipleDataPointLabelComponent;
  let fixture: ComponentFixture<LgHeroCardPrincipleDataPointLabelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgHeroCardPrincipleDataPointLabelComponent, LgHeadingComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardPrincipleDataPointLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
