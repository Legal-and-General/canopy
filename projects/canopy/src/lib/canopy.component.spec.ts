import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanopyComponent } from './canopy.component';

describe('CanopyComponent', () => {
  let component: CanopyComponent;
  let fixture: ComponentFixture<CanopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
