import type { PressableProps } from 'react-native';
import type { IconProps } from '../Icon/Icon.types';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends Omit<PressableProps, 'style' | 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Label text rendered inside the button. */
  label: string;
  loading?: boolean;
  disabled?: boolean;
  /** Icon name (FA6 solid) shown to the left of the label. */
  leftIcon?: IconProps['name'];
  /** Icon name (FA6 solid) shown to the right of the label. */
  rightIcon?: IconProps['name'];
}
