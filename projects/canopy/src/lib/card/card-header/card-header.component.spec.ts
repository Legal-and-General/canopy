import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { LgSeparatorComponent } from '../../separator/separator.component';
import { LgCardHeaderComponent } from './card-header.component';

describe('LgCardHeaderComponent', () => {
  let component: LgCardHeaderComponent;
  let fixture: ComponentFixture<LgCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LgCardHeaderComponent,
        MockComponents(LgSeparatorComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-card-header'
    );
  });
});
