import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { LgIconComponent } from '../../icon';

import { LgListWithIconsItemComponent } from './list-with-icons-item.component';

describe('LgListWithIconsItemComponent', () => {
  let component: LgListWithIconsItemComponent;
  let fixture: ComponentFixture<LgListWithIconsItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgListWithIconsItemComponent, MockComponent(LgIconComponent) ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgListWithIconsItemComponent);
    component = fixture.componentInstance;

    component.iconName = 'document';

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-list-with-icons-item',
    );
  });

  it('should default to mono variant when not set', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.style.getPropertyValue('--list-item-icon-colour')).toBe(
      'var(--text-default-primary-colour)',
    );
  });

  it('should map semantic variant values to list tokens', () => {
    component.variant = 'mono';
    fixture.detectChanges();

    expect(fixture.nativeElement.style.getPropertyValue('--list-item-icon-colour')).toBe(
      'var(--text-default-primary-colour)',
    );

    component.variant = 'positive';
    fixture.detectChanges();

    expect(fixture.nativeElement.style.getPropertyValue('--list-item-icon-colour')).toBe(
      'var(--list-item-positive-colour)',
    );

    component.variant = 'negative';
    fixture.detectChanges();

    expect(fixture.nativeElement.style.getPropertyValue('--list-item-icon-colour')).toBe(
      'var(--list-item-negative-colour)',
    );
  });

  it('should fall back to mono for unknown variant values', () => {
    component.variant = 'unknown' as unknown as 'mono' | 'positive' | 'negative';
    fixture.detectChanges();

    expect(fixture.nativeElement.style.getPropertyValue('--list-item-icon-colour')).toBe(
      'var(--text-default-primary-colour)',
    );
  });

  it('should use mono marker colour when variant is set to undefined at runtime', () => {
    component.variant = 'positive';
    fixture.detectChanges();

    component.variant = undefined;
    fixture.detectChanges();

    expect(fixture.nativeElement.style.getPropertyValue('--list-item-icon-colour')).toBe(
      'var(--text-default-primary-colour)',
    );
  });

  it('should use mono marker colour when variant is set to null at runtime', () => {
    component.variant = 'negative';
    fixture.detectChanges();

    component.variant = null;
    fixture.detectChanges();

    expect(fixture.nativeElement.style.getPropertyValue('--list-item-icon-colour')).toBe(
      'var(--text-default-primary-colour)',
    );
  });
});
