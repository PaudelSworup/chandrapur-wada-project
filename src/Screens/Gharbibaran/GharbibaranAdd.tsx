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

const GharbibaranAdd = () => {
  const toast = useToast();
  return (
    <SafeAreaView>
      <ScrollView className="bg-white h-full">
        <View className="justify-center mx-2 pt-2">
          <Formik
            initialValues={homeInitialvalues}
            validationSchema={homeValidationSchema}
            onSubmit={values => {
              console.log(values);
              const reqData = {
                ownerNameNp: values.houseOwnerNameNeplai,
                citizenshipNo: values.citizenshipNum,
                latitude: values.latitude,
                longitude: values.longitude,
                remarks: values.remarks,
                floor: values.floor,
                frontLength: values.frontLength,
                backWidth: values.backBredth,
                // googlePlusCode: values.
                houseType: values.houseTypeDropDown,
                houseCategory: values.houseCategoryDropDown,
                munWard: values.wardDropDown,
                munTole: values.toleDropDown,
              };
              addHouseData(reqData).then(res => {
                if (res.success === true) {
                  toast.show(res?.message, {
                    type: 'success',
                    placement: 'bottom',
                  });
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
