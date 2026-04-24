import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgIconComponent } from './icon.component';
import { LgIconRegistry } from './icon.registry';

describe('LgIconComponent', () => {
  let component: LgIconComponent;
  let fixture: ComponentFixture<LgIconComponent>;
  let iconRegistryMock: jest.Mocked<LgIconRegistry>;

  beforeEach(waitForAsync(() => {
    iconRegistryMock = {
      get: jest.fn(),
    } as unknown as jest.Mocked<LgIconRegistry>;

    TestBed.configureTestingModule({
      imports: [ LgIconComponent ],
      providers: [
        {
          provide: LgIconRegistry,
          useValue: iconRegistryMock,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the generic icon class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-icon');
  });

  it('should set `aria-hidden` to true', () => {
    expect(fixture.nativeElement.getAttribute('aria-hidden')).toBe('true');
  });

  describe('setting the name', () => {
    it('should append the correct svg element to the component', async () => {
      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(fixture.nativeElement.querySelector('#lg-icon-0')).toBeNull();

      iconRegistryMock.get.mockResolvedValue('<svg id="test">test-svg</svg>');

      component.name = 'add';
      fixture.detectChanges();
      await fixture.whenStable();

      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(fixture.nativeElement.querySelector('#lg-icon-0')).toBeDefined();
    });

    it('should not throw an error when an icon is not registered', () => {
      expect(() => {
        component.name = 'add';
      }).not.toThrow();
    });

    it('should log a console error when an icon cannot be found', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      iconRegistryMock.get.mockResolvedValue(undefined);

      component.name = 'add';
      fixture.detectChanges();
      await fixture.whenStable();

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('[Canopy] Icon "add" cannot be found.'),
      );

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('https://legal-and-general.github.io/canopy/'),
      );

      consoleSpy.mockRestore();
    });
  });
});
