import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {dropDownData} from '../../utils/testingData';
import {useQuery} from 'react-query';
import {
  bathroomDropDown,
  cookingSourceDropDown,
  electricityDropDown,
  incomeTypeDropDown,
  toiletDropDown,
  toiletTypeDropDown,
  waterDropDown,
  waterTypeDropDown,
} from '../../APIS/API/api';

const ThirdRegistrationView = ({handleChange, values, errors}: any) => {
  const [incomeType, setIncomeType] = useState<any>();

  const getIncomeType = useQuery(['income'], async () => incomeTypeDropDown(), {
    onSettled: data => setIncomeType(data?.income),
  });

  const incomeData = useMemo(() => {
    return incomeType?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [incomeType]);

  return (
    <>
      <View className="mb-4 border p-4">
        <Text className="text-black text-lg">
          शैक्षिक योग्यता समबन्धी विवरण
        </Text>
        <View className="mb-4">
          <TextInput
            placeholder="पी.एच.डी संख्या "
            label="पीएचडी संख्या "
            onChangeText={handleChange('phd')}
            value={values.phd}
            mode="outlined"
            keyboardType="number-pad"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="मास्टर संख्या "
            onChangeText={handleChange('master')}
            value={values.master}
            label="मास्टर संख्या "
            mode="outlined"
            keyboardType="number-pad"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="स्नातक संख्या"
            onChangeText={handleChange('bachelor')}
            value={values.bachelor}
            label="स्नातक संख्या"
            mode="outlined"
            keyboardType="number-pad"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="१० + २ संख्या "
            label="१० + २ संख्या "
            onChangeText={handleChange('plusTwo')}
            value={values.plusTwo}
            mode="outlined"
            keyboardType="number-pad"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="माध्यमिक संख्या"
            label="माध्यमिक संख्या"
            onChangeText={handleChange('madhymik')}
            value={values.madhymik}
            mode="outlined"
            keyboardType="number-pad"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="निम्न माध्यमिक संख्या "
            label="निम्न माध्यमिक संख्या "
            mode="outlined"
            onChangeText={handleChange('nimnaMadhymic')}
            value={values.nimnaMadhymic}
            keyboardType="number-pad"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="प्राथमिक संख्या "
            label="प्राथमिक संख्या "
            mode="outlined"
            onChangeText={handleChange('prathamik')}
            value={values.prathamik}
            keyboardType="number-pad"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="सामान्य लेखपढ संख्या "
            label="सामान्य लेखपढ संख्या "
            mode="outlined"
            onChangeText={handleChange('samanyaLekhpad')}
            value={values.samanyaLekhpad}
            keyboardType="number-pad"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="अशिक्षित संख्या "
            label="अशिक्षित संख्या "
            onChangeText={handleChange('uneducated')}
            value={values.uneducated}
            mode="outlined"
            keyboardType="number-pad"
            className="h-12 px-2 bg-white"
          />
        </View>
      </View>

      <View className="mb-4 border p-4">
        <Text className="text-black text-lg">आय वय समबन्धी विवरण</Text>

        <View className="mb-4">
          <TextInput
            placeholder="प्रति महीना कुल आय"
            label="प्रति महीना कुल आय"
            onChangeText={handleChange('monthlyIncome')}
            value={values.monthlyIncome}
            mode="outlined"
            keyboardType="number-pad"
            className="h-14 px-2 bg-white"
          />
          {errors?.monthlyIncome && (
            <Text className="text-red-500 ml-1">{errors?.monthlyIncome}</Text>
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
            data={incomeData ? incomeData : dropDownData}
            maxHeight={400}
            labelField="label"
            valueField="values"
            placeholder="आम्दानिको मुख्य श्रोत"
            onChange={item => handleChange('incomeMajorSource')(item.values)}
          />
          {errors?.incomeMajorSource && (
            <Text className="text-red-500 ml-1">
              {errors?.incomeMajorSource}
            </Text>
          )}
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="कुल अनुमानित मासिक खर्च"
            label="कुल अनुमानित मासिक खर्च"
            onChangeText={handleChange('monthlyExpen')}
            value={values.monthlyExpen}
            mode="outlined"
            keyboardType="number-pad"
            className="h-14 px-2 bg-white"
          />
          {errors?.monthlyExpen && (
            <Text className="text-red-500 ml-1">{errors?.monthlyExpen}</Text>
          )}
        </View>
      </View>
    </>
  );
};

export default ThirdRegistrationView;

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
    paddingLeft: 11,
    color: 'black',
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 50,
    fontSize: 16,
  },
});
