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
  RoadDetail,
  EndPointMain,
  Bridge,
  BridgeDetail,
  NewMap,
} from '../Screens';
import DrawerStack from './DrawerStack';
import {Image, StyleSheet, Text} from 'react-native';
import ParibarBibaranDetail from '../Screens/Paribarbibaran/ParibarBibaranDetail';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const styles = StyleSheet.create({
    headerTitleText: {
      marginLeft: 9,
      fontSize: 20,
      color: 'black',
    },
  });

  const headerTitleComponent = () => (
    <View className="flex-row gap-1">
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png',
        }}
        className="w-[30px] h-[30px]"
      />
      <Text style={styles.headerTitleText}>चंद्रपुर नगरपालिका वडा नं ३</Text>
    </View>
  );

  return (
    <Stack.Navigator
      initialRouteName={NavigationStrings.LAUNCH}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavigationStrings.DRAWER} component={DrawerStack} />
      <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={NavigationStrings.REGISTER} component={Register} />
      <Stack.Screen name={NavigationStrings.HOME} component={Home} />
      <Stack.Screen
        name={NavigationStrings.GHRDETAIL}
        component={GharBibaranDetail}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitle: headerTitleComponent,
        })}
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
          headerShown: true,
          headerTitle: headerTitleComponent,
        })}
      />

      <Stack.Screen
        name={NavigationStrings.PARIBARDETAIL}
        component={ParibarBibaranDetail}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitle: headerTitleComponent,
        })}
      />

      <Stack.Screen
        name={NavigationStrings.ROADDETAIL}
        component={RoadDetail}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitle: headerTitleComponent,
        })}
      />

      <Stack.Screen
        name={NavigationStrings.ENDPOINT}
        component={EndPointMain}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitle: headerTitleComponent,
        })}
      />

      <Stack.Screen
        name={NavigationStrings.BRIDGE}
        component={Bridge}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitle: headerTitleComponent,
        })}
      />

      <Stack.Screen
        name={NavigationStrings.BRIDGEDETAIL}
        component={BridgeDetail}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitle: headerTitleComponent,
        })}
      />

      <Stack.Screen
        name={NavigationStrings.NEWMAP}
        component={NewMap}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitle: headerTitleComponent,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
