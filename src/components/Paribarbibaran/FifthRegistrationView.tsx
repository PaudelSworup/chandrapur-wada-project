import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {dropDownData} from '../../utils/testingData';
import {Dropdown} from 'react-native-element-dropdown';
import {useQuery} from 'react-query';
import {agricultureDropDown, wasteMgmtDropDown} from '../../APIS/API/api';

const FifthRegistrationView = ({
  handleChange,
  handleSubmit,
  values,
  errors,
}: any) => {
  const [agriculture, setAgriculture] = useState<any>();
  const [wasteManagement, setWasteManagement] = useState<any>();

  const getAgriculture = useQuery(
    ['agriculture'],
    async () => agricultureDropDown(),
    {
      onSettled: data => setAgriculture(data?.agriculture),
    },
  );

  const agricultureData = useMemo(() => {
    return agriculture?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [agriculture]);

  const getWaste = useQuery(['wasteMgmt'], async () => wasteMgmtDropDown(), {
    onSettled: data => setWasteManagement(data?.waste),
  });

  const wasteData = useMemo(() => {
    return wasteManagement?.map((item: any) => ({
      label: item?.name_nep,
      values: item?.name_nep,
    }));
  }, [wasteManagement]);

  return (
    <>
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
          selectedTextStyle={{color: 'black'}}
          iconStyle={styles.iconStyle}
          data={wasteData ? wasteData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="फोहोर व्यवस्थापन"
          onChange={item => handleChange('wasteManagement')(item.values)}
        />
        {errors?.wasteManagement && (
          <Text className="text-red-500 ml-1">{errors?.wasteManagement}</Text>
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
          selectedTextStyle={{color: 'black'}}
          iconStyle={styles.iconStyle}
          data={agricultureData ? agricultureData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="कृषि"
          onChange={item => handleChange('agricultureType')(item.values)}
        />
        {errors?.agricultureType && (
          <Text className="text-red-500 ml-1">{errors?.agricultureType}</Text>
        )}
      </View>

      <View className="mb-4 border p-4">
        <Text className="text-black text-lg">
          बैदेशिक अध्ययन सम्बन्धी विवरण
        </Text>
        <View className="mb-4">
          <TextInput
            placeholder="सदस्य संख्या "
            label="सदस्य संख्या "
            onChangeText={handleChange('foreignStudySadasya')}
            value={values.foreignStudySadasya}
            keyboardType="number-pad"
            mode="outlined"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="देशको नाम(, ले छुटाउनु होस )"
            label="देशको नाम(, ले छुटाउनु होस )"
            onChangeText={handleChange('countryNameOne')}
            value={values.countryNameOne}
            mode="outlined"
            className="h-12 px-2 bg-white"
          />
        </View>
      </View>

      <View className="mb-4 border p-4">
        <Text className="text-black text-lg">बैदेशिक रोजगार</Text>
        <View className="mb-4">
          <TextInput
            placeholder="सदस्य संख्या "
            label="सदस्य संख्या "
            onChangeText={handleChange('foreignWorkSadasya')}
            value={values.foreignWorkSadasya}
            keyboardType="number-pad"
            mode="outlined"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="देशको नाम(, ले छुटाउनु होस )"
            label="देशको नाम(, ले छुटाउनु होस )"
            onChangeText={handleChange('countryNameTwo')}
            value={values.countryNameTwo}
            mode="outlined"
            className="h-12 px-2 bg-white"
          />
        </View>
      </View>

      <View className="mb-4">
        <TextInput
          placeholder="अन्य "
          label="अन्य "
          onChangeText={handleChange('remarks')}
          value={values.remarks}
          mode="outlined"
          className="h-16 px-2 bg-white"
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

export default FifthRegistrationView;

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
