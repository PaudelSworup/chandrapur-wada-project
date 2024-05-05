import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useMemo, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {dropDownData} from '../../utils/testingData';
import {Dropdown} from 'react-native-element-dropdown';
import {MultiSelect} from 'react-native-element-dropdown';
import {disabilityDropDown, ltdDropDown} from '../../APIS/API/api';
import {useQuery} from 'react-query';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SecondRegistrationView = ({
  handleChange,
  values,
  setFieldValue,
  errors,
}: any) => {
  const [selected, setSelected] = useState([]);
  const [selectedTwo, setSelectedTwo] = useState([]);
  const [disability, setDisability] = useState<any>();
  const [ltd, setLTD] = useState<any>();

  const setValues = (item: any) => {
    setFieldValue('ltdType', item);
  };

  const setValuesTwo = (item: any) => {
    console.log(item);
    setFieldValue('disableType', item);
  };

  const getDisabilityData = useQuery(
    ['disability'],
    async () => disabilityDropDown(),
    {
      onSettled: data => setDisability(data?.disability),
    },
  );

  const disabilityData = useMemo(() => {
    return disability?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [disability]);

  const getLtdData = useQuery(['ltd'], async () => ltdDropDown(), {
    onSettled: data => setLTD(data?.ltd),
  });

  const ltdData = useMemo(() => {
    return ltd?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [ltd]);

  return (
    <>
      <View className="mb-4 border p-4">
        <Text className="text-black text-lg">पारिवारिक तथ्यांक</Text>
        <View className="mb-4">
          <TextInput
            placeholder="परिवार संख्या"
            label="परिवार संख्या"
            onChangeText={handleChange('memberNo')}
            value={values.memberNo}
            keyboardType="number-pad"
            mode="outlined"
            className="h-14 px-2 bg-white"
          />
          {errors?.memberNo && (
            <Text className="text-red-500 ml-1">{errors?.memberNo}</Text>
          )}
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="पुरुषको संख्या"
            label="पुरुषको संख्या"
            onChangeText={handleChange('maleNo')}
            value={values.maleNo}
            keyboardType="number-pad"
            mode="outlined"
            className="h-14 px-2 bg-white"
          />
          {errors?.maleNo && (
            <Text className="text-red-500 ml-1">{errors?.maleNo}</Text>
          )}
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="महिलाको संख्या"
            onChangeText={handleChange('femaleNo')}
            value={values.femaleNo}
            label="महिलाको संख्या"
            keyboardType="number-pad"
            mode="outlined"
            className="h-14 px-2 bg-white"
          />
          {errors?.femaleNo && (
            <Text className="text-red-500 ml-1">{errors?.femaleNo}</Text>
          )}
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="अन्य"
            label="अन्य"
            onChangeText={handleChange('othersNo')}
            value={values.othersNo}
            keyboardType="number-pad"
            mode="outlined"
            className="h-14 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="पारिवारिक सदस्यहरुको उमेर(, ले छुट्टाउनुहोस) "
            label="पारिवारिक सदस्यहरुको उमेर(, ले छुट्टाउनुहोस)"
            onChangeText={handleChange('familyAge')}
            value={values.familyAge}
            mode="outlined"
            className="h-14 px-2 bg-white"
          />
          {errors?.familyAge && (
            <Text className="text-red-500 ml-1">{errors?.familyAge}</Text>
          )}
        </View>
      </View>

      <View className="mb-4 border p-4">
        <Text className="text-black text-lg">
          दीर्घकालीन रोग सम्बन्धी विवरण
        </Text>

        <View className="mb-4">
          <TextInput
            placeholder="दीर्घकालीन रोगी भए संख्या "
            label="दीर्घकालीन रोगी भए संख्या "
            onChangeText={handleChange('ltdNo')}
            value={values.ltdNo}
            mode="outlined"
            className="h-14 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <MultiSelect
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
            selectedTextStyle={{color: 'black'}}
            iconStyle={styles.iconStyle}
            data={ltdData ? ltdData : dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            value={selected}
            placeholder="रोगको प्रकार"
            // onChange={(item: any) => handleChange('ltdType')(item?.values)}
            onChange={(item: any) => {
              setSelected(item);
              setValues(item);
            }}
          />
        </View>
      </View>

      <View className="mb-4 border p-4">
        <Text className="text-black text-lg">अपंगता सम्बन्धी विवरण</Text>

        <View className="mb-4">
          <TextInput
            placeholder="अपंगता भए संख्या"
            label="अपंगता भए संख्या"
            onChangeText={handleChange('disableNo')}
            value={values.disableNo}
            mode="outlined"
            className="h-14 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <MultiSelect
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fefefe',
              },
            ]}
            itemTextStyle={{
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 18,
            }}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={{color: 'black'}}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={disabilityData ? disabilityData : dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            value={selectedTwo}
            placeholder="अपंगताको प्रकार"
            onChange={(item: any) => {
              setSelectedTwo(item);
              setValuesTwo(item);
            }}
          />
        </View>
      </View>
    </>
  );
};

export default SecondRegistrationView;
const styles = StyleSheet.create({
  container: {padding: 16},
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
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
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});
