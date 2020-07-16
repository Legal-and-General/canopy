import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeadingComponent } from './heading.component';

describe('LgHeadingComponent', () => {
  let component: LgHeadingComponent;
  let fixture: ComponentFixture<LgHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeadingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
