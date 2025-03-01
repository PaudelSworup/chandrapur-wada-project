import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

import {useAppSelector} from '../../store/store';
import RoadInfo from '../../components/Road/RoadComponent';
import {
  roadInitialValues,
  roadValidationSchema,
} from '../../utils/Validation/Validation';
import {addRoadDetail, postTrack} from '../../APIS/API/api';
import {useToast} from 'react-native-toast-notifications';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import {setFirstCoordinate} from '../../store/coordinateSlice';

const Road = () => {
  const toast = useToast();

  const dispatch = useDispatch();

  const {longitude, lattitude} = useAppSelector(state => state.coordinates);

  const mutation = useMutation<any, any, any>({
    mutationFn: addRoadDetail,
    onSuccess: data => {
      if (data?.success === true) {
        toast.show(data?.message, {type: 'success', placement: 'bottom'});
        // postTrack({
        //   latitude: lattitude,
        //   longitude: longitude,
        //   type: 'track',
        //   roadId: data?.optional.id,
        // });
      } else {
        toast.show(data?.error || 'Error occurred', {
          type: 'danger',
          placement: 'bottom',
        });
      }
    },
  });

  return (
    <ScrollView>
      <View className="justify-center mx-2 pt-2">
        <Formik
          initialValues={{
            ...roadInitialValues,
            startLongitude: longitude.toString(),
            startLatitude: lattitude.toString(),
          }}
          validationSchema={roadValidationSchema}
          onSubmit={(values: any, {resetForm}) => {
            console.log(values.startLatitude);

            // console.log(values);
            const roadData = {
              nameNep: values.nameNepali,
              nameEng: values.nameEng,
              startLandmark: values.startLandmark,
              latitude: lattitude.toString(),
              longitude: longitude.toString(),
              currentPurposeWidth: values.currentPurposeWidth,
              futurePurposeWidth: values.FuturePuropseWidth,
              startWard: values.startWardDropDown,
              startTole: values.StartToleDropDown,
              remarks: values.remarks,
              type: 'start',
            };

            // postTrack()

            mutation.mutate(roadData, {
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
            // addRoadDetail(roadData).then(res => {
            //   if (res?.success === true) {
            //     // console.log(res)
            //     toast.show(`${res?.message}`, {
            //       type: 'success',
            //       placement: 'bottom',
            //     });
            //     resetForm();
            //   } else {
            //     toast.show(`${res?.error}`, {
            //       type: 'danger',
            //       placement: 'bottom',
            //     });
            //   }
            // });
          }}>
          {({values, errors, handleChange, handleSubmit}) => (
            <RoadInfo
              values={values}
              handleChange={handleChange}
              errors={errors}
              longitude={longitude.toString()}
              latitude={lattitude.toString()}
              handleSubmit={handleSubmit}
            />
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Road;
