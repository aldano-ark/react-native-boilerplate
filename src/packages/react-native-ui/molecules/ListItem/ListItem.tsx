import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from '../../atoms/Text';
import { Divider } from '../../atoms/Divider';
import { spacing } from '../../theme/tokens/spacing';
import type { ListItemProps } from './ListItem.types';

export function ListItem({
  title,
  subtitle,
  leading,
  trailing,
  showDivider = true,
  ...pressableProps
}: ListItemProps) {
  return (
    <>
      <Pressable style={styles.container} {...pressableProps}>
        {leading != null && <View style={styles.leading}>{leading}</View>}

        <View style={styles.content}>
          <Text variant="body">{title}</Text>
          {subtitle != null && (
            <Text variant="bodySmall" color="secondary">
              {subtitle}
            </Text>
          )}
        </View>

        {trailing != null && <View style={styles.trailing}>{trailing}</View>}
      </Pressable>
      {showDivider && <Divider />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
  },
  leading: {
    marginRight: spacing[3],
  },
  content: {
    flex: 1,
    gap: spacing[0.5],
  },
  trailing: {
    marginLeft: spacing[3],
  },
});
