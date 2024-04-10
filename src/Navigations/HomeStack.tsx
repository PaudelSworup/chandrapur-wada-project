import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../Constant/NavigationStrings';
import {Home} from '../Screens';
import ChairmanComponent from '../components/Message/ChairmanComponent';
import Chairman from '../Screens/Message/Chairman';
import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationStrings.HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavigationStrings.HOME} component={Home} />
      <Stack.Screen name={NavigationStrings.DRAWER} component={DrawerStack} />
    </Stack.Navigator>
  );
};

export default HomeStack;
