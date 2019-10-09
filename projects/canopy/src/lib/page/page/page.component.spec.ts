import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPageComponent } from './page.component';

describe('LgPageComponent', () => {
  let component: LgPageComponent;
  let fixture: ComponentFixture<LgPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
