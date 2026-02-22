import type { Colors } from './tokens/colors';
import type { ShadowKey } from './tokens/shadows';
import type { RadiusKey } from './tokens/radii';
import type { SpacingKey } from './tokens/spacing';

export type ColorScheme = 'light' | 'dark';

export interface Theme {
  colorScheme: ColorScheme;
  colors: Colors;
}

export type { Colors, ShadowKey, RadiusKey, SpacingKey };
