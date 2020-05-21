import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgTabItemContentComponent } from './tab-item-content.component';

describe('LgTabItemContentComponent', () => {
  let component: LgTabItemContentComponent;
  let fixture: ComponentFixture<LgTabItemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgTabItemContentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTabItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
