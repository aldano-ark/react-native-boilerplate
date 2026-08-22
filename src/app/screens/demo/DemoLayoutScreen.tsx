import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  useTheme,
  Card,
  ListItem,
  Avatar,
  Badge,
  Icon,
  Text,
  Spacer,
  Divider,
} from '@packages/react-native-ui';
import { radii } from '@packages/react-native-ui/theme/tokens/radii';
import type { ShadowKey } from '@packages/react-native-ui/theme/tokens/shadows';
import type { RadiusKey } from '@packages/react-native-ui/theme/tokens/radii';
import type { SpacingKey } from '@packages/react-native-ui/theme/tokens/spacing';
import { DemoSection } from './DemoSection';

const SHADOWS: ShadowKey[] = ['none', 'sm', 'md', 'lg', 'xl'];
const RADII: RadiusKey[] = ['none', 'sm', 'md', 'lg', 'xl', '2xl'];
const PADDINGS: SpacingKey[] = [2, 4, 6, 8];

export default function DemoLayoutScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: styles.content.paddingBottom + insets.bottom },
      ]}
    >
      <DemoSection title="Card — Shadows">
        {SHADOWS.map(shadow => (
          <Card key={shadow} shadow={shadow}>
            <Text variant="label">shadow="{shadow}"</Text>
          </Card>
        ))}
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Card — Radius">
        {RADII.map(radius => (
          <Card key={radius} radius={radius}>
            <Text variant="label">radius="{radius}"</Text>
          </Card>
        ))}
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Card — Padding">
        {PADDINGS.map(padding => (
          <Card key={padding} padding={padding}>
            <Text variant="label">padding={padding}</Text>
          </Card>
        ))}
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Card — Composition">
        <Card>
          <Text variant="heading4">Card Title</Text>
          <Spacer size={1} />
          <Text variant="bodySmall" color={colors.textSecondary}>
            A composed card with heading, body copy, and a status badge.
          </Text>
          <Spacer size={3} />
          <Badge label="Active" color="success" />
        </Card>

        <Card shadow="md">
          <View style={styles.cardRow}>
            <Avatar name="Jane Doe" size="md" />
            <View style={styles.cardRowContent}>
              <Text variant="body" weight="semiBold">
                Jane Doe
              </Text>
              <Text variant="bodySmall" color={colors.textSecondary}>
                jane@example.com
              </Text>
            </View>
            <Badge label="Pro" color="primary" />
          </View>
        </Card>
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="ListItem — Variants">
        <View
          style={[
            styles.listContainer,
            { borderRadius: radii.lg, backgroundColor: colors.surface },
          ]}
        >
          <ListItem title="Basic item" />
          <ListItem title="With subtitle" subtitle="Secondary line of text" />
          <ListItem
            title="Leading avatar"
            subtitle="jane@example.com"
            leading={<Avatar name="Jane Doe" size="sm" />}
          />
          <ListItem
            title="Leading icon + trailing chevron"
            leading={
              <Icon name="envelope" size={18} color={colors.brandPrimary} />
            }
            trailing={
              <Icon name="chevron-right" size={14} color={colors.iconSubtle} />
            }
          />
          <ListItem
            title="Notifications"
            leading={<Icon name="bell" size={18} color={colors.brandPrimary} />}
            trailing={<Badge label="3" color="error" />}
          />
          <ListItem
            title="No divider"
            subtitle="Last item in the list"
            showDivider={false}
            trailing={<Badge label="New" color="info" />}
          />
        </View>
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Spacer — Vertical sizes">
        {([1, 2, 3, 4, 6, 8] as SpacingKey[]).map(size => (
          <View key={size} style={styles.spacerRow}>
            <Text
              variant="caption"
              color={colors.textSecondary}
              style={styles.spacerLabel}
            >
              size={size}
            </Text>
            <View
              style={[
                styles.spacerViz,
                {
                  height: size * 4,
                  backgroundColor: colors.brandPrimarySubtle,
                },
              ]}
            />
          </View>
        ))}
      </DemoSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  listContainer: {
    overflow: 'hidden',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardRowContent: {
    flex: 1,
    gap: 2,
  },
  spacerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  spacerLabel: {
    width: 52,
  },
  spacerViz: {
    flex: 1,
    borderRadius: 4,
  },
});
