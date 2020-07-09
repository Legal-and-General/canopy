import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponents } from 'ng-mocks';

import { LgTableCellComponent } from '../table-cell/table-cell.component';
import { LgTableExpandedDetailComponent } from './table-expanded-detail.component';

describe('LgTableExpandedDetailComponent', () => {
  let component: LgTableExpandedDetailComponent;
  let fixture: ComponentFixture<LgTableExpandedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LgTableExpandedDetailComponent,
        MockComponents(LgTableCellComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTableExpandedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the expanded detail class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toBe(
      'lg-table-expanded-detail',
    );
  });
});
