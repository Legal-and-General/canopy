import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MockComponent, MockRender } from 'ng-mocks';

import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardHeaderComponent } from './card-header/card-header.component';
import { LgCardComponent } from './card.component';
import { LgCardFooterComponent } from './card-footer/card-footer.component';

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
          MockComponent(LgCardFooterComponent),
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    el = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-card');
  });

  describe('when there is only lg-card-content', () => {
    beforeEach(() => {
      const localFixture = MockRender(`
        <lg-card>
         <lg-card-content>Content</lg-card-content>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect card content to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardContentComponent)),
      ).toBeDefined();
    });
  });

  describe('when there is lg-card-header and lg-card-content', () => {
    beforeEach(() => {
      const localFixture = MockRender(`
        <lg-card>
         <lg-card-header>Top</lg-card-header>
         <lg-card-content>Content</lg-card-content>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect card header to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardHeaderComponent)),
      ).toBeDefined();
    });

    it('should expect card content to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardContentComponent)),
      ).toBeDefined();
    });
  });

  describe('when there is lg-card-content and lg-card-footer', () => {
    beforeEach(() => {
      const localFixture = MockRender(`
        <lg-card>
         <lg-card-content>Content</lg-card-content>
         <lg-card-footer>Footer</lg-card-footer>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect card content to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardContentComponent)),
      ).toBeDefined();
    });

    it('should expect card footer to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardFooterComponent)),
      ).toBeDefined();
    });
  });

  describe('when there is lg-card-header, lg-card-content and lg-card-footer', () => {
    beforeEach(() => {
      const localFixture = MockRender(`
        <lg-card>
         <lg-card-header>Top</lg-card-header>
         <lg-card-content>Content</lg-card-content>
         <lg-card-footer>Footer</lg-card-footer>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect card header to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardHeaderComponent)),
      ).toBeDefined();
    });

    it('should expect card content to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardContentComponent)),
      ).toBeDefined();
    });

    it('should expect card footer to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardFooterComponent)),
      ).toBeDefined();
    });
  });
});
