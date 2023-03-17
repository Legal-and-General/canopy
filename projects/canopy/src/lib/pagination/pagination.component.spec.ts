import { By } from '@angular/platform-browser';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';

import { LgIconModule } from '../icon/index';

import { LgPagionationComponent as LgPaginationComponent } from './pagination.component';

describe('LgPaginationComponent', () => {
  const getButtons = () =>
    fixture.debugElement.queryAll(By.css('.lg-pagination__button'));
  const getActiveButton = () =>
    fixture.debugElement.query(By.css('.lg-pagination__button--active'));
  const getPreviousButton = () => getButtons()[0];

  const getNextButton = () => {
    const buttons = getButtons();

    return buttons[buttons.length - 1];
  };

  let component: LgPaginationComponent;
  let fixture: MockedComponentFixture<LgPaginationComponent>;

  beforeEach(() => {
    return MockBuilder(LgPaginationComponent).mock(LgIconModule);
  });

  beforeEach(() => {
    fixture = MockRender(LgPaginationComponent);
    component = fixture.point.componentInstance;
  });

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
      fixture.componentInstance.totalItems = 30;
      fixture.componentInstance.itemsPerPage = 10;
      fixture.detectChanges();
    });

    it('should create buttons for each page', () => {
      expect(getButtons().length).toBe(5); // 3 pages plus previous and next buttons
    });

    it('should disable the previous button when the current page is the first', () => {
      fixture.componentInstance.currentPage = 1;
      fixture.detectChanges();

      expect(getPreviousButton().nativeElement.disabled).toBe(true);
    });

    it('should disable the next button when the current page is the last', () => {
      fixture.componentInstance.currentPage = fixture.componentInstance.numPages;
      fixture.detectChanges();

      expect(getNextButton().nativeElement.disabled).toBe(true);
    });

    it('should highlight the current page', () => {
      fixture.componentInstance.currentPage = 2;
      fixture.detectChanges();

      expect(getActiveButton().nativeElement.textContent.trim()).toBe('2');
      expect(getPreviousButton().nativeElement.disabled).toBeFalse();
      expect(getNextButton().nativeElement.disabled).toBeFalse();
    });

    it('should not render when there is only 1 page', () => {
      expect(fixture.debugElement.query(By.css('ul'))).not.toBeNull();
      fixture.componentInstance.totalItems = 10;
      fixture.componentInstance.itemsPerPage = 10;
      fixture.detectChanges();

      const nav = fixture.debugElement.query(By.css('nav'));
      const label = fixture.debugElement.query(By.css('.lg-pagination__label'));

      expect(component.pages.length).toBe(1);
      expect(nav).toBeNull();
      expect(label).toBeNull();
    });
  });

  describe('label', () => {
    let label: HTMLElement;

    beforeEach(() => {
      fixture.componentInstance.totalItems = 33;
      fixture.componentInstance.itemsPerPage = 10;
      fixture.detectChanges();
      label = fixture.debugElement.query(By.css('div')).nativeElement;
    });

    it('displays the correct text on the first page', () => {
      fixture.componentInstance.currentPage = 1;
      fixture.detectChanges();

      expect(label.textContent.trim()).toBe('Showing 1-10 of 33 results');
    });

    it('displays the correct text on a middle page', () => {
      fixture.componentInstance.currentPage = 2;
      fixture.detectChanges();

      expect(label.textContent.trim()).toBe('Showing 11-20 of 33 results');
    });

    it('displays the correct text on the last page', () => {
      fixture.componentInstance.currentPage = 4;
      fixture.detectChanges();

      expect(label.textContent.trim()).toBe('Showing 31-33 of 33 results');
    });
  });

  describe('#pageChanged', () => {
    let pageChangedSpy: jasmine.Spy;

    beforeEach(() => {
      fixture.componentInstance.totalItems = 30;
      fixture.componentInstance.itemsPerPage = 10;

      fixture.detectChanges();

      pageChangedSpy = spyOn(component.pageChanged, 'emit');
    });

    it('should emit when the total items input changes', () => {
      fixture.componentInstance.totalItems = 40;

      fixture.detectChanges();

      expect(component.pageChanged.emit).toHaveBeenCalledOnceWith({
        pageNumber: 1,
        startIndex: 0,
        endIndex: 9,
      });
    });

    it('should emit when the itemsPerPage input changes', () => {
      fixture.componentInstance.itemsPerPage = 5;

      fixture.detectChanges();

      expect(component.pageChanged.emit).toHaveBeenCalledOnceWith({
        pageNumber: 1,
        startIndex: 0,
        endIndex: 4,
      });
    });

    it('should emit when the currentPage input changes', () => {
      fixture.componentInstance.currentPage = 2;

      fixture.detectChanges();

      expect(component.pageChanged.emit).toHaveBeenCalledOnceWith({
        pageNumber: 2,
        startIndex: 10,
        endIndex: 19,
      });
    });

    it('should emit when the next button is clicked', () => {
      getNextButton().nativeElement.click();

      fixture.detectChanges();

      expect(component.pageChanged.emit).toHaveBeenCalledOnceWith({
        pageNumber: 2,
        startIndex: 10,
        endIndex: 19,
      });
    });

    it('should emit when the previous button is clicked', () => {
      fixture.componentInstance.currentPage = 2;
      fixture.detectChanges();
      pageChangedSpy.calls.reset();

      getPreviousButton().nativeElement.click();

      fixture.detectChanges();

      expect(component.pageChanged.emit).toHaveBeenCalledOnceWith({
        pageNumber: 1,
        startIndex: 0,
        endIndex: 9,
      });
    });

    it('should emit when the a page button is clicked', () => {
      getButtons()[2].nativeElement.click();

      fixture.detectChanges();

      expect(component.pageChanged.emit).toHaveBeenCalledOnceWith({
        pageNumber: 2,
        startIndex: 10,
        endIndex: 19,
      });
    });
  });
});
