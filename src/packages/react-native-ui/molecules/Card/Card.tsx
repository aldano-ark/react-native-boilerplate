import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';
import { shadows } from '../../theme/tokens/shadows';
import { radii } from '../../theme/tokens/radii';
import { spacing } from '../../theme/tokens/spacing';
import type { CardProps } from './Card.types';

export function Card({
  children,
  padding = 4,
  shadow = 'sm',
  radius = 'lg',
  ...viewProps
}: CardProps) {
  const { colors } = useTheme();

  return (
    <View
      {...viewProps}
      style={[
        styles.base,
        {
          backgroundColor: colors.surface,
          borderRadius: radii[radius],
          padding: spacing[padding],
        },
        shadows[shadow],
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
  },
});
