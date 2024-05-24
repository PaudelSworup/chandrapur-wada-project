import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../Constant/NavigationStrings';
import {
  Home,
  InternetConnection,
  Login,
  Map,
  Register,
  GharBibaranDetail,
} from '../Screens';
import DrawerStack from './DrawerStack';
import {StyleSheet, Text} from 'react-native';
import ParibarBibaranDetail from '../Screens/Paribarbibaran/ParibarBibaranDetail';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const styles = StyleSheet.create({
    headerTitleText: {
      marginLeft: 9,
      fontSize: 20,
      color: 'black',
    },
    headerImage: {
      width: 30,
      height: 30,
      marginRight: 320,
    },
  });
  return (
    <Stack.Navigator
      initialRouteName={NavigationStrings.LAUNCH}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavigationStrings.DRAWER} component={DrawerStack} />
      <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={NavigationStrings.REGISTER} component={Register} />
      <Stack.Screen name={NavigationStrings.HOME} component={Home} />
      <Stack.Screen
        name={NavigationStrings.GHRDETAIL}
        component={GharBibaranDetail}
      />
      <Stack.Screen
        name={NavigationStrings.LAUNCH}
        component={InternetConnection}
      />
      <Stack.Screen
        name={NavigationStrings.MAPS}
        component={Map}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Stack.Screen
        name={NavigationStrings.PARIBARDETAIL}
        component={ParibarBibaranDetail}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
