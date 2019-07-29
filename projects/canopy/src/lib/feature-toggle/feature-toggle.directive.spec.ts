import { Component, ViewContainerRef, TemplateRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { of } from 'rxjs';

import { FeatureToggleService } from './feature-toggle.service';
import { FeatureToggleDirective } from './feature-toggle.directive';
import { instance, mock, when } from 'ts-mockito';

@Component({
  template: `
    <section *featureToggle="'feature'" id="feature" >Test feature</section>
  `
})
class TestComponent {}

describe('FeatureToggleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  const featureToggleServiceMock = mock(FeatureToggleService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FeatureToggleDirective],
      providers: [TemplateRef, ViewContainerRef,
        { provide: FeatureToggleService, useFactory: () => instance(featureToggleServiceMock) }
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
  });

  describe('when the toggle is set to true', () => {
    it('should enable a feature', () => {
      when(featureToggleServiceMock.toggles$).thenReturn(of({ 'feature': true }));
      fixture.detectChanges();

      const el = fixture.debugElement.query(By.css('#feature')).nativeElement;
      expect(el.innerText).toEqual('Test feature');
    });
  });

  describe('when the toggle is set to false', () => {
    it('should disable a feature', () => {
      when(featureToggleServiceMock.toggles$).thenReturn(of({ 'feature': false }));
      fixture.detectChanges();

      const de = fixture.debugElement.query(By.css('#feature'));
      expect(de).toBeNull();
    });
  });

  describe('when the toggle is set to undefined', () => {
    it('should enable a feature', () => {
      when(featureToggleServiceMock.toggles$).thenReturn(of({ 'feature': undefined }));
      fixture.detectChanges();

      const el = fixture.debugElement.query(By.css('#feature')).nativeElement;
      expect(el.innerText).toEqual('Test feature');
    });
  });

  describe('when toggles$ returns an empty object', () => {
    it('should enable the elements that have the featureToggle directive', () => {
      when(featureToggleServiceMock.toggles$).thenReturn(of({}));
      fixture.detectChanges();

      const el = fixture.debugElement.query(By.css('#feature')).nativeElement;
      expect(el.innerText).toEqual('Test feature');
    });
  });
});
