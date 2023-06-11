import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../../screens/Settings/Settings';

const Stack = createStackNavigator();

const ListScreens = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}
    initialRouteName="Settings"
  >
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

export default ListScreens;
