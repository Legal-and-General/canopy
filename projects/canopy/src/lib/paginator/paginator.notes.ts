export const notes = `
# Paginator Component

## Purpose
To move between pages of date in a table or other paged component

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgPaginatorModule ],
  providers: [
    provide: LG_PAGINATOR_DEFAULT_OPTIONS,
    useValue: {
      pageSizes: [5, 10, 25, 50, 100],
      pageSize: 25,
      showFirstLastButtons: true,
    },
  ],
})
~~~

and in your HTML:

~~~html
<lg-paginator [length]="data.length" (page)="handlePagination($event)"></lg-paginator>
~~~
`;
