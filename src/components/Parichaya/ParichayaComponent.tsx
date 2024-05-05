import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useAppSelector} from '../../store/store';

const ParichayaComponent = () => {
  const {longitude} = useAppSelector(state => state.coordinates);
  console.log(longitude);
  return (
    <SafeAreaView className="bg-[#f1eded] h-full">
      <ScrollView>
        <View className="mx-2 mt-3">
          <Text className="text-2xl text-black ">परिचय</Text>
        </View>
        <View className="mt-2">
          <View className="w-full">
            <Image
              resizeMode="cover"
              source={require('../../parichaya.jpg')}
              className="w-full h-96 rounded-md"
            />
          </View>
          <View className="bg-[#fffdfd] mt-3 px-5 py-2 rounded-tl-[45px] rounded-tr-[45px]">
            <Text className="text-black text-xl text-justify">
              चन्द्रपुर नगरपालिकामा विविधता र गतिशीलताको मध्यबिन्दुमा अवस्थित
              वडा मध्य आफ्नै विशिष्ट पहिचान र आकर्षण बोकेको वडा हो वडा नं ३ ।
              साथै यस वडा चन्द्रपुरको समृद्ध सांस्कृतिक विरासत, समुदायको सक्रिय
              जीवन, र भविष्यको विकास सम्भावनाको रूप हो। यो भाग चन्द्रपुर भित्र
              मात्र भौगोलिक क्षेत्र मात्र नभई परम्परा र आधुनिकताको सहज सम्मिश्रण
              पनि हो।
            </Text>
            <Text className="text-black text-xl text-justify">
              वडा नं. ३ को आफ्नो आवासीय क्षेत्र, बजार, शैक्षिक संस्थान, स्रोत
              साधन र हरियाली क्षेत्रको यथास्थिति यहाँहरु समक्ष प्रस्तुत गरिएको छ
              । यहाँ वडाको व्यापक जनसांख्यिकीय, सांस्कृतिक, स्रोत साधन र अन्य
              विविधताको एक सूक्ष्म अवलोकन प्रदान गरिएको छ ।
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParichayaComponent;
