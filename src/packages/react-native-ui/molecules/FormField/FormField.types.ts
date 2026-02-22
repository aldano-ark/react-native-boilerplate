import type { TextInputProps } from '../../atoms/TextInput/TextInput.types';

export interface FormFieldProps extends TextInputProps {
  /** Required — renders above the input. */
  label: string;
}
