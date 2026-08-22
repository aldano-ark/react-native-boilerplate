import { ScrollView, StyleSheet, View } from 'react-native';
import {
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  useTheme,
  Header,
  EmptyState,
  Icon,
  Divider,
  Spacer,
} from '@packages/react-native-ui';
import { DemoSection } from './DemoSection';

const ZERO_INSETS = { top: 0, bottom: 0, left: 0, right: 0 };

export default function DemoOrganismsScreen() {
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
      {/*
        The Header organism respects safe-area insets.
        We provide zero insets here so the demo previews render flush
        (on a real screen it would sit at the top with the notch padding).
      */}
      <SafeAreaInsetsContext.Provider value={ZERO_INSETS}>
        <DemoSection title="Header — Variants">
          <View style={[styles.headerPreview, { borderColor: colors.border }]}>
            <Header title="Title Only" />
          </View>

          <View style={[styles.headerPreview, { borderColor: colors.border }]}>
            <Header title="With Back Button" onBack={() => {}} />
          </View>

          <View style={[styles.headerPreview, { borderColor: colors.border }]}>
            <Header
              title="With Right Content"
              onBack={() => {}}
              rightContent={
                <Icon name="bell" size={20} color={colors.textPrimary} />
              }
            />
          </View>

          <View style={[styles.headerPreview, { borderColor: colors.border }]}>
            <Header
              title="Custom Background"
              onBack={() => {}}
              rightContent={
                <Icon name="gear" size={20} color={colors.textPrimary} />
              }
              backgroundColor={colors.brandPrimary}
            />
          </View>
        </DemoSection>
      </SafeAreaInsetsContext.Provider>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="EmptyState — Variants">
        <View style={[styles.emptyPreview, { borderColor: colors.border }]}>
          <EmptyState title="Nothing here yet" />
        </View>

        <View style={[styles.emptyPreview, { borderColor: colors.border }]}>
          <EmptyState
            title="No results found"
            subtitle="Try adjusting your search or filters."
          />
        </View>

        <View style={[styles.emptyPreview, { borderColor: colors.border }]}>
          <EmptyState
            illustration={
              <Icon name="inbox" size={48} color={colors.iconSubtle} />
            }
            title="Your inbox is empty"
            subtitle="New messages will appear here once you receive them."
            action={{ label: 'Compose message', onPress: () => {} }}
          />
        </View>

        <View style={[styles.emptyPreview, { borderColor: colors.border }]}>
          <EmptyState
            illustration={
              <Icon
                name="triangle-exclamation"
                size={48}
                color={colors.warning}
              />
            }
            title="Something went wrong"
            subtitle="We couldn't load the content. Please try again."
            action={{ label: 'Retry', onPress: () => {} }}
          />
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
  headerPreview: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  emptyPreview: {
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
    minHeight: 200,
  },
});
