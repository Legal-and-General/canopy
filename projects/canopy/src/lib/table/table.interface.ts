export enum AlignmentOptions {
  Start = 'start',
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
