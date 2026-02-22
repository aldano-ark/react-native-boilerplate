import type { TextInputProps as RNTextInputProps } from 'react-native';

export interface TextInputProps extends Omit<RNTextInputProps, 'style'> {
  /** Optional label rendered above the input. */
  label?: string;
  /** Error message rendered below the input in error color. */
  error?: string;
  /** FA6 solid icon name rendered on the left inside the input. */
  leftIcon?: string;
  /** FA6 solid icon name rendered on the right inside the input. */
  rightIcon?: string;
}
