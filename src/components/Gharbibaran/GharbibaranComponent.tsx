import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';

const GharbibaranComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View>
          <View className="flex-row m-5 justify-between">
            <Text className="text-black text-2xl">घरको विवरण</Text>
            <Button
              className="bg-[#4dace0] px-4"
              onPress={() =>
                navigation.navigate(NavigationStrings.GHARSAMMANDHIBIBARAN)
              }>
              <Text className="text-[#fff]">Thap</Text>
            </Button>
          </View>

          <View className="mx-5 rounded-md" style={{elevation: 1}}>
            <View className="p-5 flex-row justify-between">
              <Text className="text-black text-xl">घरको विवरण</Text>
              <Text className="text-black text-base underline">View Map</Text>
            </View>
            <View className="flex-row flex-wrap gap-4 p-5">
              <View className="flex-row items-center space-x-1">
                <Text className="text-black text-sm">घरको प्रकार:</Text>
                <Text className="text-black text-sm ">House type 1</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Text className="text-black text-sm">घरको बर्ग:</Text>
                <Text className="text-black text-sm ">House Category</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Text className="text-black text-sm">तल्ला</Text>
                <Text className="text-black text-sm ">2</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text className="text-black text-sm">वडा</Text>
                <Text className="text-black text-sm ">ward1</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text className="text-black text-sm">टोल</Text>
                <Text className="text-black text-sm ">tole1</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GharbibaranComponent;
