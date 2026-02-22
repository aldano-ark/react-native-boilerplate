import type { PressableProps } from 'react-native';

export interface ListItemProps
  extends Omit<PressableProps, 'style' | 'children'> {
  title: string;
  subtitle?: string;
  /** Slot for an Avatar, Icon, or any ReactNode placed on the left. */
  leading?: React.ReactNode;
  /** Slot for an icon name, badge, or any ReactNode on the right. */
  trailing?: React.ReactNode;
  /** Show a bottom divider. Defaults to true. */
  showDivider?: boolean;
}
