import { View } from 'react-native';
import { spacing } from '@packages/react-native-ui/theme/tokens/spacing';
import type { SpacerProps } from './Spacer.types';

export function Spacer({ size, axis = 'vertical' }: SpacerProps) {
  const value = spacing[size];
  return (
    <View
      style={
        axis === 'vertical'
          ? { height: value, width: '100%' }
          : { width: value, height: '100%' }
      }
    />
  );
}
