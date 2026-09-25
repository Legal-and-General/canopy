import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgHeroComponent } from './hero.component';

describe('LgHeroComponent', () => {
  let component: LgHeroComponent;
  let fixture: ComponentFixture<LgHeroComponent>;
  let debugElement: DebugElement;
  let componentElement: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgHeroComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    componentElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(componentElement.getAttribute('class')).toContain('lg-hero');
  });
});
