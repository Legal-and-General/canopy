import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardToggableContentComponent } from './card-content.component';

describe('LgCardToggableContentComponent', () => {
  let component: LgCardToggableContentComponent;
  let fixture: ComponentFixture<LgCardToggableContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgCardToggableContentComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardToggableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-card-toggable-content',
    );
  });
});
