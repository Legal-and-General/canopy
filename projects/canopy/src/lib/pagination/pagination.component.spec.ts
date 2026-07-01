import { By } from '@angular/platform-browser';
import { MockComponent, ngMocks } from 'ng-mocks';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgIconComponent } from '../icon';

import { LgPaginationComponent as LgPaginationComponent } from './pagination.component';

describe('LgPaginationComponent', () => {
  const getButtons = () =>
    fixture.debugElement.queryAll(
      By.css('.lg-pagination__controls--desktop .lg-pagination__button'),
    );
  const getActiveButton = () =>
    fixture.debugElement.query(
      By.css('.lg-pagination__controls--desktop .lg-pagination__button--active'),
    );
  const getPageButtons = () =>
    fixture.debugElement.queryAll(
      By.css(
        '.lg-pagination__controls--desktop .lg-pagination__button:not(.lg-pagination__button--prevnext)',
      ),
    );
  const getMobileButtons = () =>
    fixture.debugElement.queryAll(
      By.css('.lg-pagination__controls--mobile .lg-pagination__button'),
    );
  const getMobilePageButtons = () =>
    fixture.debugElement.queryAll(
      By.css(
        '.lg-pagination__controls--mobile .lg-pagination__button:not(.lg-pagination__button--prevnext)',
      ),
    );
  const getEllipses = () =>
    fixture.debugElement.queryAll(
      By.css('.lg-pagination__controls--desktop .lg-pagination__ellipsis'),
    );
  const getPreviousButton = () => getButtons()[0];

  const getNextButton = () => {
    const buttons = getButtons();

    return buttons[buttons.length - 1];
  };

  let component: LgPaginationComponent;
  let fixture: ComponentFixture<LgPaginationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgPaginationComponent, MockComponent(LgIconComponent) ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgPaginationComponent);
    component = fixture.componentInstance;
  }));

  afterEach(() => ngMocks.flushTestBed());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#itemsPerPage', () => {
    it('should not allow values less than 1', () => {
      component.itemsPerPage = 0;

      expect(component.itemsPerPage).toBe(1);
    });
  });

  describe('#totalItems', () => {
    it('should not allow negative values', () => {
      component.totalItems = -1;

      expect(component.totalItems).toBe(0);
    });
  });

  describe('#currentPage', () => {
    it('should not allow values less than 1', () => {
      component.currentPage = -1;

      expect(component.currentPage).toBe(1);
    });

    it('should not allow values more than the number of pages', () => {
      component.totalItems = 10;
      component.itemsPerPage = 2;
      component.currentPage = component.numPages + 1;

      expect(component.currentPage).toBe(component.numPages);
    });
  });

  describe('buttons', () => {
    beforeEach(() => {
      component.totalItems = 30;
      component.itemsPerPage = 10;
      fixture.detectChanges();
    });

    it('should create buttons for each page', () => {
      expect(getButtons().length).toBe(5); // 3 desktop page buttons plus previous and next buttons
    });

    it('should create 5 mobile controls when more than 3 pages exist', () => {
      fixture.componentRef.setInput('totalItems', 70);
      fixture.componentRef.setInput('itemsPerPage', 10);
      fixture.componentRef.setInput('currentPage', 4);
      fixture.detectChanges();

      expect(getMobileButtons().length).toBe(5);

      expect(
        getMobilePageButtons().map(button =>
          Number((button.nativeElement as HTMLButtonElement).textContent?.trim()),
        ),
      ).toEqual([ 3, 4, 5 ]);
    });

    it('should disable the previous button when the current page is the first', () => {
      fixture.componentRef.setInput('currentPage', 1);
      fixture.detectChanges();

      expect(getPreviousButton().nativeElement.disabled).toBe(true);
    });

    it('should disable the next button when the current page is the last', () => {
      fixture.componentRef.setInput('currentPage', fixture.componentInstance.numPages);
      fixture.detectChanges();

      expect(getNextButton().nativeElement.disabled).toBe(true);
    });

    it('should highlight the current page', () => {
      fixture.componentRef.setInput('currentPage', 2);
      fixture.detectChanges();

      expect(getActiveButton().nativeElement.textContent.trim()).toBe('2');
      expect(getPreviousButton().nativeElement.disabled).toBe(false);
      expect(getNextButton().nativeElement.disabled).toBe(false);
    });

    it('should not render when there is only 1 page', () => {
      expect(fixture.debugElement.query(By.css('ul'))).not.toBeNull();
      fixture.componentRef.setInput('totalItems', 10);
      fixture.componentRef.setInput('itemsPerPage', 10);
      fixture.detectChanges();

      const nav = fixture.debugElement.query(By.css('nav'));
      const label = fixture.debugElement.query(By.css('.lg-pagination__label'));

      expect(component.pages.length).toBe(1);
      expect(nav).toBeNull();
      expect(label).toBeNull();
    });
  });

  describe('desktop truncation', () => {
    const getPageNumbers = () =>
      getPageButtons().map(button =>
        Number((button.nativeElement as HTMLButtonElement).textContent?.trim()),
      );

    beforeEach(() => {
      fixture.componentRef.setInput('totalItems', 200);
      fixture.componentRef.setInput('itemsPerPage', 10);
    });

    it('keeps total controls to 9 including prev/next and ellipses', () => {
      fixture.componentRef.setInput('currentPage', 10);
      fixture.detectChanges();

      const controls = fixture.debugElement.queryAll(
        By.css('.lg-pagination__controls--desktop > li'),
      );

      expect(controls.length).toBeLessThanOrEqual(9);
    });

    it('shows first, last, current and closest neighbours in the middle', () => {
      fixture.componentRef.setInput('currentPage', 10);
      fixture.detectChanges();

      expect(getPageNumbers()).toEqual([ 1, 9, 10, 11, 20 ]);
      expect(getEllipses().length).toBe(2);
    });

    it('shows first, last and available neighbours near the start', () => {
      fixture.componentRef.setInput('currentPage', 2);
      fixture.detectChanges();

      expect(getPageNumbers()).toEqual([ 1, 2, 3, 4, 20 ]);
      expect(getEllipses().length).toBe(1);
    });

    it('shows first, last and available neighbours near the end', () => {
      fixture.componentRef.setInput('currentPage', 19);
      fixture.detectChanges();

      expect(getPageNumbers()).toEqual([ 1, 17, 18, 19, 20 ]);
      expect(getEllipses().length).toBe(1);
    });
  });

  describe('mobile controls', () => {
    const getMobilePages = () =>
      component.mobileControls
        .filter(control => control.type === 'page')
        .map(control => (control.type === 'page'
          ? control.page
          : -1));
    const getMobileEllipses = () =>
      fixture.debugElement.queryAll(
        By.css('.lg-pagination__controls--mobile .lg-pagination__ellipsis'),
      );

    beforeEach(() => {
      fixture.componentRef.setInput('totalItems', 200);
      fixture.componentRef.setInput('itemsPerPage', 10);
    });

    it('shows first 3 pages when current page is near start', () => {
      fixture.componentRef.setInput('currentPage', 1);

      expect(getMobilePages()).toEqual([ 1, 2, 3 ]);
    });

    it('shows a sliding window of 3 pages around the current page', () => {
      fixture.componentRef.setInput('currentPage', 10);

      expect(getMobilePages()).toEqual([ 9, 10, 11 ]);
    });

    it('shows last 3 pages when current page is near end', () => {
      fixture.componentRef.setInput('currentPage', 20);

      expect(getMobilePages()).toEqual([ 18, 19, 20 ]);
    });

    it('renders 5 mobile controls in total with no truncation ellipses', () => {
      fixture.componentRef.setInput('currentPage', 10);
      fixture.detectChanges();

      expect(getMobileButtons().length).toBe(5);
      expect(getMobileEllipses().length).toBe(0);
    });
  });

  describe('label', () => {
    let label: HTMLElement;

    beforeEach(() => {
      fixture.componentRef.setInput('totalItems', 33);
      fixture.componentRef.setInput('itemsPerPage', 10);
      fixture.detectChanges();
      label = fixture.debugElement.query(By.css('div')).nativeElement;
    });

    it('displays the correct text on the first page', () => {
      fixture.componentInstance.currentPage = 1;
      fixture.detectChanges();

      expect(label.textContent.trim()).toBe('Showing 1-10 of 33 results');
    });

    it('displays the correct text on a middle page', () => {
      fixture.componentRef.setInput('currentPage', 2);
      fixture.detectChanges();

      expect(label.textContent.trim()).toBe('Showing 11-20 of 33 results');
    });

    it('displays the correct text on the last page', () => {
      fixture.componentRef.setInput('currentPage', 4);
      fixture.detectChanges();

      expect(label.textContent.trim()).toBe('Showing 31-33 of 33 results');
    });
  });

  describe('#pageChanged', () => {
    let pageChangedSpy: jest.SpyInstance;

    beforeEach(() => {
      fixture.componentRef.setInput('totalItems', 30);
      fixture.componentRef.setInput('itemsPerPage', 10);

      fixture.detectChanges();

      pageChangedSpy = jest.spyOn(component.pageChanged, 'emit');
    });

    it('should emit when the total items input changes', () => {
      fixture.componentRef.setInput('totalItems', 40);
      fixture.detectChanges();

      expect(pageChangedSpy).toHaveBeenCalledWith({
        pageNumber: 1,
        startIndex: 0,
        endIndex: 9,
      });
    });

    it('should emit when the itemsPerPage input changes', () => {
      fixture.componentRef.setInput('itemsPerPage', 5);
      fixture.detectChanges();

      expect(pageChangedSpy).toHaveBeenCalledWith({
        pageNumber: 1,
        startIndex: 0,
        endIndex: 4,
      });
    });

    it('should emit when the currentPage input changes', () => {
      fixture.componentRef.setInput('currentPage', 2);
      fixture.detectChanges();

      expect(pageChangedSpy).toHaveBeenCalledWith({
        pageNumber: 2,
        startIndex: 10,
        endIndex: 19,
      });
    });

    it('should emit when the next button is clicked', () => {
      getNextButton().nativeElement.click();

      fixture.detectChanges();

      expect(pageChangedSpy).toHaveBeenCalledWith({
        pageNumber: 2,
        startIndex: 10,
        endIndex: 19,
      });
    });

    it('should emit when the previous button is clicked', () => {
      fixture.componentRef.setInput('currentPage', 2);
      fixture.detectChanges();
      pageChangedSpy.mockReset();

      getPreviousButton().nativeElement.click();

      fixture.detectChanges();

      expect(pageChangedSpy).toHaveBeenCalledWith({
        pageNumber: 1,
        startIndex: 0,
        endIndex: 9,
      });
    });

    it('should emit when the a page button is clicked', () => {
      getButtons()[2].nativeElement.click();

      fixture.detectChanges();

      expect(pageChangedSpy).toHaveBeenCalledWith({
        pageNumber: 2,
        startIndex: 10,
        endIndex: 19,
      });
    });
  });
});
