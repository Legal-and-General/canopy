export const lgCardToggleIdPrefix = 'lg-card-toggle-';
export const lgCardPanelIdPrefix = 'lg-card-panel-';
export type CardVariant = 'default' | 'navigation' | 'promotion';

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
