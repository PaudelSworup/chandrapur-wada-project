// import {
//   View,
//   Text,
//   useWindowDimensions,
//   ScrollView,
//   BackHandler,
// } from 'react-native';
// import React, {useCallback, useRef, useState} from 'react';
// import {
//   ActivityIndicator,
//   Button,
//   MD2Colors,
//   Snackbar,
// } from 'react-native-paper';
// import Geolocation from 'react-native-geolocation-service';
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import {useMutation, useQuery, useQueryClient} from 'react-query';
// import {TrashIcon} from 'react-native-heroicons/outline';
// import {useDispatch} from 'react-redux';
// import {AppDispatch, persistor} from '../../store/store';
// import {setFirstCoordinate} from '../../store/coordinateSlice';
// import {useToast} from 'react-native-toast-notifications';
// import {
//   ParamListBase,
//   useFocusEffect,
//   useNavigation,
// } from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {requestLoacationPermission} from '../../APIS/AppApi/api';
// import NavigationStrings from '../../Constant/NavigationStrings';
// import {RouteProp, useRoute} from '@react-navigation/native';
// import {
//   deleteTrackData,
//   getTrackDetail,
//   postTrack,
//   updateTrackData,
// } from '../../APIS/API/api';
// import {Polyline} from 'react-native-maps';
// import {FlatList} from 'react-native';

// type RootStackParamList = {
//   uniqueKey: {id?: string};
// };

// type houseStackParamList = {
//   coordinatesKey: {
//     ids?: string;
//     latitude?: number;
//     longitude?: number;
//   };
// };

// type roadStackParamList = {
//   roadId: {id?: string};
// };

// type endPointStackParamList = {
//   endPointId: {endPoint?: string; uniqueId?: number};
// };

// type BridgePointStackParamList = {
//   uniqueBridgeId: {bridgeId?: number; bridgeStringId?: string};
// };

// type RoadBibaranParamList = {
//   roadDetail: {
//     stringID: string;
//     roadbibaranid: number;
//     Roadlatitude: number;
//     Roadlongitude: number;
//   };
// };

// const MapsComponent = () => {
//   const route = useRoute<RouteProp<RootStackParamList, 'uniqueKey'>>();

//   //bridge route id
//   const bridgeRoutes =
//     useRoute<RouteProp<BridgePointStackParamList, 'uniqueBridgeId'>>();
//   const {bridgeId, bridgeStringId} = bridgeRoutes.params;

//   //road routes id
//   const Roadroute = useRoute<RouteProp<roadStackParamList, 'roadId'>>();
//   const {id} = Roadroute.params;

//   //road endpoints id
//   const endPointRoute =
//     useRoute<RouteProp<endPointStackParamList, 'endPointId'>>();
//   const {endPoint, uniqueId} = endPointRoute.params;
//   console.log('unique id', uniqueId);

//   //house route id
//   const houseRoute =
//     useRoute<RouteProp<houseStackParamList, 'coordinatesKey'>>();
//   const {ids, latitude, longitude} = houseRoute.params;

//   console.log('house', latitude, longitude);

//   const newLat = latitude ? parseFloat(latitude.toString()) : 0;
//   const newLong = longitude ? parseFloat(longitude.toString()) : 0;

//   //road detail id
//   const roadDetail = useRoute<RouteProp<RoadBibaranParamList, 'roadDetail'>>();
//   const {stringID, roadbibaranid} = roadDetail.params;

//   const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

//   const toast = useToast();
//   const mapRef = useRef<any>();
//   const [coordinates, setCoordinates] = useState<any>();
//   const [newCoordinates, setNewCoordinates] = useState<any>(null);
//   const [marker, setMarker] = useState<any>();
//   const windowWidth = useWindowDimensions().width;
//   const windowHeight = useWindowDimensions().height;
//   const [backPressedOnce, setBackPressedOnce] = useState(false);
//   const [snackbarVisible, setSnackbarVisible] = useState(false);
//   const [trackData, setTrackData] = useState([]);
//   const queryClient = useQueryClient();

