import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHintComponent } from './hint.component';

describe('FormHintComponent', () => {
  let component: LgHintComponent;
  let fixture: ComponentFixture<LgHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHintComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds a unique id', () => {
    fixture.detectChanges();
    expect(/lg-hint-\d/.test(fixture.nativeElement.getAttribute('id'))).toBe(
      true
    );
  });
});
