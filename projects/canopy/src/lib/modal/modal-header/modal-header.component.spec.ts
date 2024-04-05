import { ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock, spy, verify } from '@typestrong/ts-mockito';
import { MockComponent } from 'ng-mocks';

import { LgModalService } from '../modal.service';
import { LgIconComponent } from '../../icon';

import { LgModalHeaderComponent } from './modal-header.component';

describe('LgModalHeaderComponent', () => {
  let component: LgModalHeaderComponent;
  let fixture: ComponentFixture<LgModalHeaderComponent>;
  let modalServiceMock: LgModalService;

  beforeEach(async () => {
    modalServiceMock = mock(LgModalService);

    await TestBed.configureTestingModule({
      imports: [ LgModalHeaderComponent, MockComponent(LgIconComponent) ],
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
    const closedEmitterSpy = spy(component.closed);

    component.modalId = 'test';
    component.close();

    verify(closedEmitterSpy.emit()).once();
    verify(modalServiceMock.close('test')).once();

    expect().nothing();
  });
});
