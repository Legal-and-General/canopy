export type SpacingVariant =
  | 'none'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl';

export interface SpacingResponsive {
  xs?: SpacingVariant;
  sm?: SpacingVariant;
  md?: SpacingVariant;
  lg?: SpacingVariant;
  xl?: SpacingVariant;
  xxl?: SpacingVariant;
}

export enum SpacingValues {
  none = '0',
  xxxs = '0.25rem',
  xxs = '0.5rem',
  xs = '0.75rem',
  sm = '1rem',
  md = '1.5rem',
  lg = '2rem',
  xl = '2.5rem',
  xxl = '3rem',
  xxxl = '4.5rem',
  xxxxl = '9rem',
}
