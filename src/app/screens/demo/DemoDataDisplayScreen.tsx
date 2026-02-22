import { ScrollView, StyleSheet, View } from 'react-native';
import {
  useTheme,
  Badge,
  Avatar,
  Icon,
  Divider,
  Spacer,
  Text,
} from '@packages/react-native-ui';
import { spacing } from '@packages/react-native-ui/theme/tokens/spacing';
import { DemoSection } from './DemoSection';
import type { BadgeColor } from '@packages/react-native-ui/atoms/Badge/Badge.types';
import type { AvatarSize } from '@packages/react-native-ui/atoms/Avatar/Avatar.types';

const BADGE_COLORS: BadgeColor[] = [
  'primary',
  'success',
  'warning',
  'error',
  'info',
  'neutral',
];

const AVATAR_SIZES: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const ICONS = [
  'house',
  'user',
  'gear',
  'bell',
  'heart',
  'star',
  'envelope',
  'magnifying-glass',
  'trash',
  'pen',
  'check',
  'xmark',
  'arrow-left',
  'arrow-right',
  'plus',
  'minus',
  'lock',
  'unlock',
  'eye',
  'eye-slash',
  'share-nodes',
  'download',
  'upload',
  'inbox',
];

export default function DemoDataDisplayScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.content}
    >
      <DemoSection title="Badge — Label">
        <View style={styles.row}>
          {BADGE_COLORS.map(color => (
            <Badge key={color} color={color} label={color} />
          ))}
        </View>
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Badge — Dot">
        <View style={styles.row}>
          {BADGE_COLORS.map(color => (
            <View key={color} style={styles.centeredItem}>
              <Badge variant="dot" color={color} />
              <Text variant="caption" color={colors.textSecondary}>
                {color}
              </Text>
            </View>
          ))}
        </View>
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Avatar — Sizes (initials)">
        <View style={styles.avatarRow}>
          {AVATAR_SIZES.map(size => (
            <View key={size} style={styles.centeredItem}>
              <Avatar size={size} name="Jane Doe" />
              <Text variant="caption" color={colors.textSecondary}>
                {size}
              </Text>
            </View>
          ))}
        </View>
      </DemoSection>

      <Spacer size={4} />

      <DemoSection title="Avatar — Image & fallback">
        <View style={styles.avatarRow}>
          <View style={styles.centeredItem}>
            <Avatar
              size="lg"
              uri="https://i.pravatar.cc/150?img=1"
              name="Alice"
            />
            <Text variant="caption">image</Text>
          </View>
          <View style={styles.centeredItem}>
            <Avatar
              size="lg"
              uri="https://broken.invalid/img.jpg"
              name="Bob Smith"
            />
            <Text variant="caption">fallback</Text>
          </View>
          <View style={styles.centeredItem}>
            <Avatar size="lg" name="Charlie Day" />
            <Text variant="caption">initials</Text>
          </View>
          <View style={styles.centeredItem}>
            <Avatar size="lg" />
            <Text variant="caption">empty</Text>
          </View>
        </View>
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Icons">
        <View style={styles.iconGrid}>
          {ICONS.map(name => (
            <View key={name} style={styles.iconCell}>
              <Icon name={name} size={22} />
              <Text
                variant="caption"
                color={colors.textSecondary}
                align="center"
              >
                {name}
              </Text>
            </View>
          ))}
        </View>
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Icon Sizes">
        <View style={styles.row}>
          {[12, 16, 20, 24, 32, 40].map(size => (
            <View key={size} style={styles.centeredItem}>
              <Icon name="star" size={size} color={colors.brandPrimary} />
              <Text variant="caption" color={colors.textSecondary}>
                {size}
              </Text>
            </View>
          ))}
        </View>
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Divider">
        <Text variant="bodySmall" color={colors.textSecondary}>
          Horizontal (default, 1px)
        </Text>
        <Divider />
        <Text variant="bodySmall" color={colors.textSecondary}>
          Thick (4px)
        </Text>
        <Divider thickness={4} />
        <Text variant="bodySmall" color={colors.textSecondary}>
          Coloured
        </Text>
        <Divider color={colors.brandPrimary} />
        <Divider color={colors.error} />
        <Divider color={colors.success} />
        <Text variant="bodySmall" color={colors.textSecondary}>
          Vertical (inside a row)
        </Text>
        <View style={styles.verticalRow}>
          <Text variant="body">Left</Text>
          <Divider axis="vertical" />
          <Text variant="body">Middle</Text>
          <Divider axis="vertical" />
          <Text variant="body">Right</Text>
        </View>
      </DemoSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
    alignItems: 'center',
  },
  centeredItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  avatarRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[4],
    alignItems: 'flex-end',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[4],
  },
  iconCell: {
    width: 72,
    alignItems: 'center',
    gap: spacing[1],
  },
  verticalRow: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    gap: spacing[4],
  },
});
