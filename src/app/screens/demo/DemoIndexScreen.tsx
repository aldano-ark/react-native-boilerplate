import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem, Icon, useTheme } from '@packages/react-native-ui';
import type {
  RootStackParamList,
  RootNavigationProp,
} from '@app/navigation/navigationTypes';

type Nav = RootNavigationProp<'DemoIndex'>;
type DemoScreen = Exclude<keyof RootStackParamList, 'Home'>;

const DEMO_ITEMS: Array<{
  screen: DemoScreen;
  label: string;
  subtitle: string;
  icon: string;
}> = [
  {
    screen: 'DemoTypography',
    label: 'Typography',
    subtitle: 'Text variants, weights & colours',
    icon: 'font',
  },
  {
    screen: 'DemoButtons',
    label: 'Buttons',
    subtitle: 'Variants, sizes, icons & states',
    icon: 'hand-pointer',
  },
  {
    screen: 'DemoForms',
    label: 'Forms',
    subtitle: 'TextInput & FormField',
    icon: 'keyboard',
  },
  {
    screen: 'DemoDataDisplay',
    label: 'Data Display',
    subtitle: 'Badge, Avatar, Icon & Divider',
    icon: 'layer-group',
  },
  {
    screen: 'DemoLayout',
    label: 'Layout',
    subtitle: 'Card, ListItem & Spacer',
    icon: 'table-cells',
  },
  {
    screen: 'DemoOrganisms',
    label: 'Organisms',
    subtitle: 'Header & EmptyState',
    icon: 'puzzle-piece',
  },
];

export default function DemoIndexScreen() {
  const navigation = useNavigation<Nav>();
  const { colors } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.content}
    >
      {DEMO_ITEMS.map((item, index) => (
        <ListItem
          key={String(item.screen)}
          title={item.label}
          subtitle={item.subtitle}
          leading={
            <Icon name={item.icon} size={20} color={colors.brandPrimary} />
          }
          trailing={
            <Icon name="chevron-right" size={14} color={colors.iconSubtle} />
          }
          onPress={() => navigation.navigate(item.screen)}
          showDivider={index < DEMO_ITEMS.length - 1}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
});
