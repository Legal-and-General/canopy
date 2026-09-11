export type TableVariant = 'striped' | 'bordered';

export type TableRowVariant = 'error' | 'selected';

export enum AlignmentOptions {
  Start = 'start',
  Centre = 'centre',
  End = 'end',
}

export interface TableColumn {
  label: string;
  align: AlignmentOptions;
  showLabel: boolean;
}

export enum TableColumnLayoutBreakpoints {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}
