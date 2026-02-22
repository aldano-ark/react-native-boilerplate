import type { TOptions } from 'i18next';
import type { ParseKeys } from 'i18next';
import type { TextProps } from '../Text/Text.types';

export interface TranslatedTextProps extends Omit<TextProps, 'children'> {
  tKey: ParseKeys;
  tOptions?: TOptions;
}
