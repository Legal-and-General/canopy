import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgGridColDirective } from './grid-col.directive';

@Component({
  template: `
    <div
      [lgCol]="lgCol"
      [lgColSm]="lgColSm"
      [lgColMd]="lgColMd"
      [lgColLg]="lgColLg"
      [lgColOffset]="lgColOffset"
      [lgColSmOffset]="lgColSmOffset"
      [lgColMdOffset]="lgColMdOffset"
      [lgColLgOffset]="lgColLgOffset"
    >
      Test feature
    </div>
  `,
  standalone: true,
  imports: [ LgGridColDirective ],
})
class TestComponent {
  @Input() lgCol;
  @Input() lgColSm;
  @Input() lgColMd;
  @Input() lgColLg;
  @Input() lgColOffset;
  @Input() lgColSmOffset;
  @Input() lgColMdOffset;
  @Input() lgColLgOffset;
}

describe('LgColDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgGridColDirective ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  });

  it('adds column class for the default screen size', () => {
    component.lgCol = '12';
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-col-xs-12');
  });

  it('adds column class for the specified screen sizes', () => {
    [ 'sm', 'md', 'lg' ].forEach(size => {
      component[`lgCol${size[0].toUpperCase()}${size.slice(1)}`] = '4';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        `lg-col-${size}-4`,
      );
    });
  });

  it('adds column offset class for the default screen size', () => {
    component.lgColOffset = 2;
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-col-xs-offset-2',
    );
  });

  it('adds column offset class for the specified screen sizes', () => {
    [ 'sm', 'md', 'lg' ].forEach(size => {
      component[`lgCol${size[0].toUpperCase()}${size.slice(1)}Offset`] = '2';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        `lg-col-${size}-offset-2`,
      );
    });
  });
});
