import type { ViewProps } from 'react-native';
import type { ShadowKey } from '../../theme/tokens/shadows';
import type { RadiusKey } from '../../theme/tokens/radii';
import type { SpacingKey } from '../../theme/tokens/spacing';

export interface CardProps extends Omit<ViewProps, 'style'> {
  children?: React.ReactNode;
  /** Spacing token for inner padding. Defaults to 4 (16px). */
  padding?: SpacingKey;
  /** Shadow preset. Defaults to 'sm'. */
  shadow?: ShadowKey;
  /** Border radius preset. Defaults to 'lg'. */
  radius?: RadiusKey;
}
