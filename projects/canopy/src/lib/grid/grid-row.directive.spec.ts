import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgGridRowDirective } from './grid-row.directive';

@Component({
  template: `
    <div lgRow>
      Test feature
    </div>
  `
})
class TestComponent {}

describe('GridRowDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LgGridRowDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  });

  it('adds the row class', () => {
    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-row');
  });
});
