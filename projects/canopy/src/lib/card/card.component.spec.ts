import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { MockComponent, MockRender } from 'ng-mocks';

import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardHeaderComponent } from './card-header/card-header.component';
import { LgCardComponent } from './card.component';

describe('LgCardComponent', () => {
  let component: LgCardComponent;
  let fixture: ComponentFixture<LgCardComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          LgCardComponent,
          MockComponent(LgCardHeaderComponent),
          MockComponent(LgCardContentComponent),
        ],
      }).compileComponents();
    }),
  );

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
});
