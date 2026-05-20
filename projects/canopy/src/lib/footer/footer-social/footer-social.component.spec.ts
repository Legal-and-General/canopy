import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgFooterSocialComponent } from './footer-social.component';

describe('LgFooterSocialComponent', () => {
  let component: LgFooterSocialComponent;
  let fixture: ComponentFixture<LgFooterSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgFooterSocialComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgFooterSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class', () => {
    expect(fixture.nativeElement.classList.contains('lg-footer-social')).toBe(true);
  });

  it('should have the correct role', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('navigation');
  });

  it('should have the correct aria-label', () => {
    expect(fixture.nativeElement.getAttribute('aria-label')).toBe('Social media links');
  });

  describe('social links validation', () => {
    it('should not warn when there are 8 or fewer social links', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn');

      TestBed.resetTestingModule();

      TestBed.configureTestingModule({
        imports: [ LgFooterSocialComponent ],
      });

      fixture = TestBed.createComponent(LgFooterSocialComponent);

      fixture.nativeElement.innerHTML = `
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
        <a href="#">Link 5</a>
        <a href="#">Link 6</a>
        <a href="#">Link 7</a>
        <a href="#">Link 8</a>
      `;

      fixture.detectChanges();

      expect(consoleWarnSpy).not.toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });

    it('should warn when there are more than 8 social links', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn');

      TestBed.resetTestingModule();

      TestBed.configureTestingModule({
        imports: [ LgFooterSocialComponent ],
      });

      fixture = TestBed.createComponent(LgFooterSocialComponent);

      fixture.nativeElement.innerHTML = `
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
        <a href="#">Link 5</a>
        <a href="#">Link 6</a>
        <a href="#">Link 7</a>
        <a href="#">Link 8</a>
        <a href="#">Link 9</a>
      `;

      fixture.detectChanges();

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'LgFooterSocialComponent: Maximum of 8 social links allowed. Found 9.',
      );

      consoleWarnSpy.mockRestore();
    });

    it('should count both anchor and button elements', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn');

      TestBed.resetTestingModule();

      TestBed.configureTestingModule({
        imports: [ LgFooterSocialComponent ],
      });

      fixture = TestBed.createComponent(LgFooterSocialComponent);

      fixture.nativeElement.innerHTML = `
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <button>Link 4</button>
        <button>Link 5</button>
        <button>Link 6</button>
        <button>Link 7</button>
        <button>Link 8</button>
        <button>Link 9</button>
      `;

      fixture.detectChanges();

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'LgFooterSocialComponent: Maximum of 8 social links allowed. Found 9.',
      );

      consoleWarnSpy.mockRestore();
    });
  });
});
