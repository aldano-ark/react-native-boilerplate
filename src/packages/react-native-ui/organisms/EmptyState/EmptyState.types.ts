import type { ReactNode } from 'react';

export interface EmptyStateProps {
  /** Optional illustration or icon to display above the title. */
  illustration?: ReactNode;
  title: string;
  subtitle?: string;
  action?: {
    label: string;
    onPress: () => void;
  };
}
