import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgFilterContainerPanelBodyComponent } from './filter-container-panel-body.component';

describe('LgFilterContainerPanelBodyComponent', () => {
  let component: LgFilterContainerPanelBodyComponent;
  let fixture: ComponentFixture<LgFilterContainerPanelBodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgFilterContainerPanelBodyComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgFilterContainerPanelBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(fixture.debugElement.nativeElement.getAttribute('class')).toContain(
      'lg-filter-container-panel-body',
    );
  });
});
