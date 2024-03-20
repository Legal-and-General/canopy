import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockComponents, MockRender } from 'ng-mocks';

import { LgTabItemContentComponent } from '../tab-item-content/tab-item-content.component';
import { LgTabItemHeadingComponent } from '../tab-item-heading/tab-item-heading.component';

import { LgTabItemComponent } from './tab-item.component';

describe('LgTabItemComponent', () => {
  let component: LgTabItemComponent;
  let fixture: ComponentFixture<LgTabItemComponent>;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgTabItemComponent,
        MockComponents(LgTabItemHeadingComponent, LgTabItemContentComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <lg-tab-item-content>
        <lg-tab-item-heading>
          <h3 class="mock-heading">Heading</h3>
        </lg-tab-item-heading>
        <lg-tab-item-content>
          <p class="mock-content">Content</p>
        </lg-tab-item-content>
      </lg-tab-item-content>
    `);

    debugElement = fixture.debugElement;
    component = debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    const heading = debugElement.query(By.css('.mock-heading'));

    expect(heading.nativeElement.innerHTML).toContain('Heading');
  });

  it('should render content', () => {
    const content = debugElement.query(By.css('.mock-content'));

    expect(content.nativeElement.innerHTML).toContain('Content');
  });
});
