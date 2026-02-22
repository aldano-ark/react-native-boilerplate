import HomeScreen from '@app/screens/HomeScreen';
import { RootStackNavigator } from '@packages/react-navigation';

const HomeStack = () => {
  return (
    <RootStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <RootStackNavigator.Screen name="Home" component={HomeScreen} />
    </RootStackNavigator.Navigator>
  );
};

export default HomeStack;
