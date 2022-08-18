import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgMoreLessBoxMoreInfoComponent } from './more-less-box-more-info.component';

describe('LgMoreLessBoxMoreInfoComponent', () => {
  let component: LgMoreLessBoxMoreInfoComponent;
  let fixture: ComponentFixture<LgMoreLessBoxMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgMoreLessBoxMoreInfoComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgMoreLessBoxMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.class).toBeTrue();
  });
});
