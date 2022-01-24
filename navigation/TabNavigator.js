import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen';
import Doctor from '../screens/Doctor';
import Medicine from '../screens/Medicine';
import Contact from '../screens/contacts';
import MISC from '../screens/MISC';
import MyStack from './StackNavigator';
import HomeStack from './StackHome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      labeled={false}
      initialRouteName="Home"
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else {
            iconName = focused ? 'ios-create' : 'ios-create-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(30)}
              color={'orange'}
              style={styles.icons}
            />
          );
        },
      })}
      tabBarLabel={{ color: 'red' }}
      tabBarOptions={{
        activeColor: 'green',
        inactiveColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Add Screen" component={MyStack} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#2f345d',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: { width: RFValue(30), height: RFValue(30) },
});
