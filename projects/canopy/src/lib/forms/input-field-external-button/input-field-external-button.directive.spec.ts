import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgInputFieldExternalButtonDirective } from './input-field-external-button.directive';

@Component({
  template: ` <button lgInputFieldExternalButton>Button 1</button>
    <button lgInputFieldExternalButton>Button 2</button>
    <button lgInputFieldExternalButton [id]="customId">Button 3</button>`,
  standalone: true,
  imports: [ LgInputFieldExternalButtonDirective ],
})
class TestComponent {
  customId = 'custom-id';
}

describe('LgInputFieldExternalButtonDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let buttonElements: Array<DebugElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    buttonElements = fixture.debugElement.queryAll(
      By.directive(LgInputFieldExternalButtonDirective),
    );
  });

  it('should create', () => {
    expect(buttonElements.length).toBe(3);
  });

  it('should have auto-generated IDs', () => {
    const button1 = buttonElements[0].nativeElement;
    const button2 = buttonElements[1].nativeElement;

    expect(button1.id).toMatch(/^lg-input-field-external-button-\d+$/);
    expect(button2.id).toMatch(/^lg-input-field-external-button-\d+$/);
    expect(button1.id).not.toBe(button2.id);
  });

  it('should accept a custom ID', () => {
    const button3 = buttonElements[2].nativeElement;

    expect(button3.id).toBe('custom-id');
  });

  it('should update ID when input changes', () => {
    const button3 = buttonElements[2].nativeElement;

    expect(button3.id).toBe('custom-id');

    fixture.componentInstance.customId = 'new-custom-id';
    fixture.detectChanges();

    expect(button3.id).toBe('new-custom-id');
  });
});
