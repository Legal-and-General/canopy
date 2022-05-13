import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { LgIconComponent } from '../icon';

import { LgQuickActionComponent } from './quick-action.component';

describe('LgQuickActionComponent', () => {
  let component: LgQuickActionComponent;
  let fixture: ComponentFixture<LgQuickActionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ LgQuickActionComponent, MockComponents(LgIconComponent) ],
      }).compileComponents();

      fixture = TestBed.createComponent(LgQuickActionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the quick action class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-quick-action');
  });
});
