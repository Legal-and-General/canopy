import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { instance, mock, when } from '@typestrong/ts-mockito/ts-mockito';

import { LgIconComponent } from './icon.component';
import { LgIconRegistry } from './icon.registry';

describe('LgIconComponent', () => {
  let component: LgIconComponent;
  let fixture: ComponentFixture<LgIconComponent>;
  let iconRegistryMock: LgIconRegistry;

  beforeEach(waitForAsync(() => {
    iconRegistryMock = mock(LgIconRegistry);

    TestBed.configureTestingModule({
      declarations: [ LgIconComponent ],
      providers: [
        {
          provide: LgIconRegistry,
          useFactory: () => instance(iconRegistryMock),
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
    it('should append the correct svg element to the component', () => {
      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(fixture.nativeElement.querySelector('#lg-icon-0')).toBeNull();

      when(iconRegistryMock.getIcon('add')).thenReturn('<svg id="test">test-svg</svg>');

      component.name = 'add';
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(fixture.nativeElement.querySelector('#lg-icon-0')).toBeDefined();
    });
  });
});
