import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgContentSrollComponent } from './content-scroll.component';
import { ContentScrollBreakpoints } from './content-scroll.interface';

describe('LgContentSrollComponent', () => {
  let component: LgContentSrollComponent;
  let fixture: ComponentFixture<LgContentSrollComponent>;
  let scrollArea;
  let scrollContent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgContentSrollComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgContentSrollComponent);
    component = fixture.componentInstance;
    scrollArea = fixture.debugElement.nativeElement;
    scrollContent = fixture.debugElement.nativeElement.querySelector(
      '.lg-content-scroll__content',
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the scrollContentAt input', () => {
    it('should show the default value if not specified', () => {
      fixture.detectChanges();
      expect(scrollArea.classList.contains('lg-content-scroll__scroll-at-sm')).toBeTrue();
    });

    it('should show a value based on the input specified', () => {
      component.scrollContentAt = ContentScrollBreakpoints.Medium;
      fixture.detectChanges();
      expect(scrollArea.classList.contains('lg-content-scroll__scroll-at-md')).toBeTrue();
    });
  });

  describe('the scrollHeight input', () => {
    it('should show the default value if not specified', () => {
      fixture.detectChanges();
      expect(scrollArea.style.height).toBe('40vh');
    });

    it('should show a value based on the input specified', () => {
      component.scrollHeight = '70vh';
      fixture.detectChanges();
      expect(scrollArea.style.height).toBe('70vh');
    });
  });

  describe('the listNoIndent input', () => {
    it('should not add the relevant class if input is not specified', () => {
      fixture.detectChanges();
      expect(
        scrollContent.classList.contains('lg-content-scroll__content-flat-list'),
      ).not.toBeTrue();
    });

    it('should not add the relevant class if input is false', () => {
      component.listNoIndent = false;
      fixture.detectChanges();
      expect(
        scrollContent.classList.contains('lg-content-scroll__content-flat-list'),
      ).not.toBeTrue();
    });

    it('should add the relevant class if input is true', () => {
      component.listNoIndent = true;
      fixture.detectChanges();
      expect(
        scrollContent.classList.contains('lg-content-scroll__content-flat-list'),
      ).toBeTrue();
    });
  });
});
