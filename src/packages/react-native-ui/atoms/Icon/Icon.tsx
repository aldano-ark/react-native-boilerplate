import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useTheme } from '@packages/react-native-ui/theme';
import type { IconProps } from './Icon.types';

const iconStyleMap = {
  solid: 'solid',
  regular: 'regular',
  brands: 'brand',
} as const;

export function Icon({
  name,
  iconStyle = 'solid',
  size = 20,
  color,
}: IconProps) {
  const { colors } = useTheme();
  const resolvedColor = color ?? colors.iconDefault;
  const mappedStyle = iconStyleMap[iconStyle];

  return (
    <FontAwesome6
      iconStyle={mappedStyle}
      name={name as any}
      size={size}
      color={resolvedColor}
    />
  );
}
