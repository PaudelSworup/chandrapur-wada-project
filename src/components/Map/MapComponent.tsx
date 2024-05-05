import {
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  Alert,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Chip,
  MD2Colors,
  Snackbar,
} from 'react-native-paper';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useQuery} from 'react-query';
import {TrashIcon} from 'react-native-heroicons/outline';
import {useDispatch} from 'react-redux';
import {AppDispatch, persistor} from '../../store/store';
import {setFirstCoordinate} from '../../store/coordinateSlice';
import {useToast} from 'react-native-toast-notifications';
import {
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {requestLoacationPermission} from '../../APIS/AppApi/api';
import NavigationStrings from '../../Constant/NavigationStrings';
import {RouteProp, useRoute} from '@react-navigation/native';

type RootStackParamList = {
  uniqueKey: {id?: string};
};

type houseStackParamList = {
  coordinatesKey: {
    ids?: string;
    latitude?: number;
    longitude?: number;
  };
};

const MapsComponent = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'uniqueKey'>>();
  const {id} = route.params;

  const houseRoute =
    useRoute<RouteProp<houseStackParamList, 'coordinatesKey'>>();
  const {ids, latitude, longitude} = houseRoute.params;

  console.log('house', ids, latitude, longitude);

  const newLat = latitude ? parseInt(latitude.toString()) : 0;
  const newLong = longitude ? parseInt(longitude.toString()) : 0;
  // const newLat: number = latitude;
  // const newLong: number = longitude;

  // console.log(id);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const toast = useToast();
  const mapRef = useRef<any>();
  const [coordinates, setCoordinates] = useState<any>();
  const [newCoordinates, setNewCoordinates] = useState<any>(null);
  const [marker, setMarker] = useState<any>();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [backPressedOnce, setBackPressedOnce] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const locationService = useQuery(
    ['locationservice'],
    async () => requestLoacationPermission(),
    {
      onSettled: data => console.log(data),
    },
  );

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setCoordinates(position);
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const initialRegion = {
    latitude: coordinates ? coordinates?.coords?.latitude : 0,
    longitude: coordinates ? coordinates?.coords?.longitude : 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  const initialRegion2 = {
    latitude: newLat,
    longitude: newLong,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const currentPosition = useQuery(
    ['coordinates'],
    async () => getCurrentLocation(),
    {
      onSettled: data => console.log(data),
    },
  );

  //dispatching coordinates
  const dispatch = useDispatch<AppDispatch>();

  //saving the coordinates
  const saveRegion = () => {
    // if (newCoordinates !== null) {
    dispatch(
      setFirstCoordinate({
        lattitude: newCoordinates
          ? newCoordinates?.latitude
          : coordinates?.coords?.latitude,
        longitude: newCoordinates
          ? newCoordinates?.longitude
          : coordinates?.coords?.longitude,
        coordinateType: 'one',
      }),
    );
    toast.show('Location updated', {
      type: 'success',
      placement: 'bottom',
    });
    if (id === 'house') {
      navigation.navigate(NavigationStrings.GHARSAMMANDHIBIBARAN);
    }
    // }
  };

  //change the region and marker
  const changeRegion = () => {
    mapRef?.current?.animateToRegion(initialRegion);
    setMarker(initialRegion);
    setNewCoordinates(null);
    dispatch(
      setFirstCoordinate({
        lattitude: coordinates?.coords?.latitude,
        longitude: coordinates?.coords?.longitude,
        coordinateType: 'one',
      }),
    );

    toast.show('Location reset', {
      type: 'success',
      placement: 'bottom',
    });
    persistor.purge();
  };

  const handleBackPress = useCallback(() => {
    if (backPressedOnce) {
      // If back button is pressed twice within a certain time frame, navigate back
      navigation.goBack();
      return true;
    }

    // Show Snackbar when back button is pressed
    setSnackbarVisible(true);

    setBackPressedOnce(true);
    setTimeout(() => setBackPressedOnce(false), 2000);

    // Return true to prevent the default back button action
    return true;
  }, [navigation, backPressedOnce]);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }, [handleBackPress]),
  );

  // const handleBackPress = useCallback(() => {
  //   // Show alert dialog when back button is pressed
  //   Alert.alert(
  //     'Go back',
  //     'Are you sure you want to Go back?',
  //     [
  //       {text: 'Cancel', style: 'cancel'},
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           navigation.goBack();
  //           console.log('values are reset');
  //         },
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  //   // Return true to prevent the default back button action
  //   return true;
  // }, [navigation]);

  // useFocusEffect(
  //   useCallback(() => {
  //     BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  //     return () => {
  //       BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  //     };
  //   }, [handleBackPress]),
  // );

  return (
    <>
      {coordinates ? (
        <View className="h-full">
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            style={{
              width: '100%',
              height: windowHeight > 600 ? '70%' : '40%',
            }}
            initialRegion={newLat && newLong ? initialRegion2 : initialRegion}
            loadingEnabled={true}
            onPress={e => {
              setMarker(e.nativeEvent.coordinate);
              setNewCoordinates(e.nativeEvent.coordinate);
              console.log(e.nativeEvent.coordinate);
              // dispatch(setFirstCoordinate({

              // }))
            }}
            showsCompass>
            {marker != null ? (
              <Marker draggable coordinate={marker} />
            ) : (
              <Marker
                draggable
                coordinate={newLat && newLong ? initialRegion2 : initialRegion}
              />
            )}
          </MapView>
          <ScrollView>
            <View className="p-3">
              <View className="mx-3">
                <View className="flex-row justify-between">
                  <Button
                    onPress={changeRegion}
                    className={`bg-red-600/80 rounded-md ${
                      windowWidth > 500 ? 'px-6 py-2' : 'px-4'
                    }`}>
                    <Text className="text-[16px] text-white">Reset</Text>
                  </Button>

                  <Button
                    onPress={saveRegion}
                    className="text-[16px] bg-cyan-600/80 rounded-md px-4">
                    <Text className="text-white">Save</Text>
                  </Button>
                </View>
                <View className="mt-3 shadow-lg border p-3 rounded-md">
                  <View className="flex-row justify-between items-center">
                    <View>
                      <View className="flex-row items-center space-x-3 ">
                        <Text
                          className={`text-stone-900 ${
                            windowWidth > 500 ? 'text-lg' : 'text-base'
                          }`}>
                          id:
                        </Text>
                        <Text
                          className={`text-stone-900 ${
                            windowWidth > 500 ? 'text-lg' : 'text-base'
                          }`}>
                          1
                        </Text>
                      </View>

                      <View className="flex-row space-x-3 ">
                        <Text
                          className={`text-stone-900 ${
                            windowWidth > 500 ? 'text-lg' : 'text-base'
                          }`}>
                          Lat
                        </Text>
                        <Text
                          className={`text-stone-900 ${
                            windowWidth > 500 ? 'text-lg' : 'text-base'
                          }`}>
                          {newCoordinates
                            ? newCoordinates.latitude
                            : coordinates?.coords?.latitude}
                        </Text>
                      </View>

                      <View className="flex-row space-x-3 ">
                        <Text
                          className={`text-stone-900 ${
                            windowWidth > 500 ? 'text-lg' : 'text-base'
                          }`}>
                          Long
                        </Text>
                        <Text
                          className={`text-stone-900 ${
                            windowWidth > 500 ? 'text-lg' : 'text-base'
                          }`}>
                          {newCoordinates
                            ? newCoordinates.longitude
                            : coordinates?.coords?.longitude}
                        </Text>
                      </View>
                    </View>
                    <TrashIcon size={40} color="red" />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <View className="flex-1 justify-between">
            <Snackbar
              className="bg-[#cbc9c9]"
              visible={snackbarVisible}
              onDismiss={() => setSnackbarVisible(false)}
              duration={1000} // 1 seconds
              action={{
                label: 'go back',
                textColor: 'black',
                onPress: () => {
                  setSnackbarVisible(false);
                  handleBackPress(); // Call handleBackPress again to navigate back
                },
              }}>
              <Text className="text-black">Press again to go back</Text>
            </Snackbar>
          </View>
        </View>
      ) : (
        <View
          style={{
            position: 'absolute',
            top: 50,
            left: 50,
            right: 50,
            bottom: 50,
            justifyContent: 'center',
            height: '100%',
            alignItems: 'center',
          }}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={MD2Colors.red800}
          />
        </View>
      )}
    </>
  );
};

export default MapsComponent;
