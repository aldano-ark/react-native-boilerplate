import { StyleSheet, View } from 'react-native';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Spacer } from '../../atoms/Spacer';
import { spacing } from '../../theme/tokens/spacing';
import type { EmptyStateProps } from './EmptyState.types';

export function EmptyState({
  illustration,
  title,
  subtitle,
  action,
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      {illustration != null && (
        <>
          {illustration}
          <Spacer size={4} />
        </>
      )}

      <Text variant="heading3" align="center">
        {title}
      </Text>

      {subtitle != null && (
        <>
          <Spacer size={2} />
          <Text variant="body" align="center" color="secondary">
            {subtitle}
          </Text>
        </>
      )}

      {action != null && (
        <>
          <Spacer size={6} />
          <Button label={action.label} onPress={action.onPress} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[6],
  },
});
