import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgFlagIconComponent } from './flag-icon.component';
import { LgFlagIconRegistry } from './flag-icon.registry';

describe('LgFlagIconComponent', () => {
  let component: LgFlagIconComponent;
  let fixture: ComponentFixture<LgFlagIconComponent>;
  let flagIconRegistryMock: jest.Mocked<LgFlagIconRegistry>;

  beforeEach(waitForAsync(() => {
    flagIconRegistryMock = {
      get: jest.fn(),
    } as unknown as jest.Mocked<LgFlagIconRegistry>;

    TestBed.configureTestingModule({
      imports: [ LgFlagIconComponent ],
      providers: [
        {
          provide: LgFlagIconRegistry,
          useValue: flagIconRegistryMock,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgFlagIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the flag icon class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-flag-icon');
  });

  it('should set `aria-hidden` to true', () => {
    expect(fixture.nativeElement.getAttribute('aria-hidden')).toBe('true');
  });

  describe('setting the name', () => {
    it('should append the correct svg element to the component', async () => {
      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(fixture.nativeElement.querySelector('#lg-flag-icon-0')).toBeNull();

      flagIconRegistryMock.get.mockResolvedValue('<svg id="test">test-svg</svg>');

      component.name = 'united-kingdom';
      fixture.detectChanges();
      await fixture.whenStable();

      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(fixture.nativeElement.querySelector('#lg-flag-icon-0')).toBeDefined();
    });

    it('should not throw an error when a flag icon is not registered', () => {
      expect(() => {
        component.name = 'united-kingdom';
      }).not.toThrow();
    });
  });
});
