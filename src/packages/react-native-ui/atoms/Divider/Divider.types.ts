export interface DividerProps {
  /** Orientation of the divider. Defaults to 'horizontal'. */
  axis?: 'horizontal' | 'vertical';
  /** Override the color of the divider line. Defaults to theme border color. */
  color?: string;
  /** Thickness of the divider in pixels. Defaults to 1. */
  thickness?: number;
}
