import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgFooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: LgFooterComponent;
  let fixture: ComponentFixture<LgFooterComponent>;

  const logo = 'http://a.b/logo.png';
  const logoAlt = 'logo alt';
  const text1 = 'test1';
  const href1 = 'https://a.b';

  const text2 = 'test2';
  const href2 = 'https://b.c';

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgFooterComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgFooterComponent);
    component = fixture.componentInstance;
    component.primaryLinks = [{ text: text1, href: href1 }];
    component.secondaryLinks = [{ text: text2, href: href2 }];
    component.logo = logo;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('logo', () => {
    it('renders the logo when the property is set', () => {
      component.logo = logo;
      fixture.detectChanges();
      const image = fixture.debugElement.query(By.css('img'));
      expect(image).toBeTruthy();
      expect(image.attributes.src).toBe(logo);
    });

    it('does not render a logo when the property is not set', () => {
      component.logo = null;
      fixture.detectChanges();
      const image = fixture.debugElement.query(By.css('img'));
      expect(image).toBeFalsy();
    });

    it('adds a silent alt when there is a logo', () => {
      component.logo = logo;
      fixture.detectChanges();
      const image = fixture.debugElement.query(By.css('img'));
      expect(image).toBeTruthy();
      expect(image.attributes.alt).toBe('');
    });

    it('adds a standard alt when alt and logo are set', () => {
      component.logo = logo;
      component.logoAlt = logoAlt;
      fixture.detectChanges();
      const image = fixture.debugElement.query(By.css('img'));
      expect(image).toBeTruthy();
      expect(image.attributes.alt).toBe(logoAlt);
    });
  });

  describe('for primary links', () => {
    it('renders', () => {
      const link = fixture.debugElement.query(By.css(`[href="${href1}"]`));
      expect(link).toBeTruthy();
      expect(link.attributes.href).toBe(href1);
    });

    it('does not throw an error when no links are provided', () => {
      expect(() => {
        component.primaryLinks = null;
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('it defaults the target to _blank', () => {
      const link = fixture.debugElement.query(By.css(`[href="${href1}"]`));
      expect(link.nativeElement.attributes.target.value).toBe('_blank');
    });

    it('the target can be overridden', () => {
      const target = '_self';
      component.primaryLinks = [{ text: text1, href: href1, target }];
      fixture.detectChanges();
      const link = fixture.debugElement.query(By.css(`[href="${href1}"]`));
      expect(link.nativeElement.attributes.target.value).toBe(target);
    });

    it('emits an event when clicked', () => {
      let selectedHref: string;
      component.primaryLinkClicked.subscribe((event: Event) => {
        selectedHref = (event.target as HTMLLinkElement).attributes.getNamedItem('href')
          .value;
        event.preventDefault();
      });

      const link = fixture.debugElement.query(By.css(`[href="${href1}"]`));
      link.nativeElement.click();
      expect(selectedHref).toBe(href1);
    });
  });

  describe('for secondary links', () => {
    it('renders', () => {
      const link = fixture.debugElement.query(By.css(`[href="${href2}"]`));
      expect(link).toBeTruthy();
      expect(link.attributes.href).toBe(href2);
    });

    it('does not throw an error when no links are provided', () => {
      expect(() => {
        component.secondaryLinks = null;
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('it defaults the target to _blank', () => {
      const link = fixture.debugElement.query(By.css(`[href="${href2}"]`));
      expect(link.nativeElement.attributes.target.value).toBe('_blank');
    });

    it('the target can be overridden', () => {
      const target = '_self';
      component.secondaryLinks = [{ text: text2, href: href2, target }];
      fixture.detectChanges();
      const link = fixture.debugElement.query(By.css(`[href="${href2}"]`));
      expect(link.nativeElement.attributes.target.value).toBe(target);
    });

    it('emits an event when clicked', () => {
      let selectedHref: string;
      component.secondaryLinkClicked.subscribe((event: Event) => {
        selectedHref = (event.target as HTMLLinkElement).attributes.getNamedItem('href')
          .value;
        event.preventDefault();
      });

      const link = fixture.debugElement.query(By.css(`[href="${href2}"]`));
      link.nativeElement.click();
      expect(selectedHref).toBe(href2);
    });
  });
});
