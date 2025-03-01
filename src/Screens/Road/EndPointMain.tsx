import {View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

import {useAppSelector} from '../../store/store';
import {
  endPointValue,
  endPointValuesSchema,
} from '../../utils/Validation/Validation';
import {updateRoadData} from '../../APIS/API/api';
import {useToast} from 'react-native-toast-notifications';
import EndPoint from '../../components/Road/EndPoint';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setFirstCoordinate} from '../../store/coordinateSlice';

const EndPointMain = () => {
  const toast = useToast();

  const dispatch = useDispatch();

  const {longitude, lattitude} = useAppSelector(state => state.coordinates);

  type paramId = {
    roadId: {
      id?: number;
    };
  };

  const route = useRoute<RouteProp<paramId, 'roadId'>>();
  const {id} = route.params;

  return (
    // <ScrollView>
    <View className="justify-center h-full bg-white mx-2 pt-2">
      <Formik
        initialValues={{
          ...endPointValue,
          endLongitude: longitude.toString(),
          endLatitude: lattitude.toString(),
        }}
        validationSchema={endPointValuesSchema}
        onSubmit={(values, {resetForm}) => {
          // console.log(values);
          const roadData = {
            endLandmark: values.endLandmark,
            latitude: lattitude.toString(),
            longitude: longitude.toString(),
            endWard: values.endWardDropDown,
            endTole: values.endToleDropDown,
            type: 'end',
          };

          updateRoadData(roadData, id as number).then(data => {
            if (data?.success === true) {
              toast.show(data?.message, {type: 'success', placement: 'bottom'});
              dispatch(
                setFirstCoordinate({
                  lattitude: 0,
                  longitude: 0,
                  coordinateType: 'one',
                }),
              );
              resetForm();
            } else {
              toast.show(data?.error || 'Error occurred', {
                type: 'danger',
                placement: 'bottom',
              });
            }
          });
        }}>
        {({values, errors, handleChange, handleSubmit}) => (
          <EndPoint
            values={values}
            errors={errors}
            handleChange={handleChange}
            longitude={longitude.toString()}
            latitude={lattitude.toString()}
            handleSubmit={handleSubmit}
          />
        )}
      </Formik>
    </View>
    // </ScrollView>
  );
};

export default EndPointMain;
