import {View, Text, SafeAreaView, FlatList, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import {ActivityIndicator, Button} from 'react-native-paper';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';
import {getHouseData, uplaodImage} from '../../APIS/API/api';
import {useQuery, useQueryClient} from 'react-query';
import {TouchableOpacity} from 'react-native';
import {pickImage} from '../../utils/docPicker';
import {useToast} from 'react-native-toast-notifications';

const GharbibaranComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [houseData, setHouseData] = useState<any>();
  const [doc, setDoc] = useState<any>();
  const [uploading, setUploading] = useState<boolean>(false);
  const toast = useToast();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const queryClient = useQueryClient();

  const getFamily = useQuery(['allHouse', 1], async () => getHouseData(1), {
    onSettled: data => {
      // console.log(data);
      setHouseData(data?.houses?.rows);
    },
  });

  const fetchMoreHouseData = async () => {
    if (loading) return;
    setLoading(true);
    const nextPage = currentPage + 1;
    try {
      let users = await getHouseData(nextPage);
      const updatedData = [...houseData, ...users.houses.rows];
      console.log(updatedData);
      setHouseData(updatedData); // Concatenate the new data with the existing data
      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Error fetching more house data:', error);
    } finally {
      setLoading(false);
    }
  };
  // console.log(getFamily.isLoading);

  const uploadHouseImage = (id: any) => {
    console.log(id);
    pickImage().then((document: any) => {
      // console.log('here', document[0].name);
      if (document === null) return;

      setDoc(document[0].name);
      setUploading(true);

      const formData = new FormData();
      formData.append('image', {
        uri: document[0].uri,
        // Platform.OS === 'android'
        //   ? document[0].uri
        //   : document[0].uri.replace('file://', ''),
        name: document[0].name,
        // fileName: document[0].name,
        type: document[0].type,
      });

      uplaodImage(formData, id).then((res: any) => {
        console.log(res);
        setUploading(false);
        if (res?.success === true) {
          console.log('yes');
          toast.show('Document uploaded', {
            type: 'success',
            placement: 'bottom',
          });
          setDoc(null);
        } else {
          toast.show(`uploading failed`, {
            type: 'danger',
            placement: 'bottom',
          });
          setDoc(null);
        }
      });
    });
  };

  const renderItem = useCallback(
    ({item}: any) => (
      <View
        className="mx-5 rounded-md"
        style={{elevation: 1, marginTop: 10, padding: 10}}>
        <View className="p-5 flex-row justify-between">
          <Text className="text-black text-xl">घरको विवरण</Text>

          <TouchableOpacity onPress={() => uploadHouseImage(item.id)}>
            <Text className="text-black text-base underline">upload</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationStrings.MAPS, {
                ids: 'housebibaran',
                latitude: item.latitude,
                longitude: item.longitude,
              })
            }>
            <Text className="text-black text-base underline">View Map</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row flex-wrap gap-4 p-5">
          <View className="flex-row items-center space-x-1">
            <Text className="text-black text-sm">घर न:</Text>
            <Text className="text-black text-sm ">{item?.id}</Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Text className="text-black text-sm">घर धनिको नाम:</Text>
            <Text className="text-black text-sm ">{item?.ownerNameNp}</Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Text className="text-black text-sm">घरको प्रकार:</Text>
            <Text className="text-black text-sm ">{item?.HouseType.name}</Text>
          </View>
          {/* <View className="flex-row items-center space-x-1">
            <Text className="text-black text-sm">घरको बर्ग:</Text>
            <Text className="text-black text-sm ">
              {item.HouseCategory.name}
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Text className="text-black text-sm">तल्ला:</Text>
            <Text className="text-black text-sm ">{item.floor}</Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Text className="text-black text-sm">वडा:</Text>
            <Text className="text-black text-sm ">{item?.MunWard.name}</Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Text className="text-black text-sm">टोल:</Text>
            <Text className="text-black text-sm ">{item?.MunTole.name}</Text>
          </View> */}
        </View>
      </View>
    ),
    [],
  );

  if (getFamily.isLoading) {
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
      {uploading && (
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
      )}
      {/* <ScrollView> */}

      <View
        className={`flex-row m-5 justify-between`}
        pointerEvents={uploading ? 'none' : 'auto'}>
        <Text className="text-black text-2xl">घरको विवरण</Text>
        <Button
          className="bg-[#4dace0] px-4"
          onPress={() =>
            navigation.navigate(NavigationStrings.GHARSAMMANDHIBIBARAN)
          }>
          <Text className="text-[#fff]">थप</Text>
        </Button>
      </View>

      <FlatList
        removeClippedSubviews={true}
        // maxToRenderPerBatch={4}
        // initialNumToRender={4}
        data={houseData}
        renderItem={renderItem}
        onEndReached={fetchMoreHouseData}
        onEndReachedThreshold={0.3}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator className="mt-3" size="large" color="blue" />
          ) : null
        }
        keyExtractor={item => Math.random().toString(36).substring(2)}
      />

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default GharbibaranComponent;
