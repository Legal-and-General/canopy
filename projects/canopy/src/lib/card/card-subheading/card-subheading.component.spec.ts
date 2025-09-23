import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardSubheadingComponent } from './card-subheading.component';

describe('CardSubheadingComponent', () => {
  let component: LgCardSubheadingComponent;
  let fixture: ComponentFixture<LgCardSubheadingComponent>;

  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgCardSubheadingComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgCardSubheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-card-subheading');
  });

  it('should log an error if the heading level is not set', () => {
    expect(consoleErrorSpy).toHaveBeenCalledWith('headingLevel must be set');
  });

  it('should not log an error if the heading level is set', () => {
    consoleErrorSpy.mockClear();
    component.headingLevel = 2;
    fixture.detectChanges();

    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });
});
