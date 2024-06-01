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
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {useQuery} from 'react-query';

import {
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {requestLoacationPermission} from '../../APIS/AppApi/api';
import {RouteProp, useRoute} from '@react-navigation/native';
import {getTrackDetail} from '../../APIS/API/api';

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

type RoadBibaranParamList = {
  roadDetail: {
    stringID: string;
    polygonID: number;
  };
};

const NewMap = () => {
  // const route = useRoute<RouteProp<RootStackParamList, 'uniqueKey'>>();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const houseRoute =
    useRoute<RouteProp<houseStackParamList, 'coordinatesKey'>>();
  const {latitude, longitude} = houseRoute.params;
  const newLat = latitude ? parseFloat(latitude.toString()) : 0;
  const newLong = longitude ? parseFloat(longitude.toString()) : 0;

  //road detail id
  const roadDetail = useRoute<RouteProp<RoadBibaranParamList, 'roadDetail'>>();
  const {polygonID} = roadDetail.params;

  const mapRef = useRef<any>();
  const [roadCoordinates, setRoadCoordinates] = useState<any>();
  const [coordinates, setCoordinates] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const windowHeight = useWindowDimensions().height;

  const [backPressedOnce, setBackPressedOnce] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  //location premission service
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

  const getTrackData = useQuery(
    ['track', polygonID],
    async () => getTrackDetail(polygonID),
    {
      onSettled: data => {
        console.log(data?.track);
        setRoadCoordinates(data?.track);
      },
    },
  );

  const currentPosition = useQuery(
    ['coordinates'],
    async () => getCurrentLocation(),
    {
      onSettled: data => console.log(data),
    },
  );

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

  const start = roadCoordinates?.find((point: any) => point.type === 'start');
  const end = roadCoordinates?.find((point: any) => point.type === 'end');

  const initialRegion = {
    latitude: coordinates ? coordinates?.coords?.latitude : 0,
    longitude: coordinates ? coordinates?.coords?.longitude : 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  const initialRegion2 = {
    latitude: newLat,
    longitude: newLong,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  const startRegion = {
    latitude: start?.latitude ? parseFloat(start?.latitude.toString()) : 0,
    longitude: start?.longitude ? parseFloat(start?.longitude.toString()) : 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  const endRegion = {
    latitude: end?.latitude ? parseFloat(end?.latitude.toString()) : 0,
    longitude: end?.longitude ? parseFloat(end?.longitude.toString()) : 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  const isValidRegion = (region: any) =>
    region.latitude !== 0 && region.longitude !== 0;

  const determineInitialRegion = () => {
    if (isValidRegion(startRegion)) {
      return startRegion;
    } else if (isValidRegion(initialRegion2)) {
      return initialRegion2;
    } else if (isValidRegion(initialRegion)) {
      return initialRegion;
    } else {
      return initialRegion;
    }
  };

  const selectedInitialRegion = determineInitialRegion();

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
              height: windowHeight > 600 ? '100%' : '40%',
            }}
            initialRegion={selectedInitialRegion}
            loadingEnabled={true}
            onPress={e => {
              setMarker(e.nativeEvent.coordinate);
              //   setNewCoordinates(e.nativeEvent.coordinate);
              console.log(e.nativeEvent.coordinate);
            }}
            showsCompass>
            {isValidRegion(startRegion) && (
              <Marker
                coordinate={{
                  latitude: startRegion.latitude,
                  longitude: startRegion.longitude,
                }}
                title="Start"
                description="Starting Point"
              />
            )}
            {isValidRegion(endRegion) && (
              <Marker
                coordinate={{
                  latitude: endRegion.latitude,
                  longitude: endRegion.longitude,
                }}
                title="End"
                description="Ending Point"
              />
            )}
            {isValidRegion(startRegion) && isValidRegion(endRegion) && (
              <Polyline
                coordinates={[startRegion, endRegion]}
                strokeColor="#000"
                strokeWidth={3}
                lineDashPattern={[2]}
              />
            )}

            {marker != null ? (
              <Marker draggable coordinate={marker} />
            ) : (
              <Marker draggable coordinate={selectedInitialRegion} />
            )}
          </MapView>

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

export default NewMap;
