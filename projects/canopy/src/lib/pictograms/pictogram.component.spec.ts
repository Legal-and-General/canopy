import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock, when } from 'ts-mockito';
import { LgPictogramComponent } from './pictogram.component';
import { LgPictogramRegistry } from './pictogram.registry';

describe('LgPictogramComponent', () => {
  let component: LgPictogramComponent;
  let fixture: ComponentFixture<LgPictogramComponent>;
  let pictogramRegistryMock: LgPictogramRegistry;

  beforeEach(async(() => {
    pictogramRegistryMock = mock(LgPictogramRegistry);

    TestBed.configureTestingModule({
      declarations: [LgPictogramComponent],
      providers: [
        {
          provide: LgPictogramRegistry,
          useFactory: () => instance(pictogramRegistryMock)
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPictogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the generic pictogram class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-pictogram'
    );
  });

  it('should set `aria-hidden` to true', () => {
    expect(fixture.nativeElement.getAttribute('aria-hidden')).toBe('true');
  });

  describe('setting the name', () => {
    it('should append the correct svg element to the component', () => {
      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(fixture.nativeElement.querySelector('#lg-pictogram-0')).toBeNull();

      when(pictogramRegistryMock.getPictogram('sun')).thenReturn(
        '<svg id="test">test-svg</svg>'
      );

      component.name = 'sun';
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(
        fixture.nativeElement.querySelector('#lg-pictogram-0')
      ).toBeDefined();
    });
  });
});
