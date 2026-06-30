import { Component, DebugElement, Input, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgOrientationDirective } from './orientation.directive';

@Component({
  template: ' <div [lgOrientation]="lgOrientation">Test feature</div> ',
  imports: [ LgOrientationDirective ],
  changeDetection: ChangeDetectionStrategy.Default,
})
class TestComponent {
  @Input() lgOrientation;
}

describe('lgOrientation', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgOrientationDirective ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));
  });

  it('should not set the class lg-orientation on the component if orientation is undefined', () => {
    fixture.componentRef.setInput('lgOrientation', undefined);
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toBeNull();
  });

  it('should set the class lg-orientation on the component', () => {
    fixture.componentRef.setInput('lgOrientation', { sm: 'vertical', md: 'horizontal' });
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
