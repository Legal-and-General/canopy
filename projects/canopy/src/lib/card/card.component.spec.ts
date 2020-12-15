import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { MockComponent, MockRender } from 'ng-mocks';

import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardHeaderComponent } from './card-header/card-header.component';
import { LgCardComponent } from './card.component';
import { LgCardTopAreaComponent } from './card-top-area/card-top-area.component';
import { LgCardBottomAreaComponent } from './card-bottom-area/card-bottom-area.component';

describe('LgCardComponent', () => {
  let component: LgCardComponent;
  let fixture: ComponentFixture<LgCardComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LgCardComponent,
        MockComponent(LgCardHeaderComponent),
        MockComponent(LgCardContentComponent),
        MockComponent(LgCardTopAreaComponent),
        MockComponent(LgCardBottomAreaComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <lg-card>
      </lg-card>
    `);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    el = debugElement.children[0].nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-card');
  });

  describe('when there is lg-card-header', () => {
    beforeEach(() => {
      const localFixture = MockRender(`
        <lg-card>
         <lg-card-header>Title</lg-card-header>
        </lg-card>
      `);

      component = localFixture.debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect first element to render', () => {
      expect(component.lgCardHeaderComponent).toBeDefined();
    });

    it('should expect second element not to render', () => {
      expect(component.lgCardContentComponent).toBeUndefined();
    });
  });

  describe('when there is lg-card-header and lg-card-content', () => {
    beforeEach(() => {
      const localFixture = MockRender(`
        <lg-card>
         <lg-card-header>Title</lg-card-header>
         <lg-card-content>Card content</lg-card-content>
        </lg-card>
      `);

      component = localFixture.debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect first element to render', () => {
      expect(component.lgCardHeaderComponent).toBeDefined();
    });

    it('should expect second element to render', () => {
      expect(component.lgCardContentComponent).toBeDefined();
    });

    it('should set show border to true', () => {
      expect(component.lgCardHeaderComponent.hasContent).toBe(true);
    });
  });

  describe('when there is lg-card-top-area and lg-card-bottom-area', () => {
    beforeEach(() => {
      const localFixture = MockRender(`
        <lg-card>
         <lg-card-top-area>Top</lg-card-top-area>
         <lg-card-bottom-area>Bottom</lg-card-bottom-area>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should have the default class for form journey', () => {
      expect(el.getAttribute('class')).toContain('lg-card__form-journey');
    });

    it('should expect top area to render', () => {
      expect(component.LgCardTopAreaComponent).toBeDefined();
    });

    it('should expect bottom area to render', () => {
      expect(component.LgCardBottomAreaComponent).toBeDefined();
    });
  });
});
