import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgContentSrollComponent } from './content-scroll.component';

describe('LgContentSrollComponent', () => {
  let component: LgContentSrollComponent;
  let fixture: ComponentFixture<LgContentSrollComponent>;
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
    scrollContent = fixture.debugElement.nativeElement.querySelector(
      '.lg-content-scroll__content',
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the contentWidth input', () => {
    it('should show a value of auto input is not specified', () => {
      fixture.detectChanges();
      expect(scrollContent.style.width).toBe('auto');
    });

    it('should show a value of auto input is not valid', () => {
      component.contentWidth = '4';
      fixture.detectChanges();
      expect(scrollContent.style.width).toBe('auto');
    });

    it('should show a value based on the input specified', () => {
      component.contentWidth = '70vw';
      fixture.detectChanges();
      expect(scrollContent.style.width).toBe('70vw');
    });
  });

  describe('the contentHeight input', () => {
    it('should show a value of 40vh input is not specified', () => {
      fixture.detectChanges();
      expect(scrollContent.style.height).toBe('40vh');
    });

    it('should show a value of 40vh input is not valid', () => {
      component.contentHeight = '4';
      fixture.detectChanges();
      expect(scrollContent.style.height).toBe('40vh');
    });

    it('should show a value based on the input specified', () => {
      component.contentHeight = '70vh';
      fixture.detectChanges();
      expect(scrollContent.style.height).toBe('70vh');
    });
  });

  describe('the mobileFullContent input', () => {
    it('should add the relevant class if input is not specified', () => {
      fixture.detectChanges();
      expect(
        scrollContent.classList.contains('lg-content-scroll__content-min-width'),
      ).toBeTrue();
    });
    it('should add the relevant class if input is true', () => {
      component.mobileFullContent = true;
      fixture.detectChanges();
      expect(
        scrollContent.classList.contains('lg-content-scroll__content-min-width'),
      ).toBeTrue();
    });
    it('should not add the relevant class if input is false', () => {
      component.mobileFullContent = false;
      fixture.detectChanges();
      expect(
        scrollContent.classList.contains('lg-content-scroll__content-min-width'),
      ).not.toBeTrue();
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
