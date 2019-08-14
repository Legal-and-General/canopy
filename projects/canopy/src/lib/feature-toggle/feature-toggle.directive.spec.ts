import { Component, ViewContainerRef, TemplateRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { of } from 'rxjs';

import { LgFeatureToggleService } from './feature-toggle.service';
import { LgFeatureToggleDirective } from './feature-toggle.directive';
import { instance, mock, when } from 'ts-mockito';

@Component({
  template: `
    <section *lgFeatureToggle="'feature'" id="feature" >Test feature</section>
  `
})
class TestComponent {}

describe('LgFeatureToggleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  const lgFeatureToggleServiceMock = mock(LgFeatureToggleService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LgFeatureToggleDirective],
      providers: [TemplateRef, ViewContainerRef,
        { provide: LgFeatureToggleService, useFactory: () => instance(lgFeatureToggleServiceMock) }
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
  });

  describe('when the toggle is set to true', () => {
    it('should enable a feature', () => {
      when(lgFeatureToggleServiceMock.toggles$).thenReturn(of({ 'feature': true }));
      fixture.detectChanges();

      const el = fixture.debugElement.query(By.css('#feature')).nativeElement;
      expect(el.innerText).toEqual('Test feature');
    });
  });

  describe('when the toggle is set to false', () => {
    it('should disable a feature', () => {
      when(lgFeatureToggleServiceMock.toggles$).thenReturn(of({ 'feature': false }));
      fixture.detectChanges();

      const de = fixture.debugElement.query(By.css('#feature'));
      expect(de).toBeNull();
    });
  });

  describe('when the toggle is set to undefined', () => {
    it('should enable a feature', () => {
      when(lgFeatureToggleServiceMock.toggles$).thenReturn(of({ 'feature': undefined }));
      fixture.detectChanges();

      const el = fixture.debugElement.query(By.css('#feature')).nativeElement;
      expect(el.innerText).toEqual('Test feature');
    });
  });

  describe('when toggles$ returns an empty object', () => {
    it('should enable the elements that have the lgFeatureToggle directive', () => {
      when(lgFeatureToggleServiceMock.toggles$).thenReturn(of({}));
      fixture.detectChanges();

      const el = fixture.debugElement.query(By.css('#feature')).nativeElement;
      expect(el.innerText).toEqual('Test feature');
    });
  });
});