//   const locationService = useQuery(
//     ['locationservice'],
//     async () => requestLoacationPermission(),
//     {
//       onSettled: data => console.log(data),
//     },
//   );

//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       position => {
//         setCoordinates(position);
//         console.log(position);
//       },
//       error => {
//         // See error code charts below.
//         console.log(error.code, error.message);
//       },
//       {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//     );
//   };

//   const getTrack = useQuery(
//     ['trackDet', roadbibaranid],
//     async () => getTrackDetail(roadbibaranid),
//     {
//       onSettled: data => setTrackData(data?.track),
//     },
//   );

//   const initialRegion = {
//     latitude: coordinates ? coordinates?.coords?.latitude : 0,
//     longitude: coordinates ? coordinates?.coords?.longitude : 0,
//     latitudeDelta: 0.001,
//     longitudeDelta: 0.001,
//   };

//   const deleteMutation = useMutation<any, any, any>({
//     mutationFn: deleteTrackData,
//     onSuccess: data => {
//       if (data?.success === true) {
//         queryClient.invalidateQueries(['trackDet', roadbibaranid]);
//         toast.show(data?.message, {type: 'success', placement: 'bottom'});
//       } else {
//         toast.show(data?.error || 'Error occurred', {
//           type: 'danger',
//           placement: 'bottom',
//         });
//       }
//     },
//   });

//   const mutation = useMutation<any, any, any>({
//     mutationFn: postTrack,
//     onSuccess: data => {
//       if (data?.success === true) {
//         queryClient.invalidateQueries(['trackDet', roadbibaranid]);
//         toast.show(data?.message, {type: 'success', placement: 'bottom'});
//       } else {
//         toast.show(data?.error || 'Error occurred', {
//           type: 'danger',
//           placement: 'bottom',
//         });
//       }
//     },
//   });

//   const currentPosition = useQuery(
//     ['coordinates'],
//     async () => getCurrentLocation(),
//     {
//       onSettled: data => console.log(data),
//     },
//   );

//   //dispatching coordinates
//   const dispatch = useDispatch<AppDispatch>();

//   //saving the coordinates
//   const saveRegion = () => {
//     // if (newCoordinates !== null) {
//     dispatch(
//       setFirstCoordinate({
//         lattitude: newCoordinates
//           ? newCoordinates?.latitude
//           : coordinates?.coords?.latitude,
//         longitude: newCoordinates
//           ? newCoordinates?.longitude
//           : coordinates?.coords?.longitude,
//         coordinateType: 'one',
//       }),
//     );
//     toast.show('Location updated', {
//       type: 'success',
//       placement: 'bottom',
//     });

//     if (id === 'house') {
//       navigation.navigate(NavigationStrings.GHARSAMMANDHIBIBARAN);
//     }

//     if (id === 'road') {
//       navigation.navigate(NavigationStrings.ROADBIBARAN);
//     }

//     if (endPoint === 'endPoint') {
//       navigation.navigate(NavigationStrings.ENDPOINT, {id: uniqueId});
//     }

//     if (bridgeStringId === 'bridge') {
//       navigation.navigate(NavigationStrings.BRIDGE, {id: bridgeId});
//     }

