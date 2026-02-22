import React, { useState } from 'react';
import { StyleSheet, TextInput as RNTextInput, View } from 'react-native';
import { useTheme } from '@packages/react-native-ui/theme';
import { spacing } from '@packages/react-native-ui/theme/tokens/spacing';
import { radii } from '@packages/react-native-ui/theme/tokens/radii';
import {
  fontSize,
  fontFamily,
} from '@packages/react-native-ui/theme/tokens/typography';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import type { TextInputProps } from './TextInput.types';

export function TextInput({
  label,
  error,
  leftIcon,
  rightIcon,
  ...inputProps
}: TextInputProps) {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = error
    ? colors.error
    : isFocused
    ? colors.borderFocus
    : colors.border;

  return (
    <View style={styles.wrapper}>
      {label && (
        <Text variant="label" color={colors.textSecondary} style={styles.label}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputRow,
          {
            borderColor,
            backgroundColor: colors.surface,
            borderRadius: radii.md,
          },
        ]}
      >
        {leftIcon && (
          <View style={styles.iconLeft}>
            <Icon name={leftIcon} size={16} color={colors.iconSubtle} />
          </View>
        )}
        <RNTextInput
          {...inputProps}
          onFocus={e => {
            setIsFocused(true);
            inputProps.onFocus?.(e);
          }}
          onBlur={e => {
            setIsFocused(false);
            inputProps.onBlur?.(e);
          }}
          style={[
            styles.input,
            {
              color: colors.textPrimary,
              fontSize: fontSize.md,
              fontFamily: fontFamily.regular,
              paddingLeft: leftIcon ? 0 : spacing[3],
              paddingRight: rightIcon ? 0 : spacing[3],
            },
          ]}
          placeholderTextColor={colors.textTertiary}
        />
        {rightIcon && (
          <View style={styles.iconRight}>
            <Icon name={rightIcon} size={16} color={colors.iconSubtle} />
          </View>
        )}
      </View>
      {error && (
        <Text variant="caption" color={colors.error} style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  label: {
    marginBottom: spacing[1],
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    overflow: 'hidden',
  },
  iconLeft: {
    paddingHorizontal: spacing[2],
  },
  iconRight: {
    paddingHorizontal: spacing[2],
  },
  input: {
    flex: 1,
    paddingVertical: spacing[2],
    includeFontPadding: false,
  },
  error: {
    marginTop: spacing[1],
  },
});
