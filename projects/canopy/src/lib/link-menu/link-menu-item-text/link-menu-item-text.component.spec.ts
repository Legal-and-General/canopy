import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { LgIconComponent } from '../../icon';

import { LgLinkMenuItemTextComponent } from './link-menu-item-text.component';

describe('LgLinkMenuItemTextComponent', () => {
  let component: LgLinkMenuItemTextComponent;
  let fixture: ComponentFixture<LgLinkMenuItemTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgLinkMenuItemTextComponent, MockComponents(LgIconComponent) ],
    }).compileComponents();
  });

  describe('component', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(LgLinkMenuItemTextComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should contain the default class', () => {
      expect(fixture.nativeElement.getAttribute('class')).toContain(
        'lg-link-menu-item-text',
      );
    });

    it('should contain the bold class', () => {
      component.isBold = true;
      fixture.detectChanges();

      expect(fixture.nativeElement.getAttribute('class')).toContain(
        'lg-link-menu-item-text--bold',
      );
    });

    it('should not contain the bold class if isBold is false', () => {
      component.isBold = false;
      fixture.detectChanges();

      expect(fixture.nativeElement.getAttribute('class')).not.toContain(
        'lg-link-menu-item-text--bold',
      );
    });
  });
});
