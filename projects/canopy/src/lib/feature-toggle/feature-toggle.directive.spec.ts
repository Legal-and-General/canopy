import { FeatureToggleDirective } from './feature-toggle.directive';
import { Component, ViewContainerRef, TemplateRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <section *featureOff="testVar">Test feature</section>
  `
})
class TestComponent {
  testVar = true;
}

describe('FeatureToggleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FeatureToggleDirective],
      providers: [TemplateRef, ViewContainerRef]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should toggle off a feature', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('section'));
    expect(de).toBeNull();
  });

  it('should show a feature', () => {
    component.testVar = false;
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('section')).nativeElement;
    expect(el.innerText).toEqual('Test feature');
  });
});
