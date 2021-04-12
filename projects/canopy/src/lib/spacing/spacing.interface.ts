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

export interface ResponsiveSpacing {
  sm?: SpacingVariant;
  md?: SpacingVariant;
  lg?: SpacingVariant;
  xlg?: SpacingVariant;
  xxlg?: SpacingVariant;
}
