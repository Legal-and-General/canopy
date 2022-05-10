import { ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock, verify } from 'ts-mockito';

import { LgModalService } from '../modal.service';

import { LgModalHeaderComponent } from './modal-header.component';

describe('LgModalHeaderComponent', () => {
  let component: LgModalHeaderComponent;
  let fixture: ComponentFixture<LgModalHeaderComponent>;
  let modalServiceMock: LgModalService;

  beforeEach(async () => {
    modalServiceMock = mock(LgModalService);

    await TestBed.configureTestingModule({
      declarations: [ LgModalHeaderComponent ],
      providers: [ { provide: LgModalService, useValue: instance(modalServiceMock) } ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-modal-header');
  });

  it('should have an id', () => {
    component.id = 'test-2';
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('id')).toContain('test-2');
  });

  it('should close the modal on #close', () => {
    component.modalId = 'test';
    component.close();

    verify(modalServiceMock.close('test')).once();

    expect().nothing();
  });
});
