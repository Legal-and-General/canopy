import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { LgHeadingComponent } from '../../heading';

import { LgHeroCardTitleComponent } from './hero-card-title.component';

describe('HeroCardTitleComponent', () => {
  let component: LgHeroCardTitleComponent;
  let fixture: ComponentFixture<LgHeroCardTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgHeroCardTitleComponent, MockComponents(LgHeadingComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
