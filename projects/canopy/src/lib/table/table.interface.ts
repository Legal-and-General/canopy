export enum AlignmentOptions {
  Start = 'start',
  End = 'end',
}

export interface TableColumn {
  label: string;
  align: AlignmentOptions;
}
