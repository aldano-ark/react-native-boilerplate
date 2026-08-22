import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, Text, Divider, Spacer } from '@packages/react-native-ui';
import { DemoSection } from './DemoSection';
import type { TextProps } from '@packages/react-native-ui/atoms/Text/Text.types';

const VARIANTS: TextProps['variant'][] = [
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'body',
  'bodySmall',
  'caption',
  'label',
];

const WEIGHTS: TextProps['weight'][] = [
  'thin',
  'extraLight',
  'light',
  'regular',
  'medium',
  'semiBold',
  'bold',
  'extraBold',
  'black',
];

export default function DemoTypographyScreen() {
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
      <DemoSection title="Variants">
        {VARIANTS.map(variant => (
          <Text key={variant} variant={variant}>
            {variant}
          </Text>
        ))}
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Weights (body size)">
        {WEIGHTS.map(weight => (
          <Text key={weight} variant="body" weight={weight}>
            {weight}
          </Text>
        ))}
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Colours">
        <Text variant="body" color={colors.textPrimary}>
          textPrimary
        </Text>
        <Text variant="body" color={colors.textSecondary}>
          textSecondary
        </Text>
        <Text variant="body" color={colors.textTertiary}>
          textTertiary
        </Text>
        <Text variant="body" color={colors.textLink}>
          textLink
        </Text>
        <Text variant="body" color={colors.brandPrimary}>
          brandPrimary
        </Text>
        <Text variant="body" color={colors.success}>
          success
        </Text>
        <Text variant="body" color={colors.warning}>
          warning
        </Text>
        <Text variant="body" color={colors.error}>
          error
        </Text>
        <Text variant="body" color={colors.info}>
          info
        </Text>
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Alignment">
        <Text variant="body" align="left">
          Left aligned
        </Text>
        <Text variant="body" align="center">
          Center aligned
        </Text>
        <Text variant="body" align="right">
          Right aligned
        </Text>
      </DemoSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 40,
  },
});
