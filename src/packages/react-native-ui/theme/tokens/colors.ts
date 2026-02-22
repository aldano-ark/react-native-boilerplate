const palette = {
  // Brand
  primary50: '#EFF6FF',
  primary100: '#DBEAFE',
  primary200: '#BFDBFE',
  primary300: '#93C5FD',
  primary400: '#60A5FA',
  primary500: '#3B82F6',
  primary600: '#2563EB',
  primary700: '#1D4ED8',
  primary800: '#1E40AF',
  primary900: '#1E3A8A',

  // Neutral
  neutral0: '#FFFFFF',
  neutral50: '#F9FAFB',
  neutral100: '#F3F4F6',
  neutral200: '#E5E7EB',
  neutral300: '#D1D5DB',
  neutral400: '#9CA3AF',
  neutral500: '#6B7280',
  neutral600: '#4B5563',
  neutral700: '#374151',
  neutral800: '#1F2937',
  neutral900: '#111827',
  neutral950: '#030712',

  // Semantic
  success500: '#22C55E',
  success100: '#DCFCE7',
  warning500: '#F59E0B',
  warning100: '#FEF3C7',
  error500: '#EF4444',
  error100: '#FEE2E2',
  info500: '#06B6D4',
  info100: '#CFFAFE',
} as const;

export const lightColors = {
  // Background
  background: palette.neutral0,
  backgroundSubtle: palette.neutral50,
  backgroundMuted: palette.neutral100,

  // Surface (cards, modals)
  surface: palette.neutral0,
  surfaceRaised: palette.neutral50,

  // Border
  border: palette.neutral200,
  borderFocus: palette.primary500,
  borderStrong: palette.neutral400,

  // Text
  textPrimary: palette.neutral900,
  textSecondary: palette.neutral600,
  textTertiary: palette.neutral400,
  textDisabled: palette.neutral300,
  textInverse: palette.neutral0,
  textLink: palette.primary600,

  // Brand
  brandPrimary: palette.primary600,
  brandPrimaryHover: palette.primary700,
  brandPrimarySubtle: palette.primary50,

  // Semantic
  success: palette.success500,
  successSubtle: palette.success100,
  warning: palette.warning500,
  warningSubtle: palette.warning100,
  error: palette.error500,
  errorSubtle: palette.error100,
  info: palette.info500,
  infoSubtle: palette.info100,

  // Icon
  iconDefault: palette.neutral600,
  iconSubtle: palette.neutral400,
  iconInverse: palette.neutral0,
} as const;

export const darkColors: Colors = {
  background: palette.neutral950,
  backgroundSubtle: palette.neutral900,
  backgroundMuted: palette.neutral800,

  surface: palette.neutral900,
  surfaceRaised: palette.neutral800,

  border: palette.neutral700,
  borderFocus: palette.primary400,
  borderStrong: palette.neutral500,

  textPrimary: palette.neutral50,
  textSecondary: palette.neutral400,
  textTertiary: palette.neutral600,
  textDisabled: palette.neutral700,
  textInverse: palette.neutral900,
  textLink: palette.primary300,

  brandPrimary: palette.primary500,
  brandPrimaryHover: palette.primary400,
  brandPrimarySubtle: palette.primary900,

  success: palette.success500,
  successSubtle: '#052E16',
  warning: palette.warning500,
  warningSubtle: '#451A03',
  error: palette.error500,
  errorSubtle: '#450A0A',
  info: palette.info500,
  infoSubtle: '#083344',

  iconDefault: palette.neutral400,
  iconSubtle: palette.neutral600,
  iconInverse: palette.neutral900,
};

export type Colors = Record<keyof typeof lightColors, string>;
