import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '@packages/react-native-ui/theme';
import { spacing } from '@packages/react-native-ui/theme/tokens/spacing';
import { radii } from '@packages/react-native-ui/theme/tokens/radii';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';
import type { Colors } from '@packages/react-native-ui/theme/tokens/colors';

function getVariantStyle(variant: ButtonVariant, colors: Colors) {
  switch (variant) {
    case 'secondary':
      return {
        container: {
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderColor: colors.brandPrimary,
        },
        label: colors.brandPrimary,
        icon: colors.brandPrimary,
        pressed: { backgroundColor: colors.brandPrimarySubtle },
      };
    case 'ghost':
      return {
        container: { backgroundColor: 'transparent' },
        label: colors.brandPrimary,
        icon: colors.brandPrimary,
        pressed: { backgroundColor: colors.brandPrimarySubtle },
      };
    case 'destructive':
      return {
        container: { backgroundColor: colors.error },
        label: colors.textInverse,
        icon: colors.textInverse,
        pressed: { opacity: 0.85 },
      };
    case 'primary':
    default:
      return {
        container: { backgroundColor: colors.brandPrimary },
        label: colors.textInverse,
        icon: colors.textInverse,
        pressed: { backgroundColor: colors.brandPrimaryHover },
      };
  }
}

const sizeConfig: Record<
  ButtonSize,
  {
    px: number;
    py: number;
    textVariant: 'label' | 'body';
    iconSize: number;
    gap: number;
  }
> = {
  sm: {
    px: spacing[3],
    py: spacing[1.5],
    textVariant: 'label',
    iconSize: 14,
    gap: spacing[1],
  },
  md: {
    px: spacing[4],
    py: spacing[2],
    textVariant: 'body',
    iconSize: 16,
    gap: spacing[1.5],
  },
  lg: {
    px: spacing[6],
    py: spacing[3],
    textVariant: 'body',
    iconSize: 18,
    gap: spacing[2],
  },
};

export function Button({
  variant = 'primary',
  size = 'md',
  label,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  ...pressableProps
}: ButtonProps) {
  const { colors } = useTheme();
  const styles = getVariantStyle(variant, colors);
  const sz = sizeConfig[size];

  return (
    <Pressable
      {...pressableProps}
      disabled={disabled || loading}
      style={({ pressed }) => [
        baseStyles.container,
        {
          paddingHorizontal: sz.px,
          paddingVertical: sz.py,
          borderRadius: radii.md,
        },
        styles.container,
        pressed && styles.pressed,
        (disabled || loading) && baseStyles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={styles.label} />
      ) : (
        <View style={[baseStyles.row, { gap: sz.gap }]}>
          {leftIcon && (
            <Icon name={leftIcon} size={sz.iconSize} color={styles.icon} />
          )}
          <Text variant={sz.textVariant} color={styles.label} weight="semiBold">
            {label}
          </Text>
          {rightIcon && (
            <Icon name={rightIcon} size={sz.iconSize} color={styles.icon} />
          )}
        </View>
      )}
    </Pressable>
  );
}

const baseStyles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
});
