import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/HomeScreen';
import Details from '../screens/Details';
import Doctor from '../screens/Add_Doctor';
import Medicine from '../screens/Add_Medicines';
import Contacts from '../screens/Add_Contacts';
import Misc from '../screens/Add_MISC';
import MemberDetailsScreen from '../screens/MemberDetails';
import { NavigationContainer } from '@react-navigation/native';
import AddScreen from '../screens/AddScreen';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="AddScreen" component={AddScreen} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Doctors" component={Doctor} />
      <Stack.Screen name="Medicine" component={Medicine} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Misc" component={Misc} />
    </Stack.Navigator>
  );
}
