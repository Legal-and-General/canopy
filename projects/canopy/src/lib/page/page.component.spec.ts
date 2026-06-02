import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgPageComponent } from './page.component';

describe('LgPageComponent', () => {
  let component: LgPageComponent;
  let fixture: ComponentFixture<LgPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgPageComponent ],
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
