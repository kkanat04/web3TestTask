import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { registerRootComponent } from 'expo';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Image, Platform, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import mapIcon from '../assets/map.png';
import listIcon from '../assets/list.png';
import settingsIcon from '../assets/settingsIcon.png';
import ListScreens from './Tabs/ListScreens/ListScreens';
import MapScreens from './Tabs/MapScreens/MapScreens';
import { StackParamList2 } from './types/navigation';
import store from './store';
import SettingsScreens from './Tabs/SettingsScreens/SettingsScreens';

const Tab = createBottomTabNavigator<StackParamList2>();

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: () => (
                  <Image
                    source={
                      route.name === 'ListScreens' ? listIcon : route.name === 'MapScreens' ? mapIcon : settingsIcon
                    }
                    style={{ width: 25, height: 25 }}
                  />
                ),
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}
              initialRouteName="ListScreens"
            >
              <Tab.Screen name="ListScreens" component={ListScreens} />
              <Tab.Screen name="MapScreens" component={MapScreens} />
              <Tab.Screen name="SettingsScreens" component={SettingsScreens} />
            </Tab.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    </SafeAreaView>
  );
}

registerRootComponent(App);
