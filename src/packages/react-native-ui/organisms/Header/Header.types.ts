import type { ReactNode } from 'react';

export interface HeaderProps {
  title: string;
  /** Show a back button with this callback. */
  onBack?: () => void;
  /** Custom content for the right side of the header. */
  rightContent?: ReactNode;
  /** Override background color. Defaults to theme surface color. */
  backgroundColor?: string;
}
