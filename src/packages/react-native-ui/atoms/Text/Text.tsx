import { Text as RNText, StyleSheet } from 'react-native';
import { useTheme } from '@packages/react-native-ui/theme';
import {
  fontFamily,
  fontSize,
  lineHeight,
} from '@packages/react-native-ui/theme/tokens/typography';
import type { TextProps, TextVariant, TextWeight } from './Text.types';

const variantStyles: Record<
  TextVariant,
  { fontSize: number; lineHeight: number; fontFamily: string }
> = {
  heading1: {
    fontSize: fontSize['4xl'],
    lineHeight: lineHeight['4xl'],
    fontFamily: fontFamily.bold,
  },
  heading2: {
    fontSize: fontSize['3xl'],
    lineHeight: lineHeight['3xl'],
    fontFamily: fontFamily.bold,
  },
  heading3: {
    fontSize: fontSize['2xl'],
    lineHeight: lineHeight['2xl'],
    fontFamily: fontFamily.semiBold,
  },
  heading4: {
    fontSize: fontSize.xl,
    lineHeight: lineHeight.xl,
    fontFamily: fontFamily.semiBold,
  },
  body: {
    fontSize: fontSize.md,
    lineHeight: lineHeight.md,
    fontFamily: fontFamily.regular,
  },
  bodySmall: {
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
    fontFamily: fontFamily.regular,
  },
  caption: {
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
    fontFamily: fontFamily.regular,
  },
  label: {
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
    fontFamily: fontFamily.medium,
  },
};

const weightToFamily: Record<TextWeight, string> = {
  thin: fontFamily.thin,
  extraLight: fontFamily.extraLight,
  light: fontFamily.light,
  regular: fontFamily.regular,
  medium: fontFamily.medium,
  semiBold: fontFamily.semiBold,
  bold: fontFamily.bold,
  extraBold: fontFamily.extraBold,
  black: fontFamily.black,
};

export function Text({
  variant = 'body',
  weight,
  color,
  align = 'left',
  style,
  children,
  ...rest
}: TextProps) {
  const { colors } = useTheme();
  const vStyle = variantStyles[variant];

  return (
    <RNText
      {...rest}
      style={[
        styles.base,
        {
          fontSize: vStyle.fontSize,
          lineHeight: vStyle.lineHeight,
          fontFamily: weight ? weightToFamily[weight] : vStyle.fontFamily,
          color: color ?? colors.textPrimary,
          textAlign: align,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
