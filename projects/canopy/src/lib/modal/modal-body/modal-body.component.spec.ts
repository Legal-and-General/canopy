import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgModalBodyComponent } from './modal-body.component';

describe('LgModalBodyComponent', () => {
  let component: LgModalBodyComponent;
  let fixture: ComponentFixture<LgModalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgModalBodyComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgModalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-modal-body');
  });

  it('should have an id', () => {
    component.id = 'test-2';
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('id')).toContain('test-2');
  });
});
