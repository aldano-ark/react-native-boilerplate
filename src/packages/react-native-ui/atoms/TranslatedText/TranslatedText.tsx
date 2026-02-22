import { useTranslation } from '@packages/i18n';
import { Text } from '../Text';
import type { TranslatedTextProps } from './TranslatedText.types';

export function TranslatedText({
  tKey,
  tOptions,
  ...rest
}: TranslatedTextProps) {
  const { t } = useTranslation();
  return <Text {...rest}>{t(tKey, tOptions)}</Text>;
}
