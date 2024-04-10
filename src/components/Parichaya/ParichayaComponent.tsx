import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const ParichayaComponent = () => {
  return (
    <SafeAreaView className="bg-[#f1eded] h-full">
      <ScrollView>
        <View className="p-3 mx-2">
          <Text className="text-lg text-black">परिचय</Text>
          <View className="mt-5">
            <Image
              resizeMode="contain"
              source={require('../../parichaya.jpg')}
              className="w-full h-80 rounded-md"
            />
            <View className="mt-5">
              <Text className="text-black text-xl text-justify">
                चन्द्रपुर नगरपालिकामा विविधता र गतिशीलताको मध्यबिन्दुमा अवस्थित
                वडा मध्य आफ्नै विशिष्ट पहिचान र आकर्षण बोकेको वडा हो वडा नं ३ ।
                साथै यस वडा चन्द्रपुरको समृद्ध सांस्कृतिक विरासत, समुदायको
                सक्रिय जीवन, र भविष्यको विकास सम्भावनाको रूप हो। यो भाग
                चन्द्रपुर भित्र मात्र भौगोलिक क्षेत्र मात्र नभई परम्परा र
                आधुनिकताको सहज सम्मिश्रण पनि हो।
              </Text>
              <Text className="text-black text-xl text-justify">
                वडा नं. ३ को आफ्नो आवासीय क्षेत्र, बजार, शैक्षिक संस्थान, स्रोत
                साधन र हरियाली क्षेत्रको यथास्थिति यहाँहरु समक्ष प्रस्तुत गरिएको
                छ । यहाँ वडाको व्यापक जनसांख्यिकीय, सांस्कृतिक, स्रोत साधन र
                अन्य विविधताको एक सूक्ष्म अवलोकन प्रदान गरिएको छ ।
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParichayaComponent;

{
  /* <Animated.Image
            // source={{
            //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5skA6oe5wuXn8GFzXNFaQtl_SEewwqRFPv9sD5u7y3A&s',
            // }}
            source={require('../../user.jpg')}
            style={[
              styles.profileImage,
              {opacity: fadeAnim, transform: [{translateY: translateY}]},
            ]}
          /> */
}
