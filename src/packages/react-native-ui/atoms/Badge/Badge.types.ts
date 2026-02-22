export type BadgeVariant = 'dot' | 'label';
export type BadgeColor =
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'neutral';

export interface BadgeProps {
  variant?: BadgeVariant;
  color?: BadgeColor;
  /** Label text — only used when variant='label'. */
  label?: string;
  /** Explicit size override in pixels (dot diameter / label height). */
  size?: number;
}
