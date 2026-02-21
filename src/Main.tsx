import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from '@packages/react-navigation';

export default function Main() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
