import { View as RNView, StyleSheet } from 'react-native';
import type { ViewProps } from './View.types';

export function View({ style, ...rest }: ViewProps) {
  return <RNView style={[styles.container, style]} {...rest} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
