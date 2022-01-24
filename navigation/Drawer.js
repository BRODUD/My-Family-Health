import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Doctor from '../screens/Doctor';
import { NavigationContainer } from '@react-navigation/native';
import Medicine from '../screens/Medicine';
import Contact from '../screens/contacts';
import MISC from '../screens/MISC';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Doctor" component={Doctor} />
        <Drawer.Screen name="Medicine" component={Medicine} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="MISC" component={MISC} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
