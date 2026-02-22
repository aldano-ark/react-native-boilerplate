import HomeScreen from '@app/screens/HomeScreen';
import DemoIndexScreen from '@app/screens/demo/DemoIndexScreen';
import DemoTypographyScreen from '@app/screens/demo/DemoTypographyScreen';
import DemoButtonsScreen from '@app/screens/demo/DemoButtonsScreen';
import DemoFormsScreen from '@app/screens/demo/DemoFormsScreen';
import DemoDataDisplayScreen from '@app/screens/demo/DemoDataDisplayScreen';
import DemoLayoutScreen from '@app/screens/demo/DemoLayoutScreen';
import DemoOrganismsScreen from '@app/screens/demo/DemoOrganismsScreen';
import { RootStackNavigator } from '@packages/react-navigation';

const HomeStack = () => {
  return (
    <RootStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <RootStackNavigator.Screen name="Home" component={HomeScreen} />

      {/* ── Demo screens (native header enabled) ── */}
      <RootStackNavigator.Screen
        name="DemoIndex"
        component={DemoIndexScreen}
        options={{ title: 'UI Components', headerShown: true }}
      />
      <RootStackNavigator.Screen
        name="DemoTypography"
        component={DemoTypographyScreen}
        options={{ title: 'Typography', headerShown: true }}
      />
      <RootStackNavigator.Screen
        name="DemoButtons"
        component={DemoButtonsScreen}
        options={{ title: 'Buttons', headerShown: true }}
      />
      <RootStackNavigator.Screen
        name="DemoForms"
        component={DemoFormsScreen}
        options={{ title: 'Forms', headerShown: true }}
      />
      <RootStackNavigator.Screen
        name="DemoDataDisplay"
        component={DemoDataDisplayScreen}
        options={{ title: 'Data Display', headerShown: true }}
      />
      <RootStackNavigator.Screen
        name="DemoLayout"
        component={DemoLayoutScreen}
        options={{ title: 'Layout', headerShown: true }}
      />
      <RootStackNavigator.Screen
        name="DemoOrganisms"
        component={DemoOrganismsScreen}
        options={{ title: 'Organisms', headerShown: true }}
      />
    </RootStackNavigator.Navigator>
  );
};

export default HomeStack;
