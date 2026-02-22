import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  useTheme,
  TranslatedText,
  Button,
  Spacer,
} from '@packages/react-native-ui';
import type { RootNavigationProp } from '@app/navigation/navigationTypes';

export default function HomeScreen() {
  const navigation = useNavigation<RootNavigationProp<'Home'>>();
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TranslatedText tKey="home.title" variant="heading2" align="center" />
      <Spacer size={2} />
      <TranslatedText
        tKey="home.subtitle"
        variant="body"
        color={colors.textSecondary}
        align="center"
      />
      <Spacer size={8} />

      {__DEV__ && (
        <View>
          <Button
            label="View UI Components"
            rightIcon="arrow-right"
            onPress={() => navigation.navigate('DemoIndex')}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
