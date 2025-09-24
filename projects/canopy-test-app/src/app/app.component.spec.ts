import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let formBuilderMock: jest.Mocked<UntypedFormBuilder>;

  beforeEach(waitForAsync(() => {
    formBuilderMock = {
      group: jest.fn(),
      control: jest.fn(),
      array: jest.fn(),
    } as unknown as jest.Mocked<UntypedFormBuilder>;

    TestBed.configureTestingModule({
      imports: [ AppComponent ],
      providers: [ { provide: UntypedFormBuilder, useValue: formBuilderMock } ],
    }).compileComponents();

    fixture = TestBed.overrideComponent(AppComponent, {
      set: { template: '' },
    }).createComponent(AppComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title \'canopy-test-app\'', () => {
    expect(component.title).toEqual('canopy-test-app');
  });
});
