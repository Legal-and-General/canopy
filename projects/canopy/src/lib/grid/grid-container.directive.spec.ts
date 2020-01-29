import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgGridContainerDirective } from './grid-container.directive';

@Component({
  template: `
    <div lgContainer>
      Test feature
    </div>
  `
})
class TestComponent {}

describe('GridContainerDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LgGridContainerDirective]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('adds the container class', () => {
    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-container'
    );
  });
});
