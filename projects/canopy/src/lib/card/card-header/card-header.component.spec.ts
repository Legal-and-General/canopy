import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardHeaderComponent } from './card-header.component';

describe('LgCardHeaderComponent', () => {
  let component: LgCardHeaderComponent;
  let fixture: ComponentFixture<LgCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgCardHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-card-header'
    );
  });

  describe('the hasContent input', () => {
    describe('when not set', () => {
      it('should set the default value to false', () => {
        expect(component.hasContent).toBe(false);
      });
    });

    describe('when set to true', () => {
      it('should set the withContent class modifier', () => {
        component.hasContent = true;
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-card-header--with-content'
        );
      });
    });

    describe('when set to false', () => {
      it('should not set the withContent class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-card-header--with-content'
        );
      });
    });
  });
});
