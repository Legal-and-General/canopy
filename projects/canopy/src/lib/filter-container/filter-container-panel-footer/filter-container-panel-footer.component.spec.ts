import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgFilterContainerPanelFooterComponent } from './filter-container-panel-footer.component';

describe('LgFilterContainerPanelFooterComponent', () => {
  let component: LgFilterContainerPanelFooterComponent;
  let fixture: ComponentFixture<LgFilterContainerPanelFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgFilterContainerPanelFooterComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgFilterContainerPanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(fixture.debugElement.nativeElement.getAttribute('class')).toContain(
      'lg-filter-container-panel-footer',
    );
  });
});
