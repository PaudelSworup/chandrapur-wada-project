import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NavigationStrings from '../Constant/NavigationStrings';
// import Chairman from '../Screens/Message/Chairman';
import {Image, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {
  Chairman,
  EndPointMain,
  Gharbibaran,
  GharbibaranAdd,
  Ghumnethau,
  Karmachari,
  Map,
  Owner,
  Paribarbibaran,
  ParibarbibaranAdd,
  Parichaya,
  Road,
  RoadBibaran,
  Samparka,
  Sangsanstha,
  Srotsadhan,
  Suchana,
  Tole,
  WadaPratinidhi,
} from '../Screens';
import CustomDrawer from '../components/DrawerComponent/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  const {width} = useWindowDimensions();
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
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerActiveBackgroundColor: '#AFD1EF',
        drawerItemStyle: {borderRadius: 10},
        drawerLabelStyle: {fontSize: 17},
        drawerActiveTintColor: '#111',
        headerStyle: {
          backgroundColor: '#F9F9F9',
        },
        headerRight: () => (
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png',
            }}
            style={styles.headerImage}
          />
        ),
      }}>
      <Drawer.Screen
        name={NavigationStrings.PARICHAYA}
        component={Parichaya}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      {/* <Drawer.Screen
        name={NavigationStrings.CHAIRMAN}
        component={Chairman}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      /> */}

      <Drawer.Screen
        name={NavigationStrings.WADAPRATINIDHI}
        component={WadaPratinidhi}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.KARMACHARI}
        component={Karmachari}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.TOLE}
        component={Tole}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.GHARBIBARAN}
        component={Gharbibaran}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.GHARSAMMANDHIBIBARAN}
        component={GharbibaranAdd}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      {/* <Drawer.Screen
        name={NavigationStrings.HOMEOWNER}
        component={Owner}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      /> */}

      <Drawer.Screen
        name={NavigationStrings.PARIBARBIBARAN}
        component={Paribarbibaran}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.PARIBARSAMBANDHIBIBARAN}
        component={ParibarbibaranAdd}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.SANGSANSTHA}
        component={Sangsanstha}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.SROTSADHAN}
        component={Srotsadhan}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.GHUMNETHAU}
        component={Ghumnethau}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.SUCHANA}
        component={Suchana}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.SAMPARKA}
        component={Samparka}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.ROADBIBARAN}
        component={Road}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />

      <Drawer.Screen
        name={NavigationStrings.ROAD}
        component={RoadBibaran}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      />


{/* <Drawer.Screen
        name={NavigationStrings.}
        component={EndPointMain}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={styles.headerTitleText}>
              चंद्रपुर नगरपालिका वडा नं ३
            </Text>
          ),
        })}
      /> */}

      {/* 
      <Drawer.Screen
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
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerStack;
