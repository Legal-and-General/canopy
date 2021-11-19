import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgCarouselItemComponent } from './carousel-item.component';

describe('LgCarouselItemComponent', () => {
  let component: LgCarouselItemComponent;
  let fixture: ComponentFixture<LgCarouselItemComponent>;
  let mockFixture: MockedComponentFixture<LgCarouselItemComponent>;
  let debugElement: DebugElement;
  let eventSpy: jasmine.Spy;
  const mockRender = `<div><button>Click me</button></div>`;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgCarouselItemComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCarouselItemComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    mockFixture = MockRender(mockRender);
    debugElement = mockFixture.debugElement.children[0].query(By.css('button'));
    eventSpy = spyOn(component.pauseEmit, 'emit');

    mockFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply initial host binding classes and attributes', () => {
    expect(component.element.nativeElement.classList.contains('lg-carousel-item')).toBe(
      true,
    );
    expect(component.element.nativeElement.attributes['aria-selected'].nodeValue).toBe(
      'false',
    );
    expect(component.element.nativeElement.attributes['role'].nodeValue).toBe('tabpanel');
  });

  it('should update the aria-selected attribute when selected', () => {
    component.selected = true;
    fixture.detectChanges();
    expect(component.element.nativeElement.attributes['aria-selected'].nodeValue).toBe(
      'true',
    );
  });

  it('should pause carousel if any button element clicked', () => {
    const el = debugElement.name;
    component.onClick(el);

    expect(eventSpy).toHaveBeenCalledWith(el);
  });

  it('should not pause carousel if any element other than button clicked', () => {
    const el = 'div';
    component.onClick(el);

    expect(eventSpy).not.toHaveBeenCalled();
  });
});
