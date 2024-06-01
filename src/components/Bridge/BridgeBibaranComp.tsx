import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Button} from 'react-native-paper';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';
import {getBridgeData} from '../../APIS/API/api';
import {useQuery} from 'react-query';
import {TouchableOpacity} from 'react-native';

const BridgeBibaranComp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [bridgeData, setBridgeData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const bridge = useQuery(
    ['roadData', currentPage],
    async () => getBridgeData(currentPage),
    {
      refetchOnWindowFocus: true,
      onSuccess: data => {
        if (data) {
          setBridgeData(data?.bridge?.rows);
        }
      },
    },
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      bridge.refetch();
    });

    return unsubscribe;
  }, [navigation, bridge.refetch]);

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
      <View
        key={index}
        className="mx-5 rounded-md mt-4 py-3 bg-white"
        style={{elevation: 10}}>
        <View className="p-5 flex-row justify-between flex-wrap">
          <Text className="text-black text-xl">पुलको विवरण</Text>

          {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationStrings.MAPS, {bridgeID: item.id})
            }>
            <Text className="text-black text-base underline">View bridge</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationStrings.BRIDGEDETAIL, {id: item.id})
            }>
            <Text className="text-black text-base underline">View bridge</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between flex-wrap gap-4 p-5">
          <View className="flex-row  space-x-1">
            <Text className="text-black text-base">नाम:</Text>
            <Text className="text-black text-base ">
              {item?.bridgeNameNepali}
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Text className="text-black text-base">केन्द्र देशान्तर</Text>
            <Text className="text-black text-base ">
              {item?.centerLongitude}
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Text className="text-black text-base">केन्द्र अक्षांश</Text>
            <Text className="text-black text-base ">
              {item?.centerLatitude}
            </Text>
          </View>
        </View>
      </View>
    ),
    [],
  );

  if (bridge.isLoading) {
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
        <Text className="text-black text-2xl">पुलको विवरण</Text>
      </View>

      <FlatList
        removeClippedSubviews={true}
        initialNumToRender={6}
        maxToRenderPerBatch={10}
        data={bridgeData}
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
          disabled={bridgeData?.some((item: any) => item?.id === 1)}>
          <Text className="text-white tracking-widest font-bold">Next</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default BridgeBibaranComp;
