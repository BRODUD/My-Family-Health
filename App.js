import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import TabNavigator from './navigation/TabNavigator'
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './navigation/Drawer'
import Home from './screens/HomeScreen'
import Login from './screens/Login'
import Details from './screens/Details';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
export default function App() {
  return <AppNavigator />;
}

const SwitchNavigator = createSwitchNavigator({
Login:Login,
Home:Drawer,
Details:Details,
});

const AppNavigator = createAppContainer(SwitchNavigator);