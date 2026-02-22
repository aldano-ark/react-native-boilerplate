import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  DemoIndex: undefined;
  DemoTypography: undefined;
  DemoButtons: undefined;
  DemoForms: undefined;
  DemoDataDisplay: undefined;
  DemoLayout: undefined;
  DemoOrganisms: undefined;
};

export type RootNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
