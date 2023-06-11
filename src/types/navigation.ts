import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamList = {
  VehicleDetails: undefined;
  List: undefined;
};

export type NavigationProps = StackNavigationProp<StackParamList>;

export type StackParamList2 = {
  MapScreens: undefined;
  ListScreens: undefined;
  SettingsScreens: undefined;
};

export type NavigationProps2 = StackNavigationProp<StackParamList2>;