//     if (stringID === 'roadUpdate') {
//       const trackCoordinates = {
//         latitude: newCoordinates
//           ? newCoordinates?.latitude
//           : coordinates?.coords?.latitude,
//         longitude: newCoordinates
//           ? newCoordinates?.longitude
//           : coordinates?.coords?.longitude,
//         type: 'track',
//         roadId: roadbibaranid,
//       };
//       mutation.mutate(trackCoordinates, {
//         onSuccess: () => {
//           dispatch(
//             setFirstCoordinate({
//               lattitude: 0,
//               longitude: 0,
//               coordinateType: 'one',
//             }),
//           );
//         },
//       });
//       // updateTrackData(
//       //   {
//       //     latitude: newCoordinates
//       //       ? newCoordinates?.latitude
//       //       : coordinates?.coords?.latitude,
//       //     longitude: newCoordinates
//       //       ? newCoordinates?.longitude
//       //       : coordinates?.coords?.longitude,
//       //   },
//       //   roadbibaranid,
//       // ).then((res: any) => {
//       //   if (res?.success === true) {
//       //     toast.show(`${res?.message}`, {
//       //       type: 'success',
//       //       placement: 'bottom',
//       //     });
//       //   } else {
//       //     toast.show(`${res?.error}`, {
//       //       type: 'danger',
//       //       placement: 'bottom',
//       //     });
//       //   }
//       // });
//       // navigation.navigate(NavigationStrings.ROADBIBARAN);
//     }
//   };

//   //change the region and marker
//   const changeRegion = () => {
//     mapRef?.current?.animateToRegion(initialRegion);
//     setMarker(initialRegion);
//     setNewCoordinates(null);
//     dispatch(
//       setFirstCoordinate({
//         lattitude: coordinates?.coords?.latitude,
//         longitude: coordinates?.coords?.longitude,
//         coordinateType: 'one',
//       }),
//     );

//     toast.show('Location reset', {
//       type: 'success',
//       placement: 'bottom',
//     });
//     persistor.purge();
//   };

//   const handleBackPress = useCallback(() => {
//     if (backPressedOnce) {
//       // If back button is pressed twice within a certain time frame, navigate back
//       navigation.goBack();
//       return true;
//     }

//     // Show Snackbar when back button is pressed
//     setSnackbarVisible(true);

//     setBackPressedOnce(true);
//     setTimeout(() => setBackPressedOnce(false), 2000);

//     // Return true to prevent the default back button action
//     return true;
//   }, [navigation, backPressedOnce]);

//   useFocusEffect(
//     useCallback(() => {
//       BackHandler.addEventListener('hardwareBackPress', handleBackPress);
//       return () => {
//         BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
//       };
//     }, [handleBackPress]),
//   );

//   const renderItemTwo = useCallback(
//     ({item, index}: any) => (
//       <View className="mt-3 mx-3 py-4 shadow-lg border p-3 rounded-md">
//         <View className="flex-row justify-between p-3">
//           <View>
//             <View className="flex-row space-x-3 ">
//               <Text
//                 className={`text-stone-900 ${
//                   windowWidth > 500 ? 'text-lg' : 'text-base'
//                 }`}>
//                 id
//               </Text>
//               <Text
//                 className={`text-stone-900 ${
//                   windowWidth > 500 ? 'text-lg' : 'text-base'
//                 }`}>
//                 {item.id}
//               </Text>
//             </View>

//             <View className="flex-row space-x-3 ">
//               <Text
//                 className={`text-stone-900 ${
//                   windowWidth > 500 ? 'text-lg' : 'text-base'
//                 }`}>
//                 lat
//               </Text>
//               <Text
//                 className={`text-stone-900 ${
//                   windowWidth > 500 ? 'text-lg' : 'text-base'
//                 }`}>
//                 {item.latitude}
//               </Text>
//             </View>

//             <View className="flex-row space-x-3 ">
//               <Text
//                 className={`text-stone-900 ${
//                   windowWidth > 500 ? 'text-lg' : 'text-base'
//                 }`}>
//                 Long
//               </Text>
//               <Text
//                 className={`text-stone-900 ${
//                   windowWidth > 500 ? 'text-lg' : 'text-base'
//                 }`}>
//                 {item.longitude}
//               </Text>
//             </View>
//           </View>
//           <TrashIcon
//             size={40}
//             color="red"
//             onPress={() => deleteMutation.mutate(item.id)}
//           />
//         </View>
//       </View>
//     ),
//     [],
//   );

