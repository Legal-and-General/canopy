export type SpacingVariant =
  | 'none'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10';

export interface SpacingResponsive {
  xs?: SpacingVariant;
  sm?: SpacingVariant;
  md?: SpacingVariant;
  lg?: SpacingVariant;
  xl?: SpacingVariant;
  xxl?: SpacingVariant;
}

// Reference CSS tokens
export const SpacingValues = {
  none: '0',
  1: 'var(--space-1)',
  2: 'var(--space-2)',
  3: 'var(--space-3)',
  4: 'var(--space-4)',
  5: 'var(--space-5)',
  6: 'var(--space-6)',
  7: 'var(--space-7)',
  8: 'var(--space-8)',
  9: 'var(--space-9)',
  10: 'var(--space-10)',
} as const;
