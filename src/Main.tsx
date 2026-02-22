import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '@app/navigation/HomeStack';

export default function Main() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
