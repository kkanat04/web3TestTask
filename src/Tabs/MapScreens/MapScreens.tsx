import { createStackNavigator } from '@react-navigation/stack';
import Map from '../../screens/Map/Map';

const Stack = createStackNavigator();

const MapScreens = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}
    initialRouteName="Map"
  >
    <Stack.Screen name="Map" component={Map} />
  </Stack.Navigator>
);

export default MapScreens;
