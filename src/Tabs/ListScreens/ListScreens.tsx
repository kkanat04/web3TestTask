import { createStackNavigator } from '@react-navigation/stack';
import List from '../../screens/List/List';
import VehicleDetails from '../../screens/VehicleDetails/VehicleDetails';
import { StackParamList } from '../../types/navigation';

const Stack = createStackNavigator<StackParamList>();

const ListScreens = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}
    initialRouteName="List"
  >
    <Stack.Screen name="List" component={List} />
    <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
  </Stack.Navigator>
);

export default ListScreens;
