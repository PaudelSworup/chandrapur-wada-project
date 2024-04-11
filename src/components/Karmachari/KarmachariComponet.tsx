import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';

const KarmachariComponet = () => {
  return (
    <SafeAreaView className="bg-[#f1eded] h-full">
      <ScrollView>
        <View className="mx-3 p-3">
          <Text className="text-lg text-black">कर्मचरिहरु </Text>
          <View className="justify-center items-center mt-5">
            <View className=" rounded-lg " style={{elevation: 4}}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5skA6oe5wuXn8GFzXNFaQtl_SEewwqRFPv9sD5u7y3A&s',
                }}
                className="h-40 w-40 rounded-lg"
              />
            </View>

            <View>
              <Text className="text-lg text-black">राम कार्की </Text>
              <Text className="text-lg text-black">वडा सचिव</Text>
            </View>

            <View className="flex-row gap-8 flex-wrap">
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
                <Text className="text-center text-lg text-black">
                  कर्मचारी{' '}
                </Text>
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
                <Text className="text-center text-lg text-black">
                  कर्मचारी{' '}
                </Text>
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
                <Text className="text-center text-lg text-black">
                  कर्मचारी{' '}
                </Text>
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
                <Text className="text-center text-lg text-black">
                  कर्मचारी{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KarmachariComponet;
