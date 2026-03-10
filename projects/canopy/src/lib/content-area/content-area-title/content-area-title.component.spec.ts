import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgContentAreaTitleComponent } from './content-area-title.component';

describe('LgContentAreaTitleComponent', () => {
  let component: LgContentAreaTitleComponent;
  let fixture: ComponentFixture<LgContentAreaTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgContentAreaTitleComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgContentAreaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-content-area-title',
    );
  });

  it('should set the heading level', () => {
    component.headingLevel = 2;
    fixture.detectChanges();

    const headingElement = fixture.nativeElement.querySelector('h2');

    expect(headingElement).toBeTruthy();
  });
});
