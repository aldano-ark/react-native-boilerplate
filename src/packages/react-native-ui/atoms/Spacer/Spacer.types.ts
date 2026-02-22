import type { SpacingKey } from '@packages/react-native-ui/theme/tokens/spacing';

export interface SpacerProps {
  /** Spacing token key. Determines the size. */
  size: SpacingKey;
  /** Direction of the spacer. Defaults to 'vertical'. */
  axis?: 'vertical' | 'horizontal';
}
