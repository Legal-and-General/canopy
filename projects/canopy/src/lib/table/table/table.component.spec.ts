import { DebugElement } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockRender, MockComponents } from 'ng-mocks';
import { NgFor } from '@angular/common';

import { LgTableCellComponent } from '../table-cell/table-cell.component';
import { LgTableHeadComponent } from '../table-head/table-head.component';
import { LgTableRowComponent } from '../table-row/table-row.component';
import { LgTableHeadCellComponent } from '../table-head-cell/table-head-cell.component';
import { LgTableBodyComponent } from '../table-body/table-body.component';
import { AlignmentOptions } from '../table.interface';
import { LgTableRowToggleComponent } from '../table-row-toggle/table-row-toggle.component';
import { LgIconComponent } from '../../icon';
import { LgTableExpandedDetailComponent } from '../table-expanded-detail/table-expanded-detail.component';

import { LgTableComponent } from './table.component';

const books = [
  {
    author: 'Orhan Pamuk',
    title: 'Strangeness In My Mind',
    published: '2016',
  },
  {
    author: 'Albert Camus',
    title: 'The Plague',
    published: '1947',
  },
];

describe('TableComponent', () => {
  let component: LgTableComponent;
  let fixture;
  let debugElement: DebugElement;
  let tableDebugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgTableComponent,
        LgTableHeadComponent,
        LgTableBodyComponent,
        LgTableRowComponent,
        LgTableHeadCellComponent,
        LgTableCellComponent,
        LgTableRowToggleComponent,
        NgFor,
        MockComponents(LgIconComponent, LgTableExpandedDetailComponent),
      ],
    }).compileComponents();

    fixture = MockRender(
      `
    <table lg-table>
      <thead lg-table-head>
        <tr lg-table-row>
          <th lg-table-head-cell>Author</th>
          <th lg-table-head-cell>Title</th>
          <th lg-table-head-cell [align]="alignPublishColumn">Published</th>
        </tr>
      </thead>

      <tbody lg-table-body>
        <tr lg-table-row *ngFor="let book of books">
          <td lg-table-cell>{{book.author}}</td>
          <td lg-table-cell>{{book.title}}</td>
          <td lg-table-cell>{{book.published}}</td>
        </tr>
      </tbody>
    </table>
    `,
      {
        books,
        alignPublishColumn: AlignmentOptions.End,
      },
    );

    debugElement = fixture.debugElement;
    component = fixture.debugElement.children[0].componentInstance;
    tableDebugElement = debugElement.query(By.directive(LgTableComponent));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default classes', () => {
    expect(tableDebugElement.nativeElement.getAttribute('class')).toBe(
      'lg-table--striped lg-table--columns-md lg-table',
    );

    expect(tableDebugElement.nativeElement.getAttribute('class')).not.toContain(
      'lg-table--bordered',
    );
  });

  describe('when a variant is specified', () => {
    it('should set the correct class modifier', () => {
      component.variant = 'bordered';
      fixture.detectChanges();

      expect(tableDebugElement.nativeElement.getAttribute('class')).toContain(
        'lg-table--bordered',
      );

      expect(tableDebugElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-table--striped',
      );
    });
  });

  it('passes the head content to the respective label template', () => {
    const [ authorCell, titleCell, publishedCell ] = tableDebugElement.queryAll(
      By.directive(LgTableCellComponent),
    );

    expect(
      authorCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
    ).toBe('Author');

    expect(titleCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML).toBe(
      'Title',
    );

    expect(
      publishedCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
    ).toBe('Published');
  });

  it('updates the labels when the head data changes', () => {
    fixture.componentInstance.books.push({
      author: 'George Orwell',
      title: 'Animal Farm',
      published: '1945',
    });

    fixture.detectChanges();

    const [ authorCell, titleCell, publishedCell ] = tableDebugElement.queryAll(
      By.directive(LgTableCellComponent),
    );

    expect(
      authorCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
    ).toBe('Author');

    expect(titleCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML).toBe(
      'Title',
    );

    expect(
      publishedCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
    ).toBe('Published');
  });

  describe('when the publish column has align set to end', () => {
    beforeEach(() => {
      fixture = MockRender(getAlignmentMockRender(), {
        alignPublishColumn: AlignmentOptions.End,
      });

      debugElement = fixture.debugElement;
      tableDebugElement = debugElement.query(By.directive(LgTableComponent));
      fixture.detectChanges();
    });

    it('should set the align end class on the cell', () => {
      const [ titleCell ] = tableDebugElement.queryAll(By.directive(LgTableCellComponent));

      expect(
        titleCell
          .query(By.css('.lg-table-cell__content'))
          .nativeElement.getAttribute('class'),
      ).toContain('lg-table-cell__content--align-end');
    });
  });

  describe('when the publish column has align set to start', () => {
    beforeEach(() => {
      fixture = MockRender(getAlignmentMockRender(), {
        alignPublishColumn: AlignmentOptions.Start,
      });

      debugElement = fixture.debugElement;
      tableDebugElement = debugElement.query(By.directive(LgTableComponent));
      fixture.detectChanges();
    });

    it('should not set the align end class on the cell ', () => {
      const [ titleCell ] = tableDebugElement.queryAll(By.directive(LgTableCellComponent));

      expect(
        titleCell
          .query(By.css('.lg-table-cell__content'))
          .nativeElement.getAttribute('class'),
      ).not.toContain('lg-table-cell__content--align-end');
    });
  });

  describe('showLabel setting', () => {
    describe('when showLabel is true', () => {
      beforeEach(() => {
        fixture = MockRender(getShowLabelMockRender(), {
          showLabel: true,
        });

        debugElement = fixture.debugElement;
        tableDebugElement = debugElement.query(By.directive(LgTableComponent));
        fixture.detectChanges();
      });

      it('should not add the lg-table-cell__content--hidden-label class to the table cell', () => {
        const [ titleCell ] = tableDebugElement.queryAll(
          By.directive(LgTableCellComponent),
        );

        expect(titleCell.query(By.css('.lg-table-cell__content--hidden-label'))).toBe(
          null,
        );
      });

      it('should not add the lg-visually-hidden class to the label', () => {
        const [ titleCell ] = tableDebugElement.queryAll(
          By.directive(LgTableCellComponent),
        );

        expect(
          titleCell
            .query(By.css('.lg-table-cell__label'))
            .nativeElement.getAttribute('class'),
        ).not.toContain('lg-visually-hidden');
      });
    });

    describe('when showLabel is false', () => {
      beforeEach(() => {
        fixture = MockRender(getShowLabelMockRender(), {
          showLabel: false,
        });

        debugElement = fixture.debugElement;
        tableDebugElement = debugElement.query(By.directive(LgTableComponent));
        fixture.detectChanges();
      });

      it('should add the lg-table-cell__content--hidden-label class to the table cell', () => {
        const [ titleCell ] = tableDebugElement.queryAll(
          By.directive(LgTableCellComponent),
        );

        expect(
          titleCell.query(By.css('.lg-table-cell__content--hidden-label')),
        ).toBeDefined();
      });

      it('should add the lg-visually-hidden class to the label', () => {
        const [ titleCell ] = tableDebugElement.queryAll(
          By.directive(LgTableCellComponent),
        );

        expect(
          titleCell
            .query(By.css('.lg-table-cell__label'))
            .nativeElement.getAttribute('class'),
        ).toContain('lg-visually-hidden');
      });
    });
  });

  describe('when there is an expanded detail', () => {
    let headerRow: DebugElement;
    let bodyRow: DebugElement;
    let detailBodyRow: DebugElement;
    let rowToggle: DebugElement;

    beforeEach(() => {
      fixture = MockRender(getExpandableTableMockRender(), {
        colspan: 4,
        isActive: true,
      });

      debugElement = fixture.debugElement;
      tableDebugElement = debugElement.query(By.directive(LgTableComponent));
      fixture.componentInstance.id = 0;
      fixture.detectChanges();

      [ headerRow, bodyRow, detailBodyRow ] = tableDebugElement.queryAll(
        By.directive(LgTableRowComponent),
      );

      rowToggle = tableDebugElement.query(By.css('.lg-table-row-toggle__btn'));
    });

    it('should not set the aria id on the header row', () => {
      expect(headerRow.nativeElement.getAttribute('id')).toBeNull();
    });

    it('should not set the aria id on the body row', () => {
      expect(bodyRow.nativeElement.getAttribute('id')).toBeNull();
    });

    it('should set the aria id on the detail body row', () => {
      expect(detailBodyRow.nativeElement.getAttribute('id')).toMatch(
        'lg-table-[0-9]+-detail-row-0',
      );
    });

    it('should not set the aria labelled by attribute on the header row', () => {
      expect(headerRow.nativeElement.getAttribute('aria-labelledby')).toBeNull();
    });

    it('should not set the aria labelled by attribute on the body row', () => {
      expect(bodyRow.nativeElement.getAttribute('aria-labelledby')).toBeNull();
    });

    it('should set the aria labelled by attribute on the detail body row', () => {
      expect(detailBodyRow.nativeElement.getAttribute('aria-labelledby')).toMatch(
        'lg-table-[0-9]+-toggle-row-0',
      );
    });

    it('should set the id on the toggle', () => {
      expect(rowToggle.nativeElement.getAttribute('id')).toMatch(
        'lg-table-[0-9]+-toggle-row-0',
      );
    });

    it('should set the aria expanded attribute on the toggle to true', () => {
      expect(rowToggle.nativeElement.getAttribute('aria-expanded')).toBe('true');
    });

    it('should set the toggle label context to the first non toggle column content', () => {
      expect(rowToggle.query(By.css('.lg-visually-hidden')).nativeElement.innerHTML).toBe(
        'Gene Kim, Jez Humble, and Nicole Forsgren',
      );
    });
  });

  describe('when the toggle is clicked on an table with expanded detail', () => {
    const clickSpy = jasmine.createSpy();

    beforeEach(() => {
      fixture = MockRender(getExpandableTableMockRender(), {
        colspan: 4,
        isActive: true,
        toggleRow: clickSpy,
      });

      debugElement = fixture.debugElement;
      tableDebugElement = debugElement.query(By.directive(LgTableComponent));
      fixture.componentInstance.id = 0;
      const toggle = fixture.debugElement.query(By.directive(LgTableRowToggleComponent));

      toggle.nativeElement.click();
      fixture.detectChanges();
    });

    it('should emit the click event with the row index 0', () => {
      expect(clickSpy).toHaveBeenCalledWith(0);
    });
  });

  describe('showColumnsAt setting', () => {
    describe('when showColumnsAt is set', () => {
      beforeEach(() => {
        fixture = MockRender(getShowColumnsAtMockRender(), {
          showColumnsAt: 'sm',
        });

        debugElement = fixture.debugElement;
        tableDebugElement = debugElement.query(By.directive(LgTableComponent));
        fixture.detectChanges();
      });

      it('should add the lg-table--columns-* class to the table', () => {
        expect(tableDebugElement.classes['lg-table--columns-sm']).toBe(true);
        expect(tableDebugElement.classes['lg-table--columns-lg']).toBe(undefined);
        expect(tableDebugElement.classes['lg-table--columns-md']).toBe(undefined);
      });
    });

    describe('when showColumnsAt is not set', () => {
      beforeEach(() => {
        fixture = MockRender(getShowColumnsAtMockRenderDefault());
        debugElement = fixture.debugElement;
        tableDebugElement = debugElement.query(By.directive(LgTableComponent));
        fixture.detectChanges();
      });

      it('should add the default lg-table--columns-md class to the table', () => {
        expect(tableDebugElement.classes['lg-table--columns-md']).toBe(true);
        expect(tableDebugElement.classes['lg-table--columns-sm']).toBe(undefined);
        expect(tableDebugElement.classes['lg-table--columns-lg']).toBe(undefined);
      });
    });
  });

  function getShowLabelMockRender() {
    return `
    <table lg-table>
      <thead lg-table-head>
        <tr lg-table-row>
          <th lg-table-head-cell [showLabel]="showLabel">Title</th>
        </tr>
      </thead>

      <tbody lg-table-body>
        <tr lg-table-row>
          <td lg-table-cell>Accelerate: The Science of Lean Software and Devops</td>
        </tr>
      </tbody>
    </table>`;
  }

  function getShowColumnsAtMockRender() {
    return `
    <table lg-table [showColumnsAt]="showColumnsAt">
      <thead lg-table-head>
        <tr lg-table-row>
          <th lg-table-head-cell>Title</th>
        </tr>
      </thead>

      <tbody lg-table-body>
        <tr lg-table-row>
          <td lg-table-cell>Accelerate: The Science of Lean Software and Devops</td>
        </tr>
      </tbody>
    </table>`;
  }

  function getShowColumnsAtMockRenderDefault() {
    return `
    <table lg-table>
      <thead lg-table-head>
        <tr lg-table-row>
          <th lg-table-head-cell>Title</th>
        </tr>
      </thead>

      <tbody lg-table-body>
        <tr lg-table-row>
          <td lg-table-cell>Accelerate: The Science of Lean Software and Devops</td>
        </tr>
      </tbody>
    </table>`;
  }

  function getAlignmentMockRender() {
    return `
    <table lg-table>
      <thead lg-table-head>
        <tr lg-table-row>
          <th lg-table-head-cell [align]="alignPublishColumn">Title</th>
        </tr>
      </thead>

      <tbody lg-table-body>
        <tr lg-table-row>
          <td lg-table-cell>Accelerate: The Science of Lean Software and Devops</td>
        </tr>
      </tbody>
    </table>`;
  }

  function getExpandableTableMockRender() {
    return `
    <table lg-table>
      <thead lg-table-head>
        <tr lg-table-row>
          <th scope="col" lg-table-head-cell>
            <span class="lg-visually-hidden">Toggle</span>
          </th>
          <th lg-table-head-cell>Author</th>
          <th lg-table-head-cell>Title</th>
        </tr>
      </thead>

      <tbody lg-table-body>
        <tr lg-table-row>
          <td lg-table-cell>
            <lg-table-row-toggle
              (click)="toggleRow(0)"
              [isActive]="isActive"
            >
            </lg-table-row-toggle>
          </td>
          <td lg-table-cell>Gene Kim, Jez Humble, and Nicole Forsgren</td>
          <td lg-table-cell>Accelerate: The Science of Lean Software and Devops</td>
        </tr>
        <tr lg-table-row>
          <td lg-table-cell [colspan]="colspan">
            <lg-table-expanded-detail>
              Content goes here
            </lg-table-expanded-detail>
          </td>
        </tr>
      </tbody>
    </table>`;
  }
});
