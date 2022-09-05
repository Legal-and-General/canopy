import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MockComponent } from 'ng-mocks';
import { mock, when } from '@typestrong/ts-mockito/ts-mockito';

import { LgIconComponent, LgIconRegistry } from '../../icon';
import { BreadcrumbVariant } from '../breadcrumb-item/breadcrumb-item.interface';

import { LgBreadcrumbItemEllipsisComponent } from './breadcrumb-item-ellipsis.component';

describe('LgBreadcrumbItemEllipsisComponent', () => {
  let component: LgBreadcrumbItemEllipsisComponent;
  let fixture: ComponentFixture<LgBreadcrumbItemEllipsisComponent>;
  let iconRegistryMock: LgIconRegistry;
  let breadcrumbEllipsisDebugElement: DebugElement;
  let breadcrumbEllipsisEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    iconRegistryMock = mock(LgIconRegistry);

    TestBed.configureTestingModule({
      declarations: [ LgBreadcrumbItemEllipsisComponent, MockComponent(LgIconComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgBreadcrumbItemEllipsisComponent);
    component = fixture.componentInstance;
    breadcrumbEllipsisDebugElement = fixture.debugElement;
    breadcrumbEllipsisEl = breadcrumbEllipsisDebugElement.nativeElement;

    when(iconRegistryMock.getIcon('caret-right')).thenReturn(
      '<svg id="test">test-svg</svg>',
    );

    when(iconRegistryMock.getIcon('overflow-horizontal')).thenReturn(
      '<svg id="test">test-svg</svg>',
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the variant is set to light', () => {
    beforeEach(() => {
      component.variant = BreadcrumbVariant.light;
    });

    it('the class should contain \'lg-breadcrumb-item-ellipsis--light\'', () => {
      expect(breadcrumbEllipsisEl.getAttribute('class')).toContain(
        'lg-breadcrumb-item-ellipsis--light',
      );
    });

    it('the class should not contain \'lg-breadcrumb-item-ellipsis--dark\'', () => {
      expect(breadcrumbEllipsisEl.getAttribute('class')).not.toContain(
        'lg-breadcrumb-item-ellipsis--dark',
      );
    });
  });

  describe('when the variant is set to dark', () => {
    beforeEach(() => {
      component.variant = BreadcrumbVariant.dark;
    });

    it('the class should contain \'lg-breadcrumb-item-ellipsis--dark\'', () => {
      expect(breadcrumbEllipsisEl.getAttribute('class')).toContain(
        'lg-breadcrumb-item-ellipsis--dark',
      );
    });

    it('the class should not contain \'lg-breadcrumb-item-ellipsis--light\'', () => {
      expect(breadcrumbEllipsisEl.getAttribute('class')).not.toContain(
        'lg-breadcrumb-item-ellipsis--light',
      );
    });
  });
});
