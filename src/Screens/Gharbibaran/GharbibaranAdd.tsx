import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import GharbibaranAddComponent from '../../components/Gharbibaran/GharbibaranAddComponent';
import {
  homeInitialvalues,
  homeValidationSchema,
} from '../../utils/Validation/Validation';
import {addHouseData} from '../../APIS/API/api';
import {useToast} from 'react-native-toast-notifications';
import {useAppSelector} from '../../store/store';

const GharbibaranAdd = () => {
  const {longitude, lattitude} = useAppSelector(
    (state: any) => state.coordinates,
  );
  console.log(longitude, lattitude);
  const {id} = useAppSelector((state: any) => state.users);
  const toast = useToast();
  return (
    <SafeAreaView>
      <ScrollView className="bg-[#fff] h-full">
        <View className="justify-center mx-2 pt-2">
          <Formik
            // initialValues={homeInitialvalues}
            initialValues={{
              ...homeInitialvalues,
              longitude: longitude.toString(),
              latitude: lattitude.toString(),
            }}
            validationSchema={homeValidationSchema}
            onSubmit={(values, {resetForm}) => {
              console.log(values);
              const reqData = {
                ownerNameNp: values.houseOwnerNameNeplai,
                citizenshipNo: values.citizenshipNum,
                latitude: lattitude.toString(),
                longitude: longitude.toString(),
                remarks: values.remarks,
                floor: values.floor,
                frontLength: values.frontLength,
                backWidth: values.backBredth,
                // googlePlusCode: values.
                houseType: values.houseTypeDropDown,
                houseCategory: values.houseCategoryDropDown,
                munWard: values.wardDropDown,
                munTole: values.toleDropDown,
                houseOwnerGender: values.gender,
                bathroom: values.bathroom,
                water: values.water,
                waterSource: values.waterSource,
                toilet: values.toilet,
                toiletType: values.toiletType,
                electricity: values.electricity,
                internet: values.internet,
                publicVehicle: values.publicVehicle,
                userId: id,
              };
              addHouseData(reqData).then(res => {
                if (res.success === true) {
                  toast.show(res?.message, {
                    type: 'success',
                    placement: 'bottom',
                  });
                  resetForm();
                } else {
                  toast.show(res?.error, {
                    type: 'danger',
                    placement: 'bottom',
                  });
                }
              });
              //do this after successfully submission of the data
            }}>
            {({values, errors, handleChange, handleSubmit}) => (
              <GharbibaranAddComponent
                values={values}
                handleChange={handleChange}
                errors={errors}
                longitude={longitude}
                latitude={lattitude}
                handleSubmit={handleSubmit}
              />
            )}
          </Formik>

          {/* <BridgeComponent
            values={values}
            handleChange={handleChange}
            errors={errors}
            handleSubmit={handleSubmit}
            longitude={longitude}
            latitude={lattitude}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GharbibaranAdd;
