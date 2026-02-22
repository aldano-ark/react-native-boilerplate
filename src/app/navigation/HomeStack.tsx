import React from 'react';
import type { ComponentType } from 'react';
import HomeScreen from '@app/screens/HomeScreen';
import { RootStackNavigator } from '@packages/react-navigation';

type AnyComponent = ComponentType<any>;

const HomeStack = () => {
  return (
    <RootStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <RootStackNavigator.Screen name="Home" component={HomeScreen} />

      {/*
       * Demo screens are only registered in development builds.
       * Using require() inside __DEV__ ensures Metro excludes these modules
       * entirely from the release bundle via dead-code elimination.
       */}
      {__DEV__ && (
        <>
          <RootStackNavigator.Screen
            name="DemoIndex"
            component={
              require('@app/screens/demo/DemoIndexScreen')
                .default as AnyComponent
            }
            options={{ title: 'UI Components', headerShown: true }}
          />
          <RootStackNavigator.Screen
            name="DemoTypography"
            component={
              require('@app/screens/demo/DemoTypographyScreen')
                .default as AnyComponent
            }
            options={{ title: 'Typography', headerShown: true }}
          />
          <RootStackNavigator.Screen
            name="DemoButtons"
            component={
              require('@app/screens/demo/DemoButtonsScreen')
                .default as AnyComponent
            }
            options={{ title: 'Buttons', headerShown: true }}
          />
          <RootStackNavigator.Screen
            name="DemoForms"
            component={
              require('@app/screens/demo/DemoFormsScreen')
                .default as AnyComponent
            }
            options={{ title: 'Forms', headerShown: true }}
          />
          <RootStackNavigator.Screen
            name="DemoDataDisplay"
            component={
              require('@app/screens/demo/DemoDataDisplayScreen')
                .default as AnyComponent
            }
            options={{ title: 'Data Display', headerShown: true }}
          />
          <RootStackNavigator.Screen
            name="DemoLayout"
            component={
              require('@app/screens/demo/DemoLayoutScreen')
                .default as AnyComponent
            }
            options={{ title: 'Layout', headerShown: true }}
          />
          <RootStackNavigator.Screen
            name="DemoOrganisms"
            component={
              require('@app/screens/demo/DemoOrganismsScreen')
                .default as AnyComponent
            }
            options={{ title: 'Organisms', headerShown: true }}
          />
        </>
      )}
    </RootStackNavigator.Navigator>
  );
};

export default HomeStack;
