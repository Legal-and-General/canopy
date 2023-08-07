export type Orientation =
  | 'horizontal'
  | 'vertical'
  | 'reverse-horizontal'
  | 'reverse-vertical';

export interface OrientationResponsive {
  sm?: Orientation;
  md?: Orientation;
  lg?: Orientation;
  xl?: Orientation;
  xxl?: Orientation;
}
