import { StyleSheet, View } from 'react-native';
import { useTheme } from '@packages/react-native-ui/theme';
import type { DividerProps } from './Divider.types';

export function Divider({
  axis = 'horizontal',
  color,
  thickness = 1,
}: DividerProps) {
  const { colors } = useTheme();
  const lineColor = color ?? colors.border;

  return (
    <View
      style={[
        styles.base,
        axis === 'horizontal'
          ? { height: thickness, width: '100%' }
          : { width: thickness, height: '100%' },
        { backgroundColor: lineColor },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    flexShrink: 0,
  },
});
