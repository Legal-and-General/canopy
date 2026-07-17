import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardFooterComponent } from './card-footer.component';

@Component({
  template: `
    <lg-card-footer>
      <a href="#">Primary action</a>
    </lg-card-footer>
  `,
  imports: [ LgCardFooterComponent ],
  standalone: true,
})
class LgCardFooterWithAnchorHostComponent {}

@Component({
  template: ' <lg-card-footer> Footer text content </lg-card-footer> ',
  imports: [ LgCardFooterComponent ],
  standalone: true,
})
class LgCardFooterWithTextHostComponent {}

@Component({
  template: `
    <lg-card-footer>
      <a href="#">Continue</a>
      <p>Unsupported paragraph</p>
    </lg-card-footer>
  `,
  imports: [ LgCardFooterComponent ],
  standalone: true,
})
class LgCardFooterWithMixedContentHostComponent {}

describe('LgCardFooterComponent', () => {
  let component: LgCardFooterComponent;
  let fixture: ComponentFixture<LgCardFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgCardFooterComponent,
        LgCardFooterWithAnchorHostComponent,
        LgCardFooterWithTextHostComponent,
        LgCardFooterWithMixedContentHostComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-card-footer');
  });

  it('should project allowed anchor actions', () => {
    const hostFixture = TestBed.createComponent(LgCardFooterWithAnchorHostComponent);

    hostFixture.detectChanges();

    const footer: HTMLElement = hostFixture.nativeElement.querySelector('lg-card-footer');

    expect(footer.querySelector('a')).toBeTruthy();
    expect(footer.textContent).toContain('Primary action');
  });

  it('should not project plain text content', () => {
    const hostFixture = TestBed.createComponent(LgCardFooterWithTextHostComponent);

    hostFixture.detectChanges();

    const footer: HTMLElement = hostFixture.nativeElement.querySelector('lg-card-footer');

    expect(footer.textContent?.trim()).toBe('');
  });

  it('should project only allowed content when mixed content is provided', () => {
    const hostFixture = TestBed.createComponent(
      LgCardFooterWithMixedContentHostComponent,
    );

    hostFixture.detectChanges();

    const footer: HTMLElement = hostFixture.nativeElement.querySelector('lg-card-footer');

    expect(footer.querySelector('a')).toBeTruthy();
    expect(footer.querySelector('p')).toBeNull();
    expect(footer.textContent).toContain('Continue');
  });
});
