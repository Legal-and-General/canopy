import { TestBed } from '@angular/core/testing';

import { LgIconRegistry } from '../../icon';

import { DocsWelcomeBottomLinksSectionComponent } from './bottom-links-section.component';
import { DocsWelcomeUsageComponent } from './usage.component';

describe('welcome documentation links', () => {
  it('opens the usage guide in the Storybook manager', async () => {
    await TestBed.configureTestingModule({
      imports: [ DocsWelcomeUsageComponent ],
    }).compileComponents();

    const fixture = TestBed.createComponent(DocsWelcomeUsageComponent);

    fixture.autoDetectChanges();
    await fixture.whenStable();

    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');

    expect(link.getAttribute('href')).toBe(
      './?path=/docs/development-using-canopy-installation-and-usage--docs',
    );

    expect(link.getAttribute('target')).toBe('_top');
  });

  it('opens internal links in the manager and external links in a new tab', async () => {
    await TestBed.configureTestingModule({
      imports: [ DocsWelcomeBottomLinksSectionComponent ],
      providers: [
        {
          provide: LgIconRegistry,
          useValue: { get: jest.fn().mockResolvedValue('<svg></svg>') },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(DocsWelcomeBottomLinksSectionComponent);

    fixture.componentRef.setInput('heading', 'Contribute');
    fixture.componentRef.setInput('text', 'Find out more');

    fixture.componentRef.setInput('links', [
      { href: './?path=/docs/example--docs', text: 'Internal', target: '_top' },
      { href: 'https://example.com', text: 'External' },
    ]);

    fixture.autoDetectChanges();
    await fixture.whenStable();

    const links: NodeListOf<HTMLAnchorElement> =
      fixture.nativeElement.querySelectorAll('a');

    expect(links).toHaveLength(2);
    expect(links[0].getAttribute('target')).toBe('_top');
    expect(links[0].textContent).not.toContain('opens in a new tab');
    expect(links[1].getAttribute('target')).toBe('_blank');
    expect(links[1].getAttribute('rel')).toBe('noopener noreferrer');
    expect(links[1].textContent).toContain('opens in a new tab');
  });
});
