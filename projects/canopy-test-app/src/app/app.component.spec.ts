import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { MockModule } from 'ng-mocks';

import { instance, mock } from 'ts-mockito';

import { AppComponent } from './app.component';
import { CanopyModule } from 'projects/canopy/src/lib/canopy.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    const formBuilderMock = mock(FormBuilder);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [MockModule(CanopyModule)],
      providers: [{ provide: FormBuilder, useFactory: () => instance(formBuilderMock) }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
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
