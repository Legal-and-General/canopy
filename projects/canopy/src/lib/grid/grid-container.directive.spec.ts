import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgGridContainerDirective } from './grid-container.directive';

@Component({
  template: ' <div lgContainer>Test feature</div> ',
  standalone: true,
})
class TestComponent {}

describe('GridContainerDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgGridContainerDirective ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    testElement = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('adds the container class', () => {
    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-container');
  });
});
