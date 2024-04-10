import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {dropDownData} from '../../utils/testingData';
import {useQuery} from 'react-query';
import {
  getHouseCategory,
  getHouseType,
  getMunWard,
  getToleByWard,
} from '../../APIS/API/api';

const GharbibaranAddComponent = ({
  values,
  errors,
  handleChange,
  handleSubmit,
}: any) => {
  const [ward, setWard] = useState<any>();
  const [wardId, setWardId] = useState<any>();
  const [tole, setTole] = useState<any>();
  const [house, setHouse] = useState<any>();
  const [category, setCategory] = useState<any>();
  const getWard = useQuery(['ward'], async () => getMunWard(), {
    onSettled: data => setWard(data?.houses),
  });

  const getTole = useQuery(
    ['tole', wardId],
    async () => getToleByWard(wardId),
    {
      onSettled: data => setTole(data?.houses),
    },
  );

  const getHouse = useQuery(['type'], async () => getHouseType(), {
    onSettled: data => setHouse(data?.houses),
  });

  const getHouseCat = useQuery(['cat'], async () => getHouseCategory(), {
    onSettled: data => setCategory(data?.houses),
  });

  const wadaData = useMemo(() => {
    return ward?.map((item: any) => ({
      label: item.name,
      values: item.id.toString(),
    }));
  }, [ward]);

  const toleData = useMemo(() => {
    return tole?.map((item: any) => ({
      label: item.name,
      values: item.id.toString(),
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

  return (
    <>
      <Text className="text-lg text-black">घर सम्बन्धी विवरण भर्नुहोस </Text>
      <View className="mb-4">
        <TextInput
          mode="outlined"
          label="घर धनिको नाम "
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
            <Text className="text-right text-lg  text-black underline">
              Get Coordinates
            </Text>
            <TextInput
              label="Latitude"
              mode="outlined"
              placeholder="latitude"
              onChangeText={handleChange('latitude')}
              value={values.latitude}
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
              value={values.longitude}
              className="h-12 px-2 bg-white"
            />
            {errors?.longitude && (
              <Text className="text-red-500 ml-1">{errors?.longitude}</Text>
            )}
          </View>
        </View>
      </View>

      <View style={styles.container}>
        {/* {renderLabel('sp')} */}
        <Dropdown
          style={[styles.dropdown, {borderColor: '#7B66AB', borderWidth: 2}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
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
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
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
          placeholder="talla"
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
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
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
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
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
    left: 22,
    top: -7,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
