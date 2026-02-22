/** FontAwesome 6 icon style. 'brands' accepts brand icon names. */
export type IconStyle = 'solid' | 'regular' | 'brands';

export interface IconProps {
  /**
   * FontAwesome 6 icon name.
   * Use solid names for 'solid', regular names for 'regular', brand names for 'brands'.
   */
  name: string;
  /** Icon style variant. Defaults to 'solid'. */
  iconStyle?: IconStyle;
  /** Size in pixels. Defaults to 20. */
  size?: number;
  /** Color string. Defaults to theme iconDefault color. */
  color?: string;
}
