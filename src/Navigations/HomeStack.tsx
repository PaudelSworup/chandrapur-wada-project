import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../Constant/NavigationStrings';
import {Home, InternetConnection, Login, Register} from '../Screens';
import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationStrings.LAUNCH}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavigationStrings.DRAWER} component={DrawerStack} />
      <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={NavigationStrings.REGISTER} component={Register} />
      <Stack.Screen name={NavigationStrings.HOME} component={Home} />
      <Stack.Screen
        name={NavigationStrings.LAUNCH}
        component={InternetConnection}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
