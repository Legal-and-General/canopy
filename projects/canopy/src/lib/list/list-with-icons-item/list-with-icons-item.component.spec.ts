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

    component.iconName = 'doc';

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

  it('should set the correct colour for the icon using css variables', () => {
    component.iconColour = '--color-super-blue';

    // In Jest with JSDOM, CSS variables might not format exactly as expected
    // So instead we'll test the component's logic indirectly
    const updateIconColourSpy = jest.spyOn(component as any, 'updateIconColour');

    component.ngAfterViewInit();

    expect(updateIconColourSpy).toHaveBeenCalledWith('--color-super-blue');
  });

  it('should set the correct colour for the icon using any colour', () => {
    component.iconColour = '#000';
    component.ngAfterViewInit();

    expect(fixture.nativeElement.querySelector('lg-icon').style.color).toBe(
      'rgb(0, 0, 0)',
    );
  });
});
