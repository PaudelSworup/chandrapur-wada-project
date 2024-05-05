import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const WadaPratinidhiComponent = () => {
  return (
    <SafeAreaView className="bg-[#f1eded] h-full">
      <ScrollView>
        <View className="mx-2">
          <View>
            <Text className="text-2xl text-black">वडा जनप्रतिनिधिहरु</Text>
          </View>

          <View className="justify-center items-center mt-5 mb-4">
            <View className=" rounded-lg " style={{elevation: 4}}>
              <Image
                source={require('../../user.jpg')}
                className="h-40 w-40 rounded-lg"
              />
            </View>

            <View>
              <Text className="text-lg text-black">रवि देवकोटा</Text>
              <Text className="text-lg text-black">वडा अध्यक्ष</Text>
            </View>
          </View>

          <View className="flex-row p-3 gap-8 flex-wrap">
            <View>
              <View className=" rounded-lg " style={{elevation: 4}}>
                <Image
                  source={{
                    uri: 'https://www.shutterstock.com/image-vector/blond-man-avatar-portrait-young-600nw-2074606570.jpg',
                  }}
                  className="h-40 w-40 rounded-lg"
                />
              </View>
              <Text className="text-center text-lg text-black">
                सुरेश गुरुङ
              </Text>
              <Text className="text-center text-lg text-black">सदस्य </Text>
            </View>

            <View>
              <View className=" rounded-lg " style={{elevation: 4}}>
                <Image
                  source={{
                    uri: 'https://www.shutterstock.com/image-vector/blond-man-avatar-portrait-young-600nw-2074606570.jpg',
                  }}
                  className="h-40 w-40 rounded-lg"
                />
              </View>
              <Text className="text-center text-lg text-black">
                मनिषा राजपूत
              </Text>
              <Text className="text-center text-lg text-black">सदस्य </Text>
            </View>

            <View>
              <View className=" rounded-lg " style={{elevation: 4}}>
                <Image
                  source={{
                    uri: 'https://www.shutterstock.com/image-vector/blond-man-avatar-portrait-young-600nw-2074606570.jpg',
                  }}
                  className="h-40 w-40 rounded-lg"
                />
              </View>
              <Text className="text-center text-lg text-black">
                आरती प्रधान
              </Text>
              <Text className="text-center text-lg text-black">सदस्य </Text>
            </View>

            <View>
              <View className=" rounded-lg " style={{elevation: 4}}>
                <Image
                  source={{
                    uri: 'https://www.shutterstock.com/image-vector/blond-man-avatar-portrait-young-600nw-2074606570.jpg',
                  }}
                  className="h-40 w-40 rounded-lg"
                />
              </View>
              <Text className="text-center text-lg text-black">
                रमेश श्रेष्ठ
              </Text>
              <Text className="text-center text-lg text-black">सदस्य </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WadaPratinidhiComponent;
