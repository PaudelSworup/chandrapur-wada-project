import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import GharbibaranAddComponent from '../../components/Gharbibaran/GharbibaranAddComponent';
import {
  homeInitialvalues,
  homeValidationSchema,
} from '../../utils/Validation/Validation';

const GharbibaranAdd = () => {
  return (
    <SafeAreaView>
      <ScrollView className="bg-white h-full">
        <View className="justify-center mx-2 pt-2">
          <Formik
            initialValues={homeInitialvalues}
            validationSchema={homeValidationSchema}
            onSubmit={values => {
              console.log(values);
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
