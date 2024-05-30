import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ActivityIndicator, Button} from 'react-native-paper';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';
import {getRoadData} from '../../APIS/API/api';
import {useQuery, useQueryClient} from 'react-query';
import {TouchableOpacity} from 'react-native';
import {useToast} from 'react-native-toast-notifications';

const RoadBibaranComp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [roadData, setRoadData] = useState<any>();
  const toast = useToast();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const queryClient = useQueryClient();

  const {data, isLoading} = useQuery(
    ['roadData', currentPage],
    async () => getRoadData(currentPage),
    {
      onSettled: data => {
        setRoadData(data?.roads?.rows);
        // console.log(data?.startWardData);
        // queryClient.invalidateQueries('roadData');
        // setHouseData(data?);
      },
    },
  );

  // console.log(data?.startWardData);

  //   console.log(houseData);

  const fetchNextPage = async () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const fetchPrevPage = async () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const renderItem = useCallback(
    ({item, index}: any) => (
      <TouchableOpacity
        key={index}
        onPress={() =>
          navigation.navigate(NavigationStrings.ROADDETAIL, {id: item.id})
        }>
        <View
          className="mx-5 rounded-md mt-4 py-3 bg-white"
          style={{elevation: 10}}>
          <View className="p-5 flex-row justify-between">
            <Text className="text-black text-xl">बाटोको विवरण</Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(NavigationStrings.MAPS, {
                  stringID: 'roadUpdate',
                  roadbibaranid: item?.id,
                  Roadlatitude: item.Track.latitude,
                  Roadlongitude: item.Track.longitude,
                })
              }>
              <Text className="text-black text-base underline">Add Track</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(NavigationStrings.ENDPOINT, {id: item.id})
              }>
              <Text className="text-black text-base underline">
                Add End Point
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between flex-wrap gap-4 p-5">
            <View className="flex-row  space-x-1">
              <Text className="text-black text-base">नाम:</Text>
              <Text className="text-black text-base ">{item?.nameNep}</Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <Text className="text-black text-base">सुरु स्थलचिन्ह</Text>
              <Text className="text-black text-base ">
                {item?.startLandmark}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <Text className="text-black text-base">हालको उद्देश्य चौडाइ</Text>
              <Text className="text-black text-base ">
                {item?.currentPurposeWidth}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <Text className="text-black text-base"> सुरुको वडा</Text>
              <Text className="text-black text-base ">
                {data?.startWardData[0].name}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <Text className="text-black text-base"> सुरुको टोल</Text>
              <Text className="text-black text-base ">
                {data?.startToleData[0].name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [],
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
    <SafeAreaView className="h-full bg-[#f1eded]">
      {/* <ScrollView> */}

      <View className={`flex-row m-5 justify-between`}>
        <Text className="text-black text-2xl">बाटोको विवरण</Text>
        <Button
          className="bg-[#4dace0] px-4"
          onPress={() => navigation.navigate(NavigationStrings.ROADBIBARAN)}>
          <Text className="text-[#fff]">थप</Text>
        </Button>
      </View>

      <FlatList
        removeClippedSubviews={true}
        initialNumToRender={6}
        maxToRenderPerBatch={10}
        data={roadData}
        renderItem={renderItem}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator className="mt-3" size="large" color="blue" />
          ) : null
        }
        keyExtractor={item => item?.id.toString()}
      />

      {/* </ScrollView> */}
      <View className="flex-row justify-between p-2">
        <Button
          onPress={fetchPrevPage}
          className="bg-cyan-900 rounded-full"
          disabled={currentPage === 1 ? true : false}>
          <Text className="text-white tracking-widest font-bold">Previous</Text>
        </Button>
        <Button
          className="bg-cyan-900 rounded-full"
          onPress={fetchNextPage}
          disabled={roadData?.some((item: any) => item?.id === 1)}>
          <Text className="text-white tracking-widest font-bold">Next</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default RoadBibaranComp;
