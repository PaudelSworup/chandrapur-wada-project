import {
  View,
  Text,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {ActivityIndicator, Button, Divider} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';
import {useQuery} from 'react-query';
import {getAllFamilyData} from '../../APIS/API/api';
import {FlatList} from 'react-native-gesture-handler';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';

const ParibarbibaranComponent = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [familyData, setFamilyData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const {data, isLoading} = useQuery(
    ['allFamily', currentPage],
    async () => getAllFamilyData(currentPage),
    {
      onSettled: data => {
        // setTotalCount(data?.data?.count);
        setFamilyData(data?.data?.rows);
      },
    },
  );

  // console.log(familyData?.some((item: any) => item?.FamilyOwner?.id === 1));

  // console.log('new', data?.data.length === totalCount);

  // console.log(totalCount);

  const fetchNextPage = async () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const fetchPrevPage = async () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  // const renderItemTwo = useCallback(
  //   ({item, index}: any) => (
  //     // <TouchableHighlight
  //     //   key={index}
  //     //   onPress={() =>
  //     //     navigation.navigate(NavigationStrings.GHRDETAIL, {id: item.id})
  //     //   }>
  //     <View
  //       className="mx-4 px-3 py-2 mt-4 rounded-2xl bg-white"
  //       style={{elevation: 10}}>
  //       <View className="flex-row justify-between">
  //         <View>
  //           <View className="flex-row  gap-3 items-center">
  //             <Image
  //               source={{
  //                 uri: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
  //               }}
  //               alt=""
  //               className="w-14 h-14 rounded-full"
  //             />

  //             <View>
  //               <Text className="text-xl text-black font-bold">
  //                 पारिवारिक विवरण
  //                 {/* {item.nameEng} */}
  //               </Text>
  //               <Text className="text-lg text-black font-light">
  //                 {item.FamilyOwner.ownerNameNp}
  //                 {/* {item?.nameNep} */}
  //               </Text>
  //             </View>
  //           </View>

  //           <View className="flex-row mt-4 space-x-2">
  //             <View>
  //               <Text className="text-lg text-black font-semibold">
  //                 {item?.House.id}
  //               </Text>
  //               <Text className="text-base text-black font-extralight">
  //                 घर नं
  //               </Text>
  //             </View>

  //             <View>
  //               <Text className="text-lg text-black font-semibold">
  //                 {item.FamilyOwner.phone}
  //               </Text>
  //               <Text className="text-base text-black font-extralight">
  //                 फोन नं
  //               </Text>
  //             </View>

  //             <View>
  //               <Text className="text-lg text-black font-semibold">
  //                 {item.FamilyPopulation.memberNo}
  //               </Text>
  //               <Text className="text-base text-black font-extralight">
  //                 परिवार संख्या
  //               </Text>
  //             </View>
  //           </View>
  //         </View>

  //         <View>
  //           <Menu>
  //             <MenuTrigger>
  //               <Icon name="dots-horizontal" size={30} color="#900" />
  //             </MenuTrigger>
  //             <MenuOptions>
  //               <MenuOption
  //                 // onSelect={() => uploadHouseImage(item.id)}
  //                 text="upload Image"
  //                 customStyles={{
  //                   optionWrapper: {padding: 5},
  //                   optionText: {color: 'black', fontSize: 16},
  //                 }}
  //               />
  //               <MenuOption
  //                 onSelect={() =>
  //                   navigation.navigate(NavigationStrings.NEWMAP, {
  //                     ids: 'housebibaran',
  //                     latitude: item.latitude,
  //                     longitude: item.longitude,
  //                   })
  //                 }
  //                 text="View in Map"
  //                 customStyles={{
  //                   optionWrapper: {padding: 5},
  //                   optionText: {color: 'black', fontSize: 16},
  //                 }}
  //               />

  //               <MenuOption
  //                 onSelect={() =>
  //                   navigation.navigate(NavigationStrings.GHRDETAIL, {
  //                     id: item.id,
  //                   })
  //                 }
  //                 text="View Detail"
  //                 customStyles={{
  //                   optionWrapper: {padding: 5},
  //                   optionText: {color: 'black', fontSize: 16},
  //                 }}
  //               />
  //             </MenuOptions>
  //           </Menu>
  //         </View>
  //       </View>
  //     </View>
  //     // </TouchableHighlight>
  //   ),
  //   [],
  // );

  const ListItem = React.memo(({item, index}: any) => (
    <View
      key={index}
      className="mx-4 px-3 py-2 mt-4 rounded-2xl bg-white"
      style={{elevation: 10}}>
      <View className="flex-row justify-between">
        <View>
          <View className="flex-row  gap-3 items-center">
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
              }}
              alt=""
              className="w-14 h-14 rounded-full"
            />

            <View>
              <Text className="text-xl text-black font-bold">
                पारिवारिक विवरण
                {/* {item.nameEng} */}
              </Text>
              <Text className="text-lg text-black font-light">
                {item.FamilyOwner.ownerNameNp}
                {/* {item?.nameNep} */}
              </Text>
            </View>
          </View>

          <View className="flex-row mt-4 space-x-5 items-center">
            <View className="items-center justify-center">
              <Text className="text-lg text-black font-semibold">
                {item.id}
              </Text>
              <Text className="text-base text-black font-extralight">
                क्र.स.
              </Text>
            </View>

            <View className="items-center justify-center">
              <Text className="text-lg text-black font-semibold">
                {item?.House.id}
              </Text>
              <Text className="text-base text-black font-extralight">
                घर नं
              </Text>
            </View>

            {/* <View className="items-center justify-center">
              <Text className="text-lg text-black font-semibold">
                {item.FamilyOwner.phone}
              </Text>
              <Text className="text-base text-black font-extralight">
                फोन नं
              </Text>
            </View> */}

            <View className="items-center justify-center">
              <Text className="text-lg text-black font-semibold">
                {item.FamilyPopulation.memberNo}
              </Text>
              <Text className="text-base text-black font-extralight">
                परिवार संख्या
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Menu>
            <MenuTrigger>
              <Icon name="dots-horizontal" size={30} color="#900" />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption
                // onSelect={() => uploadHouseImage(item.id)}
                text="upload Image"
                customStyles={{
                  optionWrapper: {padding: 5},
                  optionText: {color: 'black', fontSize: 16},
                }}
              />
              <MenuOption
                onSelect={() =>
                  navigation.navigate(NavigationStrings.NEWMAP, {
                    ids: 'housebibaran',
                    latitude: item.latitude,
                    longitude: item.longitude,
                  })
                }
                text="View in Map"
                customStyles={{
                  optionWrapper: {padding: 5},
                  optionText: {color: 'black', fontSize: 16},
                }}
              />

              <MenuOption
                onSelect={() =>
                  navigation.navigate(NavigationStrings.GHRDETAIL, {
                    id: item.id,
                  })
                }
                text="View Detail"
                customStyles={{
                  optionWrapper: {padding: 5},
                  optionText: {color: 'black', fontSize: 16},
                }}
              />
            </MenuOptions>
          </Menu>
        </View>
      </View>
    </View>
    // <View
    //   key={index}
    //   className="mx-5 rounded-md mt-4 py-3 bg-white"
    //   style={{elevation: 10, padding: 10}}>
    //   <View className="flex-row justify-between mx-6">
    //     <Text className="text-black text-lg font-bold">
    //       {item.FamilyOwner.ownerNameNp}
    //       {/* {item.FamilyOwner.ownerNameNp} */}
    //     </Text>
    //     <TouchableOpacity
    //       onPress={() =>
    //         navigation.navigate(NavigationStrings.PARIBARDETAIL, {id: item.id})
    //       }>
    //       <Text className="text-black text-sm underline font-bold">View</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View className="flex-row flex-wrap  gap-8 p-5">
    //     <View className="flex-row items-center space-x-1">
    //       <Text className="text-black text-sm">क्र.स.</Text>
    //       <Text className="text-black text-sm ">
    //         {item.id}
    //         {/* {item.id} */}
    //       </Text>
    //     </View>

    //     <View className="flex-row items-center space-x-1">
    //       <Text className="text-black text-sm">घर नं:</Text>
    //       <Text className="text-black ">{item.House.id}</Text>
    //     </View>

    //     <View className="flex-row items-center space-x-1">
    //       <Text className="text-black text-sm">फोन नं :</Text>
    //       <Text className="text-black text-sm">{item.FamilyOwner.phone}</Text>
    //     </View>
    //     <View className="flex-row items-center space-x-1">
    //       <Text className="text-black text-sm">परिवार संख्या:</Text>
    //       <Text className="text-black text-sm ">
    //         {item.FamilyPopulation.memberNo}
    //       </Text>
    //     </View>
    //     <View className="flex-row items-center space-x-1">
    //       <Text className="text-black text-sm">पुरुष:</Text>
    //       <Text className="text-black text-sm ">
    //         {item.FamilyPopulation.maleNo}
    //       </Text>
    //     </View>

    //     <View className="flex-row items-center space-x-1">
    //       <Text className="text-black text-sm">महिला:</Text>
    //       <Text className="text-black text-sm ">
    //         {item.FamilyPopulation.femaleNo}
    //       </Text>
    //     </View>

    //     {item.FamilyPopulation.othersNo !== 0 && (
    //       <View className="flex-row items-center space-x-1">
    //         <Text className="text-black text-sm">अन्य:</Text>
    //         <Text className="text-black text-sm ">
    //           {item.FamilyPopulation.othersNo}
    //         </Text>
    //       </View>
    //     )}
    //   </View>
    // </View>
  ));

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

      <View className="flex-row m-5 justify-between">
        <Text className="text-black text-2xl">परिवारको विवरण</Text>
        <Button
          className="bg-[#4dace0] px-4"
          onPress={() =>
            navigation.navigate(NavigationStrings.PARIBARSAMBANDHIBIBARAN)
          }>
          <Text className="text-[#fff]">थप</Text>
        </Button>
      </View>
      <FlatList
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        initialNumToRender={6}
        data={familyData}
        renderItem={({item}) => <ListItem item={item} />}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator className="mt-3" size="large" color="blue" />
          ) : null
        }
        keyExtractor={item => item.id.toString()}
      />

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
          disabled={familyData?.some(
            (item: any) => item?.FamilyOwner?.id === 1,
          )}>
          <Text className="text-white tracking-widest font-bold">Next</Text>
        </Button>
      </View>
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <Text className="text-lg text-black">पारिवारिक विवरण</Text>

    //   <View style={styles.row}>
    //     <Text style={styles.text}>जम्मा जनसंख्या</Text>
    //     <Text style={styles.text}>20</Text>
    //   </View>
    //   <Divider style={styles.divider} />

    //   <View style={styles.row}>
    //     <Text style={styles.text}>महिला संख्या</Text>
    //     <Text style={styles.text}>2</Text>
    //   </View>
    //   <Divider style={styles.divider} />

    //   <View style={styles.row}>
    //     <Text style={styles.text}>पुरुष संख्या</Text>
    //     <Text style={styles.text}>2</Text>
    //   </View>
    //   <Divider style={styles.divider} />

    //   <View style={styles.row}>
    //     <Text style={styles.text}>बालबालिका संख्या</Text>
    //     <Text style={styles.text}>4</Text>
    //   </View>
    //   <Divider style={styles.divider} />

    //   <View style={styles.row}>
    //     <Text style={styles.text}>स्वास्थ्य संस्था संख्या</Text>
    //     <Text style={styles.text}>5</Text>
    //   </View>
    //   <Divider style={styles.divider} />

    //   <View style={styles.row}>
    //     <Text style={styles.text}>शैक्षिक संस्था संख्या</Text>
    //     <Text style={styles.text}>5</Text>
    //   </View>
    //   <Divider style={styles.divider} />

    //   <View style={styles.row}>
    //     <Text style={styles.text}>उद्योग कल कारखाना संख्या</Text>
    //     <Text style={styles.text}>10</Text>
    //   </View>
    //   <Divider style={styles.divider} />
    // </SafeAreaView>
  );
};

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
    fontSize: 12,
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

export default ParibarbibaranComponent;
