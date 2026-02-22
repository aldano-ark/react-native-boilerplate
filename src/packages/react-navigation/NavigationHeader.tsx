import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Header } from '@packages/react-native-ui';

export function NavigationHeader({
  navigation,
  route,
  options,
  back,
}: NativeStackHeaderProps) {
  const title = options.title ?? route.name;

  return (
    <Header
      title={title}
      onBack={back != null ? () => navigation.goBack() : undefined}
    />
  );
}
