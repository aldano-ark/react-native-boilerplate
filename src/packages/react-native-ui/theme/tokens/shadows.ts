import { Platform } from 'react-native';

const shadowStyle = (
  elevation: number,
  opacity: number,
  radius: number,
  offsetY: number,
) =>
  Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: offsetY },
      shadowOpacity: opacity,
      shadowRadius: radius,
    },
    android: { elevation },
    default: {},
  });

export const shadows = {
  none: {},
  sm: shadowStyle(2, 0.06, 2, 1),
  md: shadowStyle(4, 0.1, 6, 2),
  lg: shadowStyle(8, 0.15, 12, 4),
  xl: shadowStyle(16, 0.2, 20, 8),
} as const;

export type ShadowKey = keyof typeof shadows;
