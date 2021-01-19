import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LgButtonModule, LgIconModule, LgSelectModule } from '@legal-and-general/canopy';

import {
  LG_PAGINATOR_DEFAULT_OPTIONS,
  LgPaginatorComponent,
  PaginationOptions,
} from './paginator.component';

describe('PaginatorComponent', () => {
  let status: HTMLSpanElement;
  let component: LgPaginatorComponent;
  let fixture: ComponentFixture<LgPaginatorComponent>;

  const imports = [LgSelectModule, LgButtonModule, LgIconModule, FormsModule];
  const declarations = [LgPaginatorComponent];

  const length = 182;

  function setup() {
    fixture = TestBed.createComponent(LgPaginatorComponent);
    component = fixture.componentInstance;
    component.length = length;
    fixture.detectChanges();
    status = fixture.debugElement.query(By.css('.lg-paginator__status')).nativeElement;
  }

  describe('with default options', () => {
    const pageSize = 25;
    const pageSizes = [pageSize, 50];
    const defaults: PaginationOptions = {
      pageSize,
      pageSizes,
      showFirstLastButtons: true,
      hidePageSize: false,
    };

    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          imports,
          declarations,
          providers: [
            {
              provide: LG_PAGINATOR_DEFAULT_OPTIONS,
              useValue: defaults,
            },
          ],
        }).compileComponents();
      }),
    );

    beforeEach(setup);

    it('initialises', () => {
      const pageSizeOptions = fixture.debugElement.queryAll(By.css('option'));

      expect(pageSizeOptions.map(o => +o.nativeElement.value)).toEqual(pageSizes);
      expect(status.innerHTML).toMatch(`1 - ${pageSize} of ${length}`);
    });

    it('moves to next page', () => {
      fixture.debugElement.query(By.css('.lg-paginator__btn-next')).nativeElement.click();
      fixture.detectChanges();
      expect(status.innerHTML).toMatch(`${pageSize + 1} - ${2 * pageSize} of ${length}`);
    });

    it('moves to last page', () => {
      component.length = 100;
      component.pageSize = 10;
      component.pageIndex = 0;
      fixture.detectChanges();
      fixture.debugElement.query(By.css('.lg-paginator__btn-last')).nativeElement.click();
      fixture.detectChanges();
      expect(status.innerHTML).toMatch(`91 - 100 of 100`);

      component.length = 85;
      component.pageIndex = 0;
      component.pageSize = 20;
      fixture.detectChanges();
      fixture.debugElement.query(By.css('.lg-paginator__btn-last')).nativeElement.click();
      fixture.detectChanges();
      expect(status.innerHTML).toMatch(`81 - 85 of 85`);
      expect(
        fixture.debugElement.query(By.css('.lg-paginator__btn-next')).nativeElement
          .disabled,
      ).toBeTruthy();
      expect(
        fixture.debugElement.query(By.css('.lg-paginator__btn-last')).nativeElement
          .disabled,
      ).toBeTruthy();
    });

    it('moves to previous page', () => {
      component.pageIndex = 2;
      fixture.detectChanges();
      expect(status.innerHTML).toMatch(`51 - ${3 * pageSize} of ${length}`);

      fixture.debugElement.query(By.css('.lg-paginator__btn-prev')).nativeElement.click();
      fixture.detectChanges();
      expect(status.innerHTML).toMatch(`26 - ${2 * pageSize} of ${length}`);
    });

    it('moves to first page', () => {
      component.length = 100;
      component.pageSize = 10;
      component.pageIndex = 9;
      fixture.detectChanges();
      fixture.debugElement
        .query(By.css('.lg-paginator__btn-first'))
        .nativeElement.click();
      fixture.detectChanges();
      expect(status.innerHTML).toMatch(`1 - 10 of 100`);
      expect(
        fixture.debugElement.query(By.css('.lg-paginator__btn-prev')).nativeElement
          .disabled,
      ).toBeTruthy();
      expect(
        fixture.debugElement.query(By.css('.lg-paginator__btn-first')).nativeElement
          .disabled,
      ).toBeTruthy();
    });

    it('updates length', () => {
      const newLength = 355;

      component.pageIndex = 2;
      component.length = newLength;
      fixture.detectChanges();

      expect(status.innerHTML).toMatch(`1 - ${pageSize} of ${newLength}`);
    });

    it('updates page sizes', () => {
      const newSizes = [...pageSizes, 500];

      component.pageIndex = 2;
      component.pageSizes = newSizes;
      fixture.detectChanges();

      const pageSizeOptions = fixture.debugElement.queryAll(By.css('option'));
      expect(pageSizeOptions.map(o => +o.nativeElement.value)).toEqual(newSizes);
    });

    it('selects page size', () => {
      const pageSizeOptions = fixture.debugElement.queryAll(By.css('option'));

      component.pageIndex = 2;
      pageSizeOptions[1].nativeElement.selected = true;
      fixture.debugElement
        .query(By.css('select'))
        .nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      expect(status.innerHTML).toMatch(`1 - ${pageSizes[1]} of ${length}`);
    });

    it(
      'triggers page event on next page',
      waitForAsync(() => {
        component.page.subscribe($event =>
          expect($event).toEqual({ pageIndex: 1, pageSize: 25, previousIndex: 0 }),
        );
        fixture.debugElement
          .query(By.css('.lg-paginator__btn-next'))
          .nativeElement.click();
      }),
    );

    it(
      'triggers page event on previous page',
      waitForAsync(() => {
        component.pageIndex = 2;
        fixture.detectChanges();

        component.page.subscribe($event =>
          expect($event).toEqual({ pageIndex: 1, pageSize: 25, previousIndex: 2 }),
        );
        fixture.debugElement
          .query(By.css('.lg-paginator__btn-prev'))
          .nativeElement.click();
      }),
    );
  });

  describe('with partial default options', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          imports,
          declarations,
          providers: [
            {
              provide: LG_PAGINATOR_DEFAULT_OPTIONS,
              useValue: {
                hidePageSize: true,
              },
            },
          ],
        }).compileComponents();
      }),
    );

    beforeEach(setup);

    it('initialises', () => {
      expect(status.innerHTML).toMatch(`1 - 10 of ${length}`);
      expect(fixture.debugElement.query(By.css('.lg-paginator__btn-first'))).toBeNull();
      expect(fixture.debugElement.query(By.css('.lg-paginator__btn-last'))).toBeNull();
      expect(fixture.debugElement.query(By.css('.lg-paginator__page-size'))).toBeNull();
    });
  });

  describe('without default options', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          imports,
          declarations,
        }).compileComponents();
      }),
    );

    beforeEach(setup);

    it('initialises', () => {
      const pageSizeOptions = fixture.debugElement.queryAll(By.css('option'));

      expect(pageSizeOptions.map(o => +o.nativeElement.value)).toEqual([
        10,
        20,
        50,
        100,
      ]);
      expect(status.innerHTML).toMatch(`1 - 10 of ${length}`);
      expect(fixture.debugElement.query(By.css('.lg-paginator__btn-first'))).toBeNull();
      expect(fixture.debugElement.query(By.css('.lg-paginator__btn-last'))).toBeNull();
      expect(
        fixture.debugElement.query(By.css('.lg-paginator__page-size')),
      ).toBeDefined();
    });
  });
});
