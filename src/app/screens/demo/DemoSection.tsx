import { StyleSheet, View } from 'react-native';
import { Text } from '@packages/react-native-ui';
import { spacing } from '@packages/react-native-ui/theme/tokens/spacing';

interface DemoSectionProps {
  title: string;
  children: React.ReactNode;
}

export function DemoSection({ title, children }: DemoSectionProps) {
  return (
    <View style={styles.container}>
      <Text variant="heading4">{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing[8],
  },
  content: {
    marginTop: spacing[4],
    gap: spacing[3],
  },
});
