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
import {IMAGE_URL, getRoadDetail, paribarDetail} from '../../APIS/API/api';

type RootStackParamList = {
  detailKey: {id?: string};
};

const RoadDetailComp = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'detailKey'>>();
  const {id} = route.params;
  const ID = parseInt(id as string);
  const {data, isLoading, isError} = useQuery(
    ['detail', id],
    async () => getRoadDetail(ID),
    {
      onSettled: data => {
        // console.log(data);
        // console.log(data);
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
      <ScrollView className="bg-slate-200">
        <View className="bg-[#fffdfd]   mt-40 px-5 py-2  rounded-tl-[45px] rounded-tr-[45px]">
          <View
            className="mt-[-80px] h-40 rounded-lg"
            style={{
              elevation: 5,
              backgroundColor: 'white',
            }}></View>
        </View>

        <ScrollView className="bg-white px-2">
          <Text className="text-lg text-black">बाटोको विवरण</Text>
          <View style={styles.row}>
            <Text style={styles.text}>नाम </Text>
            <Text style={styles.text}>{data?.roads.nameNep}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>सुरु स्थलचिन्ह</Text>
            <Text style={styles.text}>{data?.roads.startLandmark}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>भविष्यको उद्देश्य चौडाइ</Text>
            <Text style={styles.text}>{data?.roads.futurePurposeWidth}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>startWard </Text>
            <Text style={styles.text}>{data?.roads.startWard}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>startTole </Text>
            <Text style={styles.text}>{data?.roads.startTole}</Text>
          </View>
          <Divider style={styles.divider} />

          {data && data?.roads.endLandmark != null && (
            <View className="flex-row items-center space-x-1">
              <Text className="text-black text-base"> अन्त्य स्थलचिन्ह</Text>
              <Text className="text-black text-base ">
                {data?.roads.endLandmark}
              </Text>
            </View>
          )}

          {data && data?.roads.endWard != null && (
            <View className="flex-row items-center space-x-1">
              <Text className="text-black text-base"> अन्त्य वडा</Text>
              <Text className="text-black text-base ">
                {data?.roads.endWard}
              </Text>
            </View>
          )}

          {data && data?.roads.endTole != null && (
            <View className="flex-row items-center space-x-1">
              <Text className="text-black text-base"> अन्त्य टोल</Text>
              <Text className="text-black text-base ">
                {data?.roads.endTole}
              </Text>
            </View>
          )}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RoadDetailComp;

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
