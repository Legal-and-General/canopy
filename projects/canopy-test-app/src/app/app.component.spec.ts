import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { instance, mock } from 'ts-mockito';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    const formBuilderMock = mock(FormBuilder);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: FormBuilder, useFactory: () => instance(formBuilderMock) }],
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

  it(`should have as title 'canopy-test-app'`, () => {
    expect(component.title).toEqual('canopy-test-app');
  });
});
