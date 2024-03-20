import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardSubheadingComponent } from './card-subheading.component';

describe('CardSubheadingComponent', () => {
  let component: LgCardSubheadingComponent;
  let fixture: ComponentFixture<LgCardSubheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgCardSubheadingComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgCardSubheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-card-subheading');
  });
});
