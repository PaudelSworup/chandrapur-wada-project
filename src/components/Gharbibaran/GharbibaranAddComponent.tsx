import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {dropDownData} from '../../utils/testingData';
import {useQuery} from 'react-query';
import {
  bathroomDropDown,
  cookingSourceDropDown,
  electricityDropDown,
  genderDropDown,
  getHouseCategory,
  getHouseType,
  getMunWard,
  getToleByWard,
  internetDropDown,
  publicVehicleDropDown,
  rentDropDown,
  toiletDropDown,
  toiletTypeDropDown,
  waterDropDown,
  waterTypeDropDown,
} from '../../APIS/API/api';
import {TouchableOpacity} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';

const GharbibaranAddComponent = ({
  values,
  errors,
  handleChange,
  longitude,
  latitude,
  handleSubmit,
}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [ward, setWard] = useState<any>();
  const [wardId, setWardId] = useState<any>();
  const [tole, setTole] = useState<any>();
  const [house, setHouse] = useState<any>();
  const [category, setCategory] = useState<any>();
  const [gender, setGender] = useState<any>();
  const [bathroom, setBathroom] = useState<any>();
  const [water, setWater] = useState<any>();
  const [toilet, setToilet] = useState<any>();
  const [electricity, setElectricity] = useState<any>();
  const [toiletType, setToiletType] = useState<any>();
  const [waterS, setWaterS] = useState<any>();
  const [publicV, setPublicV] = useState<any>();
  const [internet, setInternet] = useState<any>();

  const getWard = useQuery(['ward'], async () => getMunWard(), {
    onSettled: data => setWard(data?.ward),
  });

  const getTole = useQuery(
    ['tole', wardId],
    async () => getToleByWard(wardId),
    {
      onSettled: data => {
        setTole(data?.tolebWard);
      },
    },
  );

  const getHouse = useQuery(['type'], async () => getHouseType(), {
    onSettled: data => setHouse(data?.houses),
  });

  const getHouseCat = useQuery(['cat'], async () => getHouseCategory(), {
    onSettled: data => setCategory(data?.houses),
  });

  const getGender = useQuery(['gender'], async () => genderDropDown(), {
    onSettled: data => setGender(data?.gender),
  });

  // const getRent = useQuery(['rent'], async () => rentDropDown(), {
  //   onSettled: data => setIsRent(data?.rent),
  // });

  const getPv = useQuery(['pv'], async () => publicVehicleDropDown(), {
    onSettled: data => setPublicV(data?.pv),
  });

  const pvData = useMemo(() => {
    return publicV?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [publicV]);

  const wadaData = useMemo(() => {
    return ward?.map((item: any) => ({
      label: item?.name,
      values: item?.id.toString(),
    }));
  }, [ward]);

  const toleData = useMemo(() => {
    return tole?.map((item: any) => ({
      label: item?.name,
      values: item?.id.toString(),
    }));
  }, [tole]);

  const houseData = useMemo(() => {
    return house?.map((item: any) => ({
      label: item.name,
      values: item.id.toString(),
    }));
  }, [house]);

  const houseCategory = useMemo(() => {
    return category?.map((item: any) => ({
      label: item.name,
      values: item.id.toString(),
    }));
  }, [category]);

  const genderCat = useMemo(() => {
    return gender?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [gender]);

  // const rentCat = useMemo(() => {
  //   return isRent?.map((item: any) => ({
  //     label: item.name_nep,
  //     values: item.name_nep,
  //   }));
  // }, [isRent]);

  const getbathroom = useQuery(['bathroom'], async () => bathroomDropDown(), {
    onSettled: data => setBathroom(data?.bathroom),
  });

  const getWater = useQuery(['water'], async () => waterDropDown(), {
    onSettled: data => setWater(data?.water),
  });

  const getWaterSource = useQuery(['ws'], async () => waterTypeDropDown(), {
    onSettled: data => setWaterS(data?.water),
  });

  const getToilet = useQuery(['toilet'], async () => toiletDropDown(), {
    onSettled: data => setToilet(data?.toilet),
  });

  const getElectricity = useQuery(
    ['electricity'],
    async () => electricityDropDown(),
    {
      onSettled: data => setElectricity(data?.electricity),
    },
  );

  const getToiletType = useQuery(['tt'], async () => toiletTypeDropDown(), {
    onSettled: data => setToiletType(data?.toilet),
  });

  const bathroomData = useMemo(() => {
    return bathroom?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [bathroom]);

  const waterData = useMemo(() => {
    return water?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [water]);

  const waterSData = useMemo(() => {
    return waterS?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [waterS]);

  const toiletData = useMemo(() => {
    return toilet?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [toilet]);

  const electricityData = useMemo(() => {
    return electricity?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [electricity]);

  const toiletTypeData = useMemo(() => {
    return toiletType?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [toiletType]);

  const getInternet = useQuery(['internet'], async () => internetDropDown(), {
    onSettled: data => setInternet(data?.internet),
  });

  const internetData = useMemo(() => {
    return internet?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [internet]);

  return (
    <>
      <Text className="text-lg text-black">घर सम्बन्धी विवरण भर्नुहोस </Text>
      <View className="mb-4">
        <TextInput
          mode="outlined"
          label="घर धनिको नाम"
          onChangeText={handleChange('houseOwnerNameNeplai')}
          value={values.houseOwnerNameNeplai}
          className="h-12 px-2 bg-white"
          placeholder="घर धनिको नाम "
        />
        {errors?.houseOwnerNameNeplai && (
          <Text className="text-red-500 ml-1">
            {errors?.houseOwnerNameNeplai}
          </Text>
        )}
      </View>

      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, {borderColor: '#7B66AB', borderWidth: 2}]}
          placeholderStyle={styles.placeholderStyle}
          itemTextStyle={{
            backgroundColor: '#fff',
            color: 'black',
            fontSize: 18,
          }}
          selectedTextStyle={{color: 'black', paddingLeft: 11}}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={genderCat ? genderCat : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="घर धनिको लिङ्ग"
          onChange={(item: any) => {
            handleChange('gender')(item?.values);
          }}
        />
        {errors?.gender && (
          <Text className="text-red-500 ml-1">{errors?.gender}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="घर धनिको नागरिकता नं "
          mode="outlined"
          placeholder="घर धनिको नागरिकता नं "
          onChangeText={handleChange('citizenshipNum')}
          value={values.citizenshipNum}
          className="h-12 px-2 bg-white"
        />
        {errors?.citizenshipNum && (
          <Text className="text-red-500 ml-1">{errors?.citizenshipNum}</Text>
        )}
      </View>

      <View className="mb-4 border p-4">
        <Text className="text-black text-lg">GIS विवरण </Text>
        <View className="mt-4">
          <View className="mb-4">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(NavigationStrings.MAPS, {id: 'house'})
              }>
              <Text className="text-right text-lg  text-black underline">
                Get Coordinates
              </Text>
            </TouchableOpacity>

            <TextInput
              label="Latitude"
              mode="outlined"
              placeholder="latitude"
              onChangeText={handleChange('latitude')}
              value={latitude != 0 ? latitude.toString() : values.latitude}
              className="h-12 px-2 bg-white"
            />
            {errors?.latitude && (
              <Text className="text-red-500 ml-1">{errors?.latitude}</Text>
            )}
          </View>
          <View className="mb-4">
            <TextInput
              label="Longitude"
              mode="outlined"
              placeholder="Longitude"
              onChangeText={handleChange('longitude')}
              value={longitude != 0 ? longitude.toString() : values.longitude}
              className="h-12 px-2 bg-white"
            />
            {errors?.longitude && (
              <Text className="text-red-500 ml-1">{errors?.longitude}</Text>
            )}
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, {borderColor: '#7B66AB', borderWidth: 2}]}
          placeholderStyle={styles.placeholderStyle}
          itemTextStyle={{
            backgroundColor: '#fff',
            color: 'black',
            fontSize: 18,
          }}
          selectedTextStyle={{color: 'black', paddingLeft: 11}}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={houseData ? houseData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="घरको प्रकार "
          onChange={(item: any) => {
            handleChange('houseTypeDropDown')(item?.values);
          }}
        />
        {errors?.houseTypeDropDown && (
          <Text className="text-red-500 ml-1">{errors?.houseTypeDropDown}</Text>
        )}
      </View>

      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, {borderColor: '#7B66AB', borderWidth: 2}]}
          placeholderStyle={styles.placeholderStyle}
          itemTextStyle={{
            backgroundColor: '#fff',
            color: 'black',
            fontSize: 18,
          }}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          selectedTextStyle={{color: 'black', paddingLeft: 11}}
          data={houseCategory ? houseCategory : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="घरको बर्ग"
          onChange={(item: any) => {
            handleChange('houseCategoryDropDown')(item?.values);
          }}
        />
        {errors?.houseCategoryDropDown && (
          <Text className="text-red-500 ml-1">
            {errors?.houseCategoryDropDown}
          </Text>
        )}
      </View>

      {/* <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, {borderColor: '#7B66AB', borderWidth: 2}]}
          placeholderStyle={styles.placeholderStyle}
          itemTextStyle={{
            backgroundColor: '#fff',
            color: 'black',
            fontSize: 18,
          }}
          inputSearchStyle={styles.inputSearchStyle}
           selectedTextStyle={{color: 'black', paddingLeft: 11}}
          iconStyle={styles.iconStyle}
          data={rentCat ? rentCat : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="घर प्रकार"
          onChange={(item: any) => {
            handleChange('isRented')(item?.values);
          }}
        />
        {errors?.isRented && (
          <Text className="text-red-500 ml-1">{errors?.isRented}</Text>
        )}
      </View> */}

      <View className="mb-4">
        <TextInput
          label="निर्माण बर्ष"
          mode="outlined"
          placeholder="निर्माण बर्ष"
          onChangeText={handleChange('buildYear')}
          value={values.buildYear}
          className="h-12 px-2 bg-white"
        />
        {errors?.buildYear && (
          <Text className="text-red-500 ml-1">{errors?.buildYear}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="तल्ला"
          mode="outlined"
          placeholder="तल्ला"
          onChangeText={handleChange('floor')}
          value={values.floor}
          className="h-12 px-2 bg-white"
        />
        {errors?.floor && (
          <Text className="text-red-500 ml-1">{errors?.floor}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="अगाडि (लम्बाई)"
          mode="outlined"
          placeholder="अगाडि (लम्बाई)"
          onChangeText={handleChange('frontLength')}
          value={values.frontLength}
          className="h-12 px-2 bg-white"
        />
        {errors?.frontLength && (
          <Text className="text-red-500 ml-1">{errors?.frontLength}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="पछाडि (चौडाइ)"
          mode="outlined"
          placeholder="पछाडि (चौडाइ)"
          onChangeText={handleChange('backBredth')}
          value={values.backBredth}
          className="h-12 px-2 bg-white"
        />
        {errors?.backBredth && (
          <Text className="text-red-500 ml-1">{errors?.backBredth}</Text>
        )}
      </View>

      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, {borderColor: '#7B66AB', borderWidth: 2}]}
          placeholderStyle={styles.placeholderStyle}
          itemTextStyle={{
            backgroundColor: '#fff',
            color: 'black',
            fontSize: 18,
          }}
          inputSearchStyle={styles.inputSearchStyle}
          selectedTextStyle={{color: 'black', paddingLeft: 11}}
          iconStyle={styles.iconStyle}
          data={wadaData ? wadaData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="वडा "
          onChange={(item: any) => {
            setWardId(item?.values);
            handleChange('wardDropDown')(item?.values);
          }}
        />
        {errors?.wardDropDown && (
          <Text className="text-red-500 ml-1">{errors?.wardDropDown}</Text>
        )}
      </View>

      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, {borderColor: '#7B66AB', borderWidth: 2}]}
          placeholderStyle={styles.placeholderStyle}
          itemTextStyle={{
            backgroundColor: '#fff',
            color: 'black',
            fontSize: 18,
          }}
          inputSearchStyle={styles.inputSearchStyle}
          selectedTextStyle={{color: 'black', paddingLeft: 11}}
          iconStyle={styles.iconStyle}
          data={toleData ? toleData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="टोल"
          onChange={(item: any) => {
            handleChange('toleDropDown')(item?.values);
          }}
        />
        {errors?.toleDropDown && (
          <Text className="text-red-500 ml-1">{errors?.toleDropDown}</Text>
        )}
      </View>

      <View className="mb-4 border p-4 rounded-lg">
        <Text className="text-black text-lg">
          आवास सुबिधाहारु सम्बन्धी विवरण
        </Text>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            itemTextStyle={{
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 18,
            }}
            inputSearchStyle={styles.inputSearchStyle}
            selectedTextStyle={{color: 'black', paddingLeft: 11}}
            iconStyle={styles.iconStyle}
            data={bathroomData ? bathroomData : dropDownData}
            maxHeight={400}
            labelField="label"
            valueField="values"
            placeholder="बाथरूम"
            onChange={item => handleChange('bathroom')(item?.values)}
          />
          {errors?.bathroom && (
            <Text className="text-red-500 ml-1">{errors?.bathroom}</Text>
          )}
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            itemTextStyle={{
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 18,
            }}
            inputSearchStyle={styles.inputSearchStyle}
            selectedTextStyle={{color: 'black', paddingLeft: 11}}
            iconStyle={styles.iconStyle}
            data={waterData ? waterData : dropDownData}
            maxHeight={400}
            labelField="label"
            valueField="values"
            placeholder="खानेपानिको उपलब्धता"
            onChange={item => handleChange('water')(item?.values)}
          />
          {errors?.water && (
            <Text className="text-red-500 ml-1">{errors?.water}</Text>
          )}
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={{color: 'black', paddingLeft: 11}}
            itemTextStyle={{
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 18,
            }}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={waterSData ? waterSData : dropDownData}
            maxHeight={400}
            labelField="label"
            valueField="values"
            placeholder="खानेपानिको श्रोत"
            onChange={item => handleChange('waterSource')(item?.values)}
          />
          {errors?.waterSource && (
            <Text className="text-red-500 ml-1">{errors?.waterSource}</Text>
          )}
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={{color: 'black', paddingLeft: 11}}
            itemTextStyle={{
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 18,
            }}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={toiletData ? toiletData : dropDownData}
            maxHeight={400}
            labelField="label"
            valueField="values"
            placeholder="शौचालय सुबिधा"
            onChange={item => handleChange('toilet')(item.values)}
          />
          {errors?.toilet && (
            <Text className="text-red-500 ml-1">{errors?.toilet}</Text>
          )}
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={{color: 'black', paddingLeft: 11}}
            itemTextStyle={{
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 18,
            }}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={toiletTypeData ? toiletTypeData : dropDownData}
            maxHeight={400}
            labelField="label"
            valueField="values"
            placeholder="शौचालयको प्रकार"
            onChange={item => handleChange('toiletType')(item?.values)}
          />
          {errors?.toiletType && (
            <Text className="text-red-500 ml-1">{errors?.toiletType}</Text>
          )}
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={{color: 'black', paddingLeft: 11}}
            itemTextStyle={{
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 18,
            }}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={electricityData ? electricityData : dropDownData}
            maxHeight={400}
            labelField="label"
            valueField="values"
            placeholder="बिजुलीको सुबिधा"
            onChange={item => handleChange('electricity')(item.values)}
          />
          {errors?.electricity && (
            <Text className="text-red-500 ml-1">{errors?.electricity}</Text>
          )}
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            itemTextStyle={{
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 18,
            }}
            inputSearchStyle={styles.inputSearchStyle}
            selectedTextStyle={{color: 'black', paddingLeft: 11}}
            iconStyle={styles.iconStyle}
            data={internetData ? internetData : dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="इंटरनेटको सुबिधा"
            onChange={item => handleChange('internet')(item?.values)}
          />
          {errors?.internet && (
            <Text className="text-red-500 ml-1">{errors?.internet}</Text>
          )}
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            itemTextStyle={{
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 18,
            }}
            inputSearchStyle={styles.inputSearchStyle}
            selectedTextStyle={{color: 'black', paddingLeft: 11}}
            iconStyle={styles.iconStyle}
            data={pvData ? pvData : dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="सार्बजनिक यातायातको उपलब्धता"
            onChange={item => handleChange('publicVehicle')(item.values)}
          />
          {errors?.publicVehicle && (
            <Text className="text-red-500 ml-1">{errors?.publicVehicle}</Text>
          )}
        </View>

        {/* <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            itemTextStyle={{
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 18,
            }}
            inputSearchStyle={styles.inputSearchStyle}
             selectedTextStyle={{color: 'black', paddingLeft: 11}}
            iconStyle={styles.iconStyle}
            data={cookingSourceData ? cookingSourceData : dropDownData}
            maxHeight={400}
            labelField="label"
            valueField="values"
            placeholder="खाना पकाउने इंधन"
            onChange={item => handleChange('cookingSource')(item.values)}
          />
          {errors?.cookingSource && (
            <Text className="text-red-500 ml-1">{errors?.cookingSource}</Text>
          )}
        </View> */}
      </View>

      <View className="mb-4">
        <TextInput
          label="Remarks "
          mode="outlined"
          placeholder="Remarks"
          onChangeText={handleChange('remarks')}
          value={values.remarks}
          className="h-12 px-2 bg-white"
        />
        {errors?.remarks && (
          <Text className="text-red-500 ml-1">{errors?.remarks}</Text>
        )}
      </View>

      <View className="mb-4 mx-5">
        <Button
          className="bg-sky-800 p-1 rounded-md"
          onPress={() => handleSubmit()}>
          <Text className="text-lg text-white uppercase">Submit</Text>
        </Button>
      </View>
    </>
  );
};

export default GharbibaranAddComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // padding: 16,
    marginBottom: 16,
  },
  dropdown: {
    height: 50,
    color: 'black',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    color: 'black',
    left: 22,
    top: -7,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingLeft: 11,
    color: 'black',
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
});
