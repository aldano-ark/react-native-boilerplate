import { StyleSheet, View } from 'react-native';
import { useTheme } from '@packages/react-native-ui/theme';
import { radii } from '@packages/react-native-ui/theme/tokens/radii';
import { spacing } from '@packages/react-native-ui/theme/tokens/spacing';
import { Text } from '../Text/Text';
import type { BadgeProps, BadgeColor } from './Badge.types';
import type { Colors } from '@packages/react-native-ui/theme/tokens/colors';

function getBadgeColors(color: BadgeColor, colors: Colors) {
  switch (color) {
    case 'success':
      return { bg: colors.successSubtle, text: colors.success };
    case 'warning':
      return { bg: colors.warningSubtle, text: colors.warning };
    case 'error':
      return { bg: colors.errorSubtle, text: colors.error };
    case 'info':
      return { bg: colors.infoSubtle, text: colors.info };
    case 'neutral':
      return { bg: colors.backgroundMuted, text: colors.textSecondary };
    case 'primary':
    default:
      return { bg: colors.brandPrimarySubtle, text: colors.brandPrimary };
  }
}

export function Badge({
  variant = 'label',
  color = 'primary',
  label,
  size,
}: BadgeProps) {
  const { colors } = useTheme();
  const { bg, text } = getBadgeColors(color, colors);

  if (variant === 'dot') {
    const dotSize = size ?? 8;
    return (
      <View
        style={[
          styles.dot,
          {
            width: dotSize,
            height: dotSize,
            borderRadius: dotSize / 2,
            backgroundColor: text,
          },
        ]}
      />
    );
  }

  return (
    <View
      style={[
        styles.label,
        {
          backgroundColor: bg,
          borderRadius: radii.full,
          paddingHorizontal: spacing[2],
          paddingVertical: spacing[0.5],
        },
      ]}
    >
      <Text variant="caption" color={text} weight="semiBold">
        {label ?? ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    flexShrink: 0,
  },
  label: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
