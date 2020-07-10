import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { LgHeadingComponent } from '../../heading/heading.component';
import { LgCardTitleComponent } from './card-title.component';

describe('LgCardTitleComponent', () => {
  let component: LgCardTitleComponent;
  let fixture: ComponentFixture<LgCardTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgCardTitleComponent, MockComponents(LgHeadingComponent)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-card-title'
    );
  });
});
