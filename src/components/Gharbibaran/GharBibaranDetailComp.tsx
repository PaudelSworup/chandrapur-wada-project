import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {ActivityIndicator, Divider} from 'react-native-paper';
import {useQuery} from 'react-query';
import {RouteProp, useRoute} from '@react-navigation/native';
import {IMAGE_URL, houseDetail} from '../../APIS/API/api';

type RootStackParamList = {
  detailKey: {id?: string};
};

const GharBibaranDetailComp = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'detailKey'>>();
  const {id} = route.params;
  const ID = parseInt(id as string);
  const {data, isLoading, isError} = useQuery(
    ['detail', id],
    async () => houseDetail(ID),
    {
      onSettled: data => {
        // console.log(data);
        console.log(data);
      },
    },
  );

  if (isLoading) {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" animating={true} color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView className="h-full bg-slate-200">
        <View className="bg-[#fffdfd] h-screen  mt-40 px-5 py-2  rounded-tl-[45px] rounded-tr-[45px]">
          <View
            className="mt-[-80px] h-40 rounded-lg"
            style={{
              elevation: 5,
              backgroundColor: 'white',
            }}>
            {data && data?.houses?.houseProfile?.image ? (
              <Image
                source={{
                  uri: `${IMAGE_URL}/${data.houses.houseProfile.image}`,
                }}
                className="h-full w-full object-contain rounded-lg"
              />
            ) : (
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99t_8bQSCEimMqBrecbl4pHDAy0xGECIITQ',
                }}
                className="h-full w-full object-cover rounded-lg"
              />
            )}
          </View>
          <Text className="text-lg text-black">घरको विवरण</Text>

          <View style={styles.row}>
            <Text style={styles.text}>घर धनीको नाम</Text>
            <Text style={styles.text}>{data?.houses.ownerNameNp}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>नागरिकता नम्बर</Text>
            <Text style={styles.text}>{data?.houses.citizenshipNo}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>लिंग</Text>
            <Text style={styles.text}>{data?.houses.houseOwnerGender}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>अगाडि लाम्बाई</Text>
            <Text style={styles.text}>
              {parseFloat(data?.houses.frontLength)}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>पछाडि चौडाई</Text>
            <Text style={styles.text}>
              {parseFloat(data?.houses.backWidth)}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>घरको प्रकार</Text>
            <Text style={styles.text}>{data?.houses?.HouseType?.name}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>घरको श्रेणी</Text>
            <Text style={styles.text}>{data?.houses?.HouseCategory?.name}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>स्थान</Text>
            <Text style={styles.text}>
              {data?.houses?.MunTole?.name}, वडा नं{' '}
              {data?.houses?.MunTole?.munWardId}
            </Text>
          </View>
          <Divider style={styles.divider} />

          {data?.houses.remarks != '' && (
            <>
              <View
                className="flex-row justify-between flex-wrap space-x-1"
                style={{
                  elevation: 5,
                  padding: 15,
                  backgroundColor: 'white',
                  marginTop: 10,
                }}>
                <Text style={styles.text}>टिप्पणी:</Text>
                <Text className="text-base text-black">
                  {data?.houses.remarks}
                </Text>
              </View>
              <Divider style={styles.divider} />
            </>
          )}

          {/* <Text className="text-black text-xl text-justify">
            चन्द्रपुर नगरपालिकामा विविधता र गतिशीलताको मध्यबिन्दुमा अवस्थित वडा
            मध्य आफ्नै विशिष्ट पहिचान र आकर्षण बोकेको वडा हो वडा नं ३ । साथै यस
            वडा चन्द्रपुरको समृद्ध सांस्कृतिक विरासत, समुदायको सक्रिय जीवन, र
            भविष्यको विकास सम्भावनाको रूप हो। यो भाग चन्द्रपुर भित्र मात्र
            भौगोलिक क्षेत्र मात्र नभई परम्परा र आधुनिकताको सहज सम्मिश्रण पनि हो।
          </Text>
          <Text className="text-black text-xl text-justify">
            वडा नं. ३ को आफ्नो आवासीय क्षेत्र, बजार, शैक्षिक संस्थान, स्रोत साधन
            र हरियाली क्षेत्रको यथास्थिति यहाँहरु समक्ष प्रस्तुत गरिएको छ । यहाँ
            वडाको व्यापक जनसांख्यिकीय, सांस्कृतिक, स्रोत साधन र अन्य विविधताको
            एक सूक्ष्म अवलोकन प्रदान गरिएको छ ।
          </Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GharBibaranDetailComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1eded',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 5,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 40,
  },
  button: {
    backgroundColor: '#333',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    borderRadius: 5,
  },
});
