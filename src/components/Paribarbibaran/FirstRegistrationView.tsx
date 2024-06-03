import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {dropDownData} from '../../utils/testingData';
import {useQuery} from 'react-query';
import {
  casteDropDown,
  districtsDropDown,
  genderDropDown,
  languageDropDown,
  religionDropDown,
  rentDropDown,
} from '../../APIS/API/api';

const FirstRegistrationView = ({handleChange, values, errors}: any) => {
  const [languages, setLanguages] = useState<any>();
  const [caste, setCaste] = useState<any>();
  const [religion, setReligion] = useState<any>();
  const [districts, setDistricts] = useState<any>();
  const [gender, setGender] = useState<any>();
  const [rent, setRent] = useState<any>();

  const getLanguages = useQuery(['languages'], async () => languageDropDown(), {
    onSettled: data => setLanguages(data?.language),
  });

  const getRent = useQuery(['rent'], async () => rentDropDown(), {
    onSettled: data => setRent(data?.rent),
  });

  const getCaste = useQuery(['caste'], async () => casteDropDown(), {
    onSettled: data => setCaste(data?.caste),
  });

  const getReligion = useQuery(['religion'], async () => religionDropDown(), {
    onSettled: data => setReligion(data?.religion),
  });

  const getDistricts = useQuery(
    ['districts'],
    async () => districtsDropDown(),
    {
      onSettled: data => setDistricts(data?.district),
    },
  );

  const getGender = useQuery(['gender'], async () => genderDropDown(), {
    onSettled: data => setGender(data?.gender),
  });

  const languageData = useMemo(() => {
    return languages?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [languages]);

  const rentData = useMemo(() => {
    return rent?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [rent]);

  const CasteData = useMemo(() => {
    return caste?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [caste]);

  const religionData = useMemo(() => {
    return religion?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [religion]);

  const districtsData = useMemo(() => {
    return districts?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [districts]);

  const genderCat = useMemo(() => {
    return gender?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [gender]);

  return (
    <>
      <Text className="text-lg text-black mb-4">
        घर सम्बन्धी विवरण भर्नुहोस
      </Text>
      <View className="mb-4">
        <TextInput
          mode="outlined"
          label="घर न"
          onChangeText={handleChange('houseId')}
          value={values.houeseId}
          className="h-14 px-2 bg-white"
          placeholder="घर "
        />

        {errors?.houseId && (
          <Text className="text-red-500 ml-1">{errors?.houseId}</Text>
        )}
      </View>
      <View className="mb-4">
        <TextInput
          mode="outlined"
          label="परिवारमुलीको नाम"
          onChangeText={handleChange('houseOwnerNameNepali')}
          value={values.houseOwnerNameNepali}
          className="h-14 px-2 bg-white"
          placeholder="परिवारमुलीको नाम "
        />

        {errors?.houseOwnerNameNepali && (
          <Text className="text-red-500 ml-1">
            {errors?.houseOwnerNameNepali}
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
          placeholder="परिवारमुलीको लिङ्ग"
          onChange={(item: any) => {
            handleChange('gender')(item?.values);
          }}
        />
        {errors?.gender && (
          <Text className="text-red-500 ml-1">{errors?.gender}</Text>
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
          data={rentData ? rentData : dropDownData}
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
      </View>

      <View className="mb-4">
        <TextInput
          mode="outlined"
          label="परिवारमुलीको बुबाको नाम"
          onChangeText={handleChange('houseOwnerFathersName')}
          value={values.houseOwnerFathersName}
          className="h-14 px-2 bg-white"
          placeholder="परिवारमुलीको बुबाको नाम"
        />

        {errors?.houseOwnerFathersName && (
          <Text className="text-red-500 ml-1">
            {errors?.houseOwnerFathersName}
          </Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          mode="outlined"
          label="परिवारमुलीको आमाको नाम"
          onChangeText={handleChange('houseOwnerMothersName')}
          value={values.houseOwnerMothersName}
          className="h-14 px-2 bg-white"
          placeholder="परिवारमुलीको आमाको नाम"
        />

        {errors?.houseOwnerMothersName && (
          <Text className="text-red-500 ml-1">
            {errors?.houseOwnerMothersName}
          </Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          mode="outlined"
          label="परिवारमुलीको हजुरबुबाको नाम"
          onChangeText={handleChange('houseOwnerGrandFathersName')}
          value={values.houseOwnerGrandFathersName}
          className="h-14 px-2 bg-white"
          placeholder="परिवारमुलीको हजुरबुबाको नाम"
        />
        {errors?.houseOwnerGrandFathersName && (
          <Text className="text-red-500 ml-1">
            {errors?.houseOwnerGrandFathersName}
          </Text>
        )}
      </View>

      <View className="mb-4">
        <Dropdown
          style={[
            styles.dropdown,
            {borderColor: '#7B66AB', borderWidth: 2, backgroundColor: '#fff'},
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
          data={languageData ? languageData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="मातृभाषा"
          onChange={item => handleChange('motherTounge')(item?.values)}
        />
        {errors?.motherTounge && (
          <Text className="text-red-500 ml-1">{errors?.motherTounge}</Text>
        )}
      </View>

      <View className="mb-4">
        <Dropdown
          style={[
            styles.dropdown,
            {borderColor: '#7B66AB', borderWidth: 2, backgroundColor: '#fff'},
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
          data={CasteData ? CasteData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="जाति"
          onChange={item => handleChange('caste')(item?.values)}
        />
        {errors?.caste && (
          <Text className="text-red-500 ml-1">{errors?.caste}</Text>
        )}
      </View>

      <View className="mb-4">
        <Dropdown
          style={[
            styles.dropdown,
            {borderColor: '#7B66AB', borderWidth: 2, backgroundColor: '#fff'},
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
          data={religionData ? religionData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="धर्म"
          onChange={item => handleChange('religion')(item?.values)}
        />
        {errors?.religion && (
          <Text className="text-red-500 ml-1">{errors?.religion}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="नागरिकता नं "
          mode="outlined"
          placeholder="नागरिकता नं "
          onChangeText={handleChange('citizenshipNum')}
          value={values.citizenshipNum}
          className="h-14 px-2 bg-white"
        />
        {errors?.citizenshipNum && (
          <Text className="text-red-500 ml-1">{errors?.citizenshipNum}</Text>
        )}
      </View>

      <View className="mb-4">
        <Dropdown
          style={[
            styles.dropdown,
            {borderColor: '#7B66AB', borderWidth: 2, backgroundColor: '#fff'},
          ]}
          itemTextStyle={{
            backgroundColor: '#fff',
            color: 'black',
            fontSize: 18,
          }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={{color: 'black', paddingLeft: 11}}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={districtsData ? districtsData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="नागरिकता लिएको जिल्ला "
          onChange={item => handleChange('citizenshipDistrict')(item?.values)}
        />
        {errors?.citizenshipDistrict && (
          <Text className="text-red-500 ml-1">
            {errors?.citizenshipDistrict}
          </Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="नागरिकताको ठेगाना"
          mode="outlined"
          placeholder="नागरिकताको ठेगाना"
          onChangeText={handleChange('ownerAddress')}
          value={values.nagritakoThegana}
          className="h-14 px-2 bg-white"
        />

        {errors?.ownerAddress && (
          <Text className="text-red-500 ml-1">{errors?.ownerAddress}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="फोन"
          mode="outlined"
          placeholder="फोन"
          onChangeText={handleChange('phone')}
          keyboardType="number-pad"
          value={values.phone}
          className="h-14 px-2 bg-white"
        />
        {errors?.phone && (
          <Text className="text-red-500 ml-1">{errors?.phone}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="ईमेल"
          mode="outlined"
          placeholder="ईमेल"
          onChangeText={handleChange('email')}
          value={values.email}
          className="h-14 px-2 bg-white"
        />
        {errors?.email && (
          <Text className="text-red-500 ml-1">{errors?.email}</Text>
        )}
      </View>
    </>
  );
};

export default FirstRegistrationView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // padding: 16,
    marginBottom: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'black',
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
  },
});
