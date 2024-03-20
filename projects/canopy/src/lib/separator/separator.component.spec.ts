import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgSeparatorComponent } from './separator.component';

describe('LgSeparatorComponent', () => {
  let component: LgSeparatorComponent;
  let fixture: ComponentFixture<LgSeparatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgSeparatorComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the class lg-separator', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-separator');
  });

  it('should set the variant to the default value', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-separator--solid');
  });

  it('should set the variant to the provided value', () => {
    component.variant = 'dotted';

    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-separator--dotted');
  });

  it('should have an aria hidden attribute set to true if the role is not specified', () => {
    expect(fixture.nativeElement.getAttribute('aria-hidden')).toEqual('true');
  });

  describe('when the role input is set to true', () => {
    beforeEach(() => {
      component.hasRole = true;
      fixture.detectChanges();
    });

    it('should set the role attribute to "separator"', () => {
      expect(fixture.nativeElement.getAttribute('role')).toEqual('separator');
    });

    it('shouldn\'t set the aria hidden attribute', () => {
      expect(fixture.nativeElement.getAttribute('aria-hidden')).toBeNull();
    });
  });
});
