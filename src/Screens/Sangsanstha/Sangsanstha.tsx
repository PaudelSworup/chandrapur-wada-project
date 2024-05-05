import React from 'react';
import SangsansthaComponent from '../../components/Sangsanstha/SangsansthaComponent';
import {SafeAreaView, ScrollView, View} from 'react-native';

const Sangsanstha = () => {
  return (
    <SafeAreaView className="bg-[#fff] h-full">
      <ScrollView>
        <View className="justify-center mx-2 pt-2">
          <SangsansthaComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sangsanstha;
