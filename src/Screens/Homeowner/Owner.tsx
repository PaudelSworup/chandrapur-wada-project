import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {Button} from 'react-native-paper';
import OwnerComponent from '../../components/Homeowner/OwnerComponent';

const Owner = () => {
  return (
    <SafeAreaView className="bg-[#f1eded] h-full">
      <ScrollView>
        <View className="justify-center mx-2 pt-2">
          <OwnerComponent />
          {/* <Bridge
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

export default Owner;
