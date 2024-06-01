import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

import {persistor, useAppSelector} from '../../store/store';
import BridgeComp from '../../components/Bridge/BridgeComp';
import {
  bridgeInitialValues,
  bridgeValidationSchema,
} from '../../utils/Validation/Validation';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useMutation} from 'react-query';
import {addBridgeData} from '../../APIS/API/api';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch} from 'react-redux';
import {setFirstCoordinate} from '../../store/coordinateSlice';

const Bridge = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const {longitude, lattitude} = useAppSelector(state => state.coordinates);

  type paramId = {
    bridgeId: {
      id?: number;
    };
  };

  const route = useRoute<RouteProp<paramId, 'bridgeId'>>();
  const {id} = route.params;

  //mutation or post function to add bridge data
  const mutation = useMutation<any, any, any>({
    mutationFn: addBridgeData,
    onSuccess: data => {
      if (data?.success === true) {
        toast.show(data?.message, {type: 'success', placement: 'bottom'});
      } else {
        toast.show(data?.error || 'Error occurred', {
          type: 'danger',
          placement: 'bottom',
        });
      }
    },
  });
  return (
    <SafeAreaView>
      <ScrollView className="bg-white h-full">
        <View className="justify-center mx-2 pt-2">
          <Formik
            initialValues={{
              ...bridgeInitialValues,
              centerLongitude: longitude.toString(),
              centerLatitude: lattitude.toString(),
            }}
            validationSchema={bridgeValidationSchema}
            onSubmit={(values, {resetForm}) => {
              const bridgeData = {
                bridgeName: values.bridgeName,
                bridgeNameNepali: values.bridgeNepaliName,
                centerLongitude: longitude.toString(),
                centerLatitude: lattitude.toString(),
                length: values.length,
                width: values.width,
                remarks: values.remarks,
                bridgeStatus: parseInt(values.bridgeStatus),
                bridgeType: parseInt(values.bridgeType),
                roadId: id,
              };

              mutation.mutate(bridgeData, {
                onSuccess: () => {
                  dispatch(
                    setFirstCoordinate({
                      lattitude: 0,
                      longitude: 0,
                      coordinateType: 'one',
                    }),
                  );
                  resetForm();
                },
              });

              persistor.purge();
            }}>
            {({values, errors, handleChange, handleSubmit}) => (
              <View>
                <BridgeComp
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  handleSubmit={handleSubmit}
                  longitude={longitude}
                  latitude={lattitude}
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bridge;