//   return (
//     <>
//       {coordinates ? (
//         <View className="h-full">
//           <MapView
//             ref={mapRef}
//             provider={PROVIDER_GOOGLE}
//             showsUserLocation={true}
//             style={{
//               width: '100%',
//               height: windowHeight > 600 ? '70%' : '40%',
//             }}
//             // initialRegion={newLat && newLong ? initialRegion2 : initialRegion}
//             initialRegion={initialRegion}
//             loadingEnabled={true}
//             onPress={e => {
//               setMarker(e.nativeEvent.coordinate);
//               setNewCoordinates(e.nativeEvent.coordinate);
//               console.log(e.nativeEvent.coordinate);
//             }}
//             showsCompass>
//             {marker != null ? (
//               <Marker draggable coordinate={marker} />
//             ) : (
//               <Marker draggable coordinate={initialRegion} />
//             )}
//           </MapView>

//           <View className="p-3">
//             <View className="flex-row justify-between">
//               <Button
//                 onPress={changeRegion}
//                 className={`bg-red-600/80 rounded-md ${
//                   windowWidth > 500 ? 'px-6 py-2' : 'px-4'
//                 }`}>
//                 <Text className="text-[16px] text-white">Reset</Text>
//               </Button>

//               <Button
//                 onPress={saveRegion}
//                 className="text-[16px] bg-cyan-600/80 rounded-md px-4">
//                 <Text className="text-white">Save</Text>
//               </Button>
//             </View>
//             {trackData.length === 0 && (
//               <View className="mt-3 shadow-lg border p-3 rounded-md">
//                 <View className="flex-row justify-between">
//                   <View className="flex-row space-x-3 ">
//                     <Text
//                       className={`text-stone-900 ${
//                         windowWidth > 500 ? 'text-lg' : 'text-base'
//                       }`}>
//                       Lat
//                     </Text>
//                     <Text
//                       className={`text-stone-900 ${
//                         windowWidth > 500 ? 'text-lg' : 'text-base'
//                       }`}>
//                       {newCoordinates
//                         ? newCoordinates.latitude
//                         : coordinates?.coords?.latitude}
//                     </Text>
//                   </View>

//                   <View className="flex-row space-x-3 ">
//                     <Text
//                       className={`text-stone-900 ${
//                         windowWidth > 500 ? 'text-lg' : 'text-base'
//                       }`}>
//                       Long
//                     </Text>
//                     <Text
//                       className={`text-stone-900 ${
//                         windowWidth > 500 ? 'text-lg' : 'text-base'
//                       }`}>
//                       {newCoordinates
//                         ? newCoordinates.longitude
//                         : coordinates?.coords?.longitude}
//                     </Text>
//                   </View>
//                 </View>
//               </View>
//             )}
//           </View>

//           <FlatList
//             removeClippedSubviews={true}
//             initialNumToRender={6}
//             maxToRenderPerBatch={10}
//             data={trackData}
//             renderItem={renderItemTwo}
//             keyExtractor={item => Math.random().toString(36).substring(2)}
//           />

//           <View className="flex-1 justify-between">
//             <Snackbar
//               className="bg-[#cbc9c9]"
//               visible={snackbarVisible}
//               onDismiss={() => setSnackbarVisible(false)}
//               duration={1000} // 1 seconds
//               action={{
//                 label: 'go back',
//                 textColor: 'black',
//                 onPress: () => {
//                   setSnackbarVisible(false);
//                   handleBackPress(); // Call handleBackPress again to navigate back
//                 },
//               }}>
//               <Text className="text-black">Press again to go back</Text>
//             </Snackbar>
//           </View>
//         </View>
//       ) : (
//         <View
//           style={{
//             position: 'absolute',
//             top: 50,
//             left: 50,
//             right: 50,
//             bottom: 50,
//             justifyContent: 'center',
//             height: '100%',
//             alignItems: 'center',
//           }}>
//           <ActivityIndicator
//             animating={true}
//             size="large"
//             color={MD2Colors.red800}
//           />
//         </View>
//       )}
//     </>
//   );
// };

