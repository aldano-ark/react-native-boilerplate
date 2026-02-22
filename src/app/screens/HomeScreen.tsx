import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme, Text, Button, Spacer } from '@packages/react-native-ui';
import type { RootNavigationProp } from '@app/navigation/navigationTypes';

export default function HomeScreen() {
  const navigation = useNavigation<RootNavigationProp<'Home'>>();
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text variant="heading2" align="center">
        React Native Boilerplate
      </Text>
      <Spacer size={2} />
      <Text variant="body" color={colors.textSecondary} align="center">
        A starting point for your next app.
      </Text>
      <Spacer size={8} />

      <View>
        <Button
          label="Explore the demo"
          rightIcon="arrow-right"
          onPress={() => navigation.navigate('DemoIndex')}
        />
      </View>
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
