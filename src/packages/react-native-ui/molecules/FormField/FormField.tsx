import React from 'react';
import { TextInput } from '../../atoms/TextInput';
import type { FormFieldProps } from './FormField.types';

/**
 * FormField wraps the TextInput atom with a guaranteed label.
 * It passes all TextInputProps through unchanged.
 */
export function FormField({ label, ...rest }: FormFieldProps) {
  return <TextInput label={label} {...rest} />;
}
