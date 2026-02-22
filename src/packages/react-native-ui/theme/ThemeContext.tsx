import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from './tokens/colors';
import type { Theme, ColorScheme } from './types';

interface ThemeContextValue extends Theme {
  setColorScheme: (scheme: ColorScheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
  /** Force a specific color scheme, ignoring the system preference. */
  colorScheme?: ColorScheme;
}

export function ThemeProvider({
  children,
  colorScheme: forcedScheme,
}: ThemeProviderProps) {
  const rawScheme = useColorScheme();
  const systemScheme: ColorScheme = rawScheme === 'dark' ? 'dark' : 'light';
  const [manualScheme, setManualScheme] = React.useState<ColorScheme | null>(
    null,
  );

  const activeScheme: ColorScheme =
    forcedScheme ?? manualScheme ?? systemScheme;

  const value = useMemo<ThemeContextValue>(
    () => ({
      colorScheme: activeScheme,
      colors: activeScheme === 'dark' ? darkColors : lightColors,
      setColorScheme: setManualScheme,
    }),
    [activeScheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}

export { ThemeContext };
