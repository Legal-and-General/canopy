import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { LgIconComponent, LgIconRegistry } from '../../icon';

import { LgBreadcrumbItemEllipsisComponent } from './breadcrumb-item-ellipsis.component';

describe('LgBreadcrumbItemEllipsisComponent', () => {
  let component: LgBreadcrumbItemEllipsisComponent;
  let fixture: ComponentFixture<LgBreadcrumbItemEllipsisComponent>;
  let iconRegistryMock: jest.Mocked<LgIconRegistry>;

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
});
