import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/HomeScreen';
import MemberDetailsScreen from '../screens/MemberDetails';
import { NavigationContainer } from '@react-navigation/native';
import EditMember from '../screens/Edit_Member';
import EditDoctor from '../screens/Edit_Doctor';
import EditContact from '../screens/Edit_Contact';
import EditMedicine from '../screens/Edit_Medicine';
import EditMisc from '../screens/Edit_MISC';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='MemberDetails' component={MemberDetailsScreen}/>
      <Stack.Screen name="EditMember" component={EditMember} />
      <Stack.Screen name="EditDoctor" component={EditDoctor} />
      <Stack.Screen name="EditContact" component={EditContact} />
      <Stack.Screen name="EditMedicine" component={EditMedicine} />
      <Stack.Screen name="EditMisc" component={EditMisc} />

    </Stack.Navigator>
  );
}
