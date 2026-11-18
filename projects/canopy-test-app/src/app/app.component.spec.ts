import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    const formBuilderMock = {
      group: vi.fn(),
      control: vi.fn(),
      array: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [ AppComponent ],
      providers: [ { provide: UntypedFormBuilder, useValue: formBuilderMock } ],
    })
      .overrideComponent(AppComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title \'canopy-test-app\'', () => {
    expect(component.title).toEqual('canopy-test-app');
  });
});