// export default MapsComponent;

import React, {useCallback, useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  BackHandler,
  FlatList,
} from 'react-native';
import {
  ActivityIndicator,
  Button,
  MD2Colors,
  Snackbar,
} from 'react-native-paper';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {TrashIcon} from 'react-native-heroicons/outline';
import {useDispatch} from 'react-redux';
import {AppDispatch, persistor} from '../../store/store';
import {setFirstCoordinate} from '../../store/coordinateSlice';
import {useToast} from 'react-native-toast-notifications';
import {
  ParamListBase,
  useFocusEffect,
  useNavigation,
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {deleteTrackData, getTrackDetail, postTrack} from '../../APIS/API/api';
import NavigationStrings from '../../Constant/NavigationStrings';
import {requestLoacationPermission} from '../../APIS/AppApi/api';

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

type roadStackParamList = {
  roadId: {id?: string};
};

type endPointStackParamList = {
  endPointId: {endPoint?: string; uniqueId?: number};
};

type BridgePointStackParamList = {
  uniqueBridgeId: {bridgeId?: number; bridgeStringId?: string};
};

type RoadBibaranParamList = {
  roadDetail: {
    stringID: string;
    roadbibaranid: number;
    Roadlatitude: number;
    Roadlongitude: number;
  };
};

const MapsComponent = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'uniqueKey'>>();

  //bridge route id
  const bridgeRoutes =
    useRoute<RouteProp<BridgePointStackParamList, 'uniqueBridgeId'>>();
  const {bridgeId, bridgeStringId} = bridgeRoutes.params;

  //road routes id
  const Roadroute = useRoute<RouteProp<roadStackParamList, 'roadId'>>();
  const {id} = Roadroute.params;

  //road endpoints id
  const endPointRoute =
    useRoute<RouteProp<endPointStackParamList, 'endPointId'>>();
  const {endPoint, uniqueId} = endPointRoute.params;
  console.log('unique id', uniqueId);

  //house route id
  const houseRoute =
    useRoute<RouteProp<houseStackParamList, 'coordinatesKey'>>();
  const {ids, latitude, longitude} = houseRoute.params;

  console.log('house', latitude, longitude);

  const newLat = latitude ? parseFloat(latitude.toString()) : 0;
  const newLong = longitude ? parseFloat(longitude.toString()) : 0;

  //road detail id
  const roadDetail = useRoute<RouteProp<RoadBibaranParamList, 'roadDetail'>>();
  const {stringID, roadbibaranid} = roadDetail.params;

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
  const [trackData, setTrackData] = useState([]);
  const queryClient = useQueryClient();

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

  const getTrack = useQuery(
    ['trackDet', roadbibaranid],
    async () => getTrackDetail(roadbibaranid),
    {
      onSettled: data => setTrackData(data?.track),
    },
  );

  const initialRegion = {
    latitude: coordinates ? coordinates?.coords?.latitude : 0,
    longitude: coordinates ? coordinates?.coords?.longitude : 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  const deleteMutation = useMutation<any, any, any>({
    mutationFn: deleteTrackData,
    onSuccess: data => {
      if (data?.success === true) {
        queryClient.invalidateQueries(['trackDet', roadbibaranid]);
        toast.show(data?.message, {type: 'success', placement: 'bottom'});
      } else {
        toast.show(data?.error || 'Error occurred', {
          type: 'danger',
          placement: 'bottom',
        });
      }
    },
  });

  const mutation = useMutation<any, any, any>({
    mutationFn: postTrack,
    onSuccess: data => {
      if (data?.success === true) {
        queryClient.invalidateQueries(['trackDet', roadbibaranid]);
        toast.show(data?.message, {type: 'success', placement: 'bottom'});
      } else {
        toast.show(data?.error || 'Error occurred', {
          type: 'danger',
          placement: 'bottom',
        });
      }
    },
  });

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

    if (id === 'road') {
      navigation.navigate(NavigationStrings.ROADBIBARAN);
    }

    if (endPoint === 'endPoint') {
      navigation.navigate(NavigationStrings.ENDPOINT, {id: uniqueId});
    }

    if (bridgeStringId === 'bridge') {
      navigation.navigate(NavigationStrings.BRIDGE, {id: bridgeId});
    }

    if (stringID === 'roadUpdate') {
      const trackCoordinates = {
        latitude: newCoordinates
          ? newCoordinates?.latitude
          : coordinates?.coords?.latitude,
        longitude: newCoordinates
          ? newCoordinates?.longitude
          : coordinates?.coords?.longitude,
        type: 'track',
        roadId: roadbibaranid,
      };
      mutation.mutate(trackCoordinates, {
        onSuccess: () => {
          dispatch(
            setFirstCoordinate({
              lattitude: 0,
              longitude: 0,
              coordinateType: 'one',
            }),
          );
        },
      });
    }
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

  const renderItemTwo = useCallback(
    ({item, index}: any) => (
      <View className="mt-3 mx-3 py-4 shadow-lg border p-3 rounded-md">
        <View className="flex-row justify-between p-3">
          <View>
            <View className="flex-row space-x-3 ">
              <Text
                className={`text-stone-900 ${
                  windowWidth > 500 ? 'text-lg' : 'text-base'
                }`}>
                id
              </Text>
              <Text
                className={`text-stone-900 ${
                  windowWidth > 500 ? 'text-lg' : 'text-base'
                }`}>
                {item.id}
              </Text>
            </View>

            <View className="flex-row space-x-3 ">
              <Text
                className={`text-stone-900 ${
                  windowWidth > 500 ? 'text-lg' : 'text-base'
                }`}>
                lat
              </Text>
              <Text
                className={`text-stone-900 ${
                  windowWidth > 500 ? 'text-lg' : 'text-base'
                }`}>
                {item.latitude}
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
                {item.longitude}
              </Text>
            </View>
          </View>
          <TrashIcon
            size={40}
            color="red"
            onPress={() => deleteMutation.mutate(item.id)}
          />
        </View>
      </View>
    ),
    [],
  );

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
            initialRegion={initialRegion}
            loadingEnabled={true}
            onPress={e => {
              setMarker(e.nativeEvent.coordinate);
              setNewCoordinates(e.nativeEvent.coordinate);
              console.log(e.nativeEvent.coordinate);
            }}
            showsCompass>
            {marker != null ? (
              <Marker draggable coordinate={marker} />
            ) : (
              <Marker draggable coordinate={initialRegion} />
            )}
            {trackData.length > 0 && (
              <>
                <Polyline
                  coordinates={trackData?.map((coord: any) => ({
                    latitude: parseFloat(coord.latitude.toString()),
                    longitude: parseFloat(coord.longitude.toString()),
                  }))}
                  strokeColor="#FF0000"
                  strokeWidth={2}
                />

                {trackData.map((track: any) => (
                  <Marker
                    key={Math.random().toString(36).substring(2)}
                    coordinate={{
                      latitude: parseFloat(track?.latitude.toString()),
                      longitude: parseFloat(track?.longitude.toString()),
                    }}
                    title="Track"
                    description="tracking Point"
                  />
                ))}
              </>
            )}
          </MapView>

          <View className="p-3">
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
            {trackData.length === 0 && (
              <View className="mt-3 shadow-lg border p-3 rounded-md">
                <View className="flex-row justify-between">
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
              </View>
            )}
          </View>

          <FlatList
            removeClippedSubviews={true}
            initialNumToRender={6}
            maxToRenderPerBatch={10}
            data={trackData}
            renderItem={renderItemTwo}
            keyExtractor={item => Math.random().toString(36).substring(2)}
          />

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
