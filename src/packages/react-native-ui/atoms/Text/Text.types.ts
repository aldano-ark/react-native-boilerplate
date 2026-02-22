import type {
  StyleProp,
  TextStyle,
  TextProps as RNTextProps,
} from 'react-native';

export type TextVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'label';

export type TextWeight =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';

export type TextAlign = 'left' | 'center' | 'right';

export interface TextProps extends Omit<RNTextProps, 'style'> {
  variant?: TextVariant;
  /** Override font weight (overrides the variant default weight). */
  weight?: TextWeight;
  /** Token color key from the theme, or any CSS/RN color string. */
  color?: string;
  align?: TextAlign;
  children?: React.ReactNode;
  /** Optional style override (e.g. for layout margins from parent). */
  style?: StyleProp<TextStyle>;
}
