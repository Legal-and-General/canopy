import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgVariantDirective } from './variant.directive';
import type { Variant } from './variant.interface';

@Component({
  template: ' <div [lgVariant]="lgVariant">Test</div> ',
})
class TestComponent {
  @Input() lgVariant: Variant = 'generic';
}

describe('LgVariant', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ TestComponent, LgVariantDirective ],
      }).compileComponents();
    }),
  );

  beforeEach(
    waitForAsync(() => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;

      testElement = fixture.debugElement.query(By.css('div'));

      fixture.detectChanges();
    }),
  );

  it('adds the generic variant class', () => {
    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-variant--generic',
    );
  });

  it('adds the info variant class', () => {
    component.lgVariant = 'info';
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-variant--info');
  });

  it('adds the success variant class', () => {
    component.lgVariant = 'success';
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-variant--success',
    );
  });

  it('adds the warning variant class', () => {
    component.lgVariant = 'warning';
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-variant--warning',
    );
  });

  it('adds the error variant class', () => {
    component.lgVariant = 'error';
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-variant--error',
    );
  });
});
