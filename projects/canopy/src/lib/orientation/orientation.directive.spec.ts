import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgOrientationDirective } from './orientation.directive';

@Component({
  template: ' <div [lgOrientation]="lgOrientation">Test feature</div> ',
  standalone: true,
})
class TestComponent {
  @Input() lgOrientation;
}

describe('lgOrientation', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgOrientationDirective ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));
  }));

  it('should not set the class lg-orientation on the component if orientation is undefined', () => {
    component.lgOrientation = undefined;
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).not.toContain(
      'lg-orientation',
    );
  });

  it('should set the class lg-orientation on the component', () => {
    component.lgOrientation = { sm: 'vertical', md: 'horizontal' };
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-orientation');

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-orientation--sm--vertical',
    );

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-orientation--md--horizontal',
    );
  });

  it('should set the correct orientation classes on the lg-card', () => {
    component.lgOrientation = {
      sm: 'vertical',
      md: 'reverse-horizontal',
      lg: 'reverse-vertical',
    };

    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-orientation--sm--vertical',
    );

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-orientation--md--reverse-horizontal',
    );

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-orientation--lg--reverse-vertical',
    );
  });
});
