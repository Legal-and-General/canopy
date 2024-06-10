import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgProgressIndicatorComponent } from './progress-indicator.component';

describe('LgProgressIndicatorComponent', () => {
  let component: LgProgressIndicatorComponent;
  let fixture: ComponentFixture<LgProgressIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgProgressIndicatorComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct default values', () => {
    expect(component.max).toBe(0);
    expect(component.value).toBe(0);
    expect(component.showProgressBar).toBe(true);
    expect(component.showAsPercentage).toBe(false);
    expect(component.stepsPrefix).toBe('Step');
  });

  it('should apply the correct CSS class', () => {
    const hostElement = fixture.nativeElement;

    expect(hostElement.classList.contains('lg-progress-indicator')).toBe(true);
  });
});
