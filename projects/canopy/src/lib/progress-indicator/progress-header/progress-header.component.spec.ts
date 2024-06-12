import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgProgressHeaderComponent } from './progress-header.component';

describe('LgProgressHeaderComponent', () => {
  let component: LgProgressHeaderComponent;
  let fixture: ComponentFixture<LgProgressHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgProgressHeaderComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgProgressHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-progress-header');
  });
});
