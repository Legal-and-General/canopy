import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockComponents } from 'ng-mocks';
import { instance, mock, when } from 'ts-mockito';

import { LgIconComponent } from '../../icon';
import { LgFilterGroupComponent } from '../filter-group.component';
import { LgFilterButtonComponent } from './filter-button.component';

describe('LgFilterButtonComponent', () => {
  let component: LgFilterButtonComponent;
  let fixture: ComponentFixture<LgFilterButtonComponent>;
  let filterGroupMock: LgFilterGroupComponent;
  let inputDebugElement: DebugElement;
  let inputLabelElement: DebugElement;

  beforeEach(async(() => {
    filterGroupMock = mock(LgFilterGroupComponent);
    when(filterGroupMock.name).thenReturn('color');
    when(filterGroupMock.variant).thenReturn('select-one');

    TestBed.configureTestingModule({
      declarations: [
        LgFilterButtonComponent,
        MockComponents(LgIconComponent),
        LgFilterGroupComponent,
      ],
      providers: [
        {
          provide: LgFilterGroupComponent,
          useFactory: () => instance(filterGroupMock),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgFilterButtonComponent);
    component = fixture.componentInstance;
    inputDebugElement = fixture.debugElement.query(By.css('.lg-filter-button__input'));
    inputLabelElement = fixture.debugElement.query(By.css('.lg-filter-button__label'));

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets its name from the filter group name', () => {
    expect(component.name).toBe('color');
  });

  it('links the label to the input field with the correct attributes', () => {
    const id = inputDebugElement.nativeElement.getAttribute('id');
    expect(id).toBeTruthy();
    expect(inputLabelElement.nativeElement.getAttribute('for')).toBe(id);
  });

  it('sets the disabled property when the filter group is disabled', () => {
    when(filterGroupMock.disabled).thenReturn(true);
    fixture.detectChanges();
    expect(component.disabled).toBe(true);
  });

  it('sets input type to radio if variant is select one', () => {
    const inputElem = fixture.debugElement.query(By.css('input'));
    expect(inputElem.nativeElement.type === 'radio').toBe(true);
  });

  describe('Select Multiple variant', () => {
    beforeEach(async(() => {
      when(filterGroupMock.variant).thenReturn('select-multiple');
      fixture = TestBed.createComponent(LgFilterButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('should be set based on the choice group variant', () => {
      expect(component.variant).toBe('select-multiple');
    });

    it('sets input type to checkbox if variant is select-multiple', () => {
      const inputElem = fixture.debugElement.query(By.css('input'));
      expect(inputElem.nativeElement.type === 'checkbox').toBe(true);
    });

    it('displays the icons for the select-multiple filter button', () => {
      const element = fixture.debugElement.query(
        By.css('.lg-filter-button__icon-wrapper'),
      );
      const style = getComputedStyle(element.nativeElement);
      expect(style.clip === 'auto').toBe(true);
    });

    it('sets the disabled property when the filter group is disabled', () => {
      when(filterGroupMock.disabled).thenReturn(true);
      fixture.detectChanges();
      expect(component.disabled).toBe(true);
    });
  });
});
