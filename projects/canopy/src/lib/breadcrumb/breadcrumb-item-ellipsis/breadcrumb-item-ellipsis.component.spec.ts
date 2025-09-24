import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MockComponent } from 'ng-mocks';

import { LgIconComponent, LgIconRegistry } from '../../icon';
import { BreadcrumbVariant } from '../breadcrumb-item/breadcrumb-item.interface';

import { LgBreadcrumbItemEllipsisComponent } from './breadcrumb-item-ellipsis.component';

describe('LgBreadcrumbItemEllipsisComponent', () => {
  let component: LgBreadcrumbItemEllipsisComponent;
  let fixture: ComponentFixture<LgBreadcrumbItemEllipsisComponent>;
  let iconRegistryMock: jest.Mocked<LgIconRegistry>;
  let breadcrumbEllipsisDebugElement: DebugElement;
  let breadcrumbEllipsisEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    iconRegistryMock = {
      get: jest.fn(),
    } as unknown as jest.Mocked<LgIconRegistry>;

    TestBed.configureTestingModule({
      imports: [ LgBreadcrumbItemEllipsisComponent, MockComponent(LgIconComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgBreadcrumbItemEllipsisComponent);
    component = fixture.componentInstance;
    breadcrumbEllipsisDebugElement = fixture.debugElement;
    breadcrumbEllipsisEl = breadcrumbEllipsisDebugElement.nativeElement;

    iconRegistryMock.get.mockImplementation(name => {
      if (name === 'caret-right' || name === 'overflow-horizontal') {
        return Promise.resolve('<svg id="test">test-svg</svg>');
      }

      return Promise.resolve('');
    });

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
