import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from '@packages/react-native-ui/theme';
import { radii } from '@packages/react-native-ui/theme/tokens/radii';
import { Text } from '../Text/Text';
import type { AvatarProps, AvatarSize } from './Avatar.types';

const sizeMap: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 72,
};

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('');
}

export function Avatar({
  uri,
  name,
  size = 'md',
  backgroundColor,
}: AvatarProps) {
  const { colors } = useTheme();
  const [imageError, setImageError] = useState(false);
  const diameter = sizeMap[size];
  const bgColor = backgroundColor ?? colors.brandPrimary;
  const showImage = uri && !imageError;

  return (
    <View
      style={[
        styles.container,
        {
          width: diameter,
          height: diameter,
          borderRadius: radii.full,
          backgroundColor: showImage ? 'transparent' : bgColor,
        },
      ]}
    >
      {showImage ? (
        <Image
          source={{ uri }}
          style={[styles.image, { borderRadius: radii.full }]}
          onError={() => setImageError(true)}
        />
      ) : (
        <Text variant="label" color={colors.textInverse} weight="bold">
          {name ? getInitials(name) : '?'}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
