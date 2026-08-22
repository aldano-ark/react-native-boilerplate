import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, Button, Divider, Spacer } from '@packages/react-native-ui';
import { DemoSection } from './DemoSection';

export default function DemoButtonsScreen() {
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
        <Button variant="primary" label="Primary" />
        <Button variant="secondary" label="Secondary" />
        <Button variant="ghost" label="Ghost" />
        <Button variant="destructive" label="Destructive" />
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Sizes">
        <Button size="sm" label="Small" />
        <Button size="md" label="Medium" />
        <Button size="lg" label="Large" />
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="With Icons">
        <Button label="Left Icon" leftIcon="star" />
        <Button label="Right Icon" rightIcon="arrow-right" />
        <Button label="Both Icons" leftIcon="check" rightIcon="arrow-right" />
        <Button
          variant="secondary"
          label="Secondary + Icon"
          leftIcon="download"
        />
        <Button variant="ghost" label="Ghost + Icon" leftIcon="share-nodes" />
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="States">
        <Button label="Loading" loading />
        <Button variant="secondary" label="Loading Secondary" loading />
        <Button label="Disabled" disabled />
        <Button variant="secondary" label="Disabled Secondary" disabled />
        <Button variant="ghost" label="Disabled Ghost" disabled />
        <Button variant="destructive" label="Disabled Destructive" disabled />
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="Sizes × Variants">
        <Button variant="primary" size="sm" label="Primary sm" />
        <Button variant="secondary" size="md" label="Secondary md" />
        <Button variant="ghost" size="lg" label="Ghost lg" />
        <Button variant="destructive" size="sm" label="Destructive sm" />
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
