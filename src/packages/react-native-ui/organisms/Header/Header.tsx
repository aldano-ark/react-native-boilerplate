import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../theme';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import { shadows } from '../../theme/tokens/shadows';
import { spacing } from '../../theme/tokens/spacing';
import type { HeaderProps } from './Header.types';

export function Header({
  title,
  onBack,
  rightContent,
  backgroundColor,
}: HeaderProps) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const bgColor = backgroundColor ?? colors.surface;

  return (
    <View
      style={[
        styles.container,
        shadows.sm,
        { backgroundColor: bgColor, paddingTop: insets.top + spacing[2] },
      ]}
    >
      <View style={styles.row}>
        {/* Left — back button or placeholder */}
        <View style={styles.side}>
          {onBack != null && (
            <Pressable onPress={onBack} style={styles.backButton} hitSlop={8}>
              <Icon name="arrow-left" size={20} color={colors.textPrimary} />
            </Pressable>
          )}
        </View>

        {/* Center — title */}
        <View style={styles.center}>
          <Text variant="label" numberOfLines={1}>
            {title}
          </Text>
        </View>

        {/* Right — custom content or placeholder */}
        <View style={styles.side}>{rightContent}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing[2],
    paddingHorizontal: spacing[4],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 44,
  },
  side: {
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  backButton: {
    padding: spacing[2],
  },
});
