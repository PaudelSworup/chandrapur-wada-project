import {View, Text, SafeAreaView, RefreshControl} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {Button, Divider} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';
import {useQuery, useQueryClient} from 'react-query';
import {getAllFamilyData} from '../../APIS/API/api';
import {FlatList} from 'react-native-gesture-handler';

const ParibarbibaranComponent = () => {
  const queryClient = useQueryClient();
  const [familyData, setFamilyData] = useState<any>();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const getFamily = useQuery(['allFamily'], async () => getAllFamilyData(), {
    onSettled: data => setFamilyData(data?.data),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['allFamily']}),
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const MemoizedText = React.memo(({children}: any) => (
    <Text style={styles.text}>{children}</Text>
  ));

  const ListItem = React.memo(({item, index}: any) => (
    <View
      key={index}
      className="mx-5 rounded-md"
      style={{elevation: 1, marginTop: 10, padding: 10}}>
      <View className="flex-row justify-between mx-6">
        <Text className="text-black text-lg font-bold">
          <MemoizedText>{item.FamilyOwner.ownerNameNp}</MemoizedText>
          {/* {item.FamilyOwner.ownerNameNp} */}
        </Text>
        <Text className="text-black text-sm underline font-bold">View</Text>
      </View>
      <View className="flex-row flex-wrap  gap-8 p-5">
        <View className="flex-row items-center space-x-1">
          <Text className="text-black text-sm">क्र.स.</Text>
          <Text className="text-black text-sm ">
            <MemoizedText>{item.id}</MemoizedText>
            {/* {item.id} */}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <Text className="text-black text-sm">घर नं:</Text>
          <Text className="text-black ">
            <MemoizedText>{item.House.id}</MemoizedText>
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <Text className="text-black text-sm">फोन नं :</Text>
          <Text className="text-black text-sm">
            <MemoizedText>{item.FamilyOwner.phone}</MemoizedText>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Text className="text-black text-sm">परिवार संख्या:</Text>
          <Text className="text-black text-sm ">
            <MemoizedText> {item.FamilyPopulation.memberNo}</MemoizedText>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Text className="text-black text-sm">purus:</Text>
          <Text className="text-black text-sm ">
            <MemoizedText>{item.FamilyPopulation.maleNo}</MemoizedText>
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <Text className="text-black text-sm">mahila:</Text>
          <Text className="text-black text-sm ">
            <MemoizedText> {item.FamilyPopulation.femaleNo}</MemoizedText>
          </Text>
        </View>

        {item.FamilyPopulation.othersNo !== 0 && (
          <View className="flex-row items-center space-x-1">
            <Text className="text-black text-sm">aanya</Text>
            <Text className="text-black text-sm ">
              <MemoizedText>{item.FamilyPopulation.othersNo}</MemoizedText>
            </Text>
          </View>
        )}
      </View>
    </View>
  ));

  // const renderItem = useCallback(
  //   ({item, index}: any) => (
  //     <View
  //       key={index}
  //       className="mx-5 rounded-md"
  //       style={{elevation: 1, marginTop: 10, padding: 10}}>
  //       <View className="flex-row flex-wrap  gap-8 p-5">
  //         <View className="flex-row items-center space-x-1">
  //           <Text className="text-black text-sm">परिवरमुलीको नाम :</Text>
  //           <Text className="text-black text-sm ">
  //             {item.FamilyOwner.ownerNameNp}
  //           </Text>
  //         </View>

  //         <View className="flex-row items-center space-x-1">
  //           <Text className="text-black text-sm">कृषि:</Text>
  //           <Text className="text-black text-sm ">{item.agricultureType}</Text>
  //         </View>
  //         <View className="flex-row items-center space-x-1">
  //           <Text className="text-black text-sm">फोहोर व्यवस्थापन:</Text>
  //           <Text className="text-black text-sm ">{item.wasteManagement}</Text>
  //         </View>
  //         <View className="flex-row items-center space-x-1">
  //           <Text className="text-black text-sm">स्वास्थ्य:</Text>
  //           <Text className="text-black text-sm ">
  //             {item.FamilyService.health}
  //           </Text>
  //         </View>

  //         <View className="flex-row items-center space-x-1">
  //           <Text className="text-black text-sm">शिक्षा:</Text>
  //           <Text className="text-black text-sm ">
  //             {item.FamilyService.education}
  //           </Text>
  //         </View>

  //         <View className="flex-row items-center space-x-1">
  //           <Text className="text-black text-sm">व्यक्तिगत गाडी:</Text>
  //           <Text className="text-black text-sm ">
  //             {item.FamilyService.privateVehicle}
  //           </Text>
  //         </View>

  //         <View className="flex-row items-center space-x-1">
  //           <Text className="text-black text-sm">खाना पकाउने इन्धन:</Text>
  //           <Text className="text-black text-sm ">
  //             {item.FamilyService.cookingSource}
  //           </Text>
  //         </View>
  //       </View>
  //     </View>
  //   ),
  //   [familyData],
  // );

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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        removeClippedSubviews={true}
        // maxToRenderPerBatch={4}
        initialNumToRender={4}
        data={familyData}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />

      {/* </ScrollView> */}
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

export default ParibarbibaranComponent;
