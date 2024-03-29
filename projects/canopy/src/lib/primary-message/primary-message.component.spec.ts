import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents, MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgBrandIconComponent } from '../brand-icon';

import {
  LgPrimaryMessageComponent,
  LgPrimaryMessageDescriptionComponent,
  LgPrimaryMessageTitleComponent,
} from './';

describe('LgPrimaryMessageComponent', () => {
  let component: LgPrimaryMessageComponent;
  let fixture: MockedComponentFixture<LgPrimaryMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgPrimaryMessageComponent,
        MockComponents(
          LgBrandIconComponent,
          LgPrimaryMessageTitleComponent,
          LgPrimaryMessageDescriptionComponent,
        ),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <lg-primary-message>
        <lg-primary-message-title
          >This is a message with brand icon</lg-primary-message-title
        >
        <lg-primary-message-description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <a href="#">eiusmod tempor</a> incididunt ut labore et dolore magna aliqua.
        </lg-primary-message-description>
      </lg-primary-message>
    `);

    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(
      fixture.debugElement
        .query(By.css('.lg-primary-message'))
        .nativeElement.getAttribute('class'),
    ).toContain('lg-primary-message');
  });

  describe('the hasRole input', () => {
    it('should add the role "alert" when set to true', () => {
      component.hasRole = true;
      fixture.detectChanges();

      expect(
        fixture.debugElement
          .query(By.css('.lg-primary-message'))
          .nativeElement.getAttribute('role'),
      ).toEqual('alert');
    });

    it('should remove the role "alert" when set to false', () => {
      component.hasRole = false;
      fixture.detectChanges();

      expect(
        fixture.debugElement
          .query(By.css('.lg-primary-message'))
          .nativeElement.getAttribute('role'),
      ).toBeNull();
    });
  });
});
