import { Component, ViewContainerRef, TemplateRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { of } from 'rxjs';

import { FeatureToggleService } from './feature-toggle.service';
import { FeatureToggleDirective } from './feature-toggle.directive';

@Component({
  template: `
    <section *featureToggle="'featureOne'" id="first" >Test feature one</section>
    <section *featureToggle="'featureTwo'" id="second">Test feature two</section>
  `
})
class TestComponent {}

class MockToggleService {
  toggles$ = of({
    'featureOne': true,
    'featureTwo': false,
  });
}

describe('FeatureToggleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FeatureToggleDirective],
      providers: [TemplateRef, ViewContainerRef,
        { provide: FeatureToggleService, useClass: MockToggleService }
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should enable a feature', () => {
    const el = fixture.debugElement.query(By.css('#first')).nativeElement;
    expect(el.innerText).toEqual('Test feature one');
  });

  it('should disable a feature', () => {
    const de = fixture.debugElement.query(By.css('#second'));
    expect(de).toBeNull();
  });
});
