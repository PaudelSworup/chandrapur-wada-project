import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import {TextInput} from 'react-native-paper';
import {dropDownData} from '../../utils/testingData';
import {Switch} from 'react-native-paper';
import {useQuery} from 'react-query';
import {
  cookingSourceDropDown,
  educationDropDown,
  healthDropDown,
  privateVehicleDropDown,
  vehicleTypeDropDown,
} from '../../APIS/API/api';

const FourthRegistrationView = ({
  values,
  handleChange,
  errors,
  setFieldValue,
}: any) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [selected, setSelected] = useState([]);
  // const [transport, setTransport] = useState<any>();
  const [health, setHealth] = useState<any>();
  const [privateV, setPrivateV] = useState<any>();
  const [education, setEducation] = useState<any>();
  const [vehicelType, setVehicleType] = useState<any>();
  const [cookingSource, setCookingSource] = useState<any>();

  const onToggleSwitch = () => {
    handleChange('privateVehicle')(isSwitchOn ? 'छैन' : 'छ');
    setIsSwitchOn(!isSwitchOn);
  };

  const getHealth = useQuery(['health'], async () => healthDropDown(), {
    onSettled: data => setHealth(data?.health),
  });

  const getCookingSource = useQuery(
    ['cooking'],
    async () => cookingSourceDropDown(),
    {
      onSettled: data => setCookingSource(data?.cookingSource),
    },
  );

  const cookingSourceData = useMemo(() => {
    return cookingSource?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [cookingSource]);

  const healthData = useMemo(() => {
    return health?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [health]);

  const getEducatoin = useQuery(
    ['education'],
    async () => educationDropDown(),
    {
      onSettled: data => setEducation(data?.ef),
    },
  );

  const educationData = useMemo(() => {
    return education?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [education]);

  const getPvt = useQuery(['pvt'], async () => privateVehicleDropDown(), {
    onSettled: data => setPrivateV(data?.pvt),
  });

  const pvtData = useMemo(() => {
    return privateV?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [privateV]);

  const getvehicleType = useQuery(
    ['vehicleType'],
    async () => vehicleTypeDropDown(),
    {
      onSettled: data => setVehicleType(data?.pt),
    },
  );

  const vehicletypeData = useMemo(() => {
    return vehicelType?.map((item: any) => ({
      label: item.name_nep,
      values: item.name_nep,
    }));
  }, [vehicelType]);

  const setValues = (item: any) => {
    setFieldValue;
  };

  return (
    <>
      <View className="mb-4 border p-4">
        <Text className="text-black text-lg">सेवाहरुमा पहुँच</Text>

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
            data={healthData ? healthData : dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="स्वस्थ्यको सुबिधा"
            onChange={item => handleChange('health')(item.values)}
          />
          {errors?.health && (
            <Text className="text-red-500 ml-1">{errors?.health}</Text>
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
            data={educationData ? educationData : dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="शैक्षिक संस्थाको सुबिधा"
            onChange={item => handleChange('education')(item.values)}
          />
          {errors?.education && (
            <Text className="text-red-500 ml-1">{errors?.education}</Text>
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
            data={cookingSourceData ? cookingSourceData : dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="खाना पकाउने इंधन"
            onChange={item => handleChange('cookingSource')(item.values)}
          />
          {errors?.cookingSource && (
            <Text className="text-red-500 ml-1">{errors?.cookingSource}</Text>
          )}
        </View>

        <View>
          <View className="flex-row justify-between items-center">
            <Text className="text-black text-xl">निजी यातायात</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>

          {isSwitchOn && (
            <>
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
                  selectedTextStyle={{color: 'black', paddingLeft: 11}}
                  iconStyle={styles.iconStyle}
                  data={vehicletypeData ? vehicletypeData : dropDownData}
                  maxHeight={300}
                  labelField="label"
                  valueField="values"
                  value={selected}
                  placeholder="सवारी साधनका प्रकारहरू"
                  // onChange={(item: any) => handleChange('vehicleType')(item?.values)}
                  onChange={(item: any) => {
                    setSelected(item);
                    setValues(item);
                  }}
                />
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
                  data={vehicletypeData ? vehicletypeData : dropDownData}
                  maxHeight={300}
                  labelField="label"
                  value={selected}
                  valueField="values"
                  placeholder="सवारी साधनका प्रकारहरू"
                  // onChange={item => {}}

                  onChange={item => handleChange('vehicleType')(item.values)}
                />
              </View> */}

              {/* <View className="mb-4">
                <TextInput
                  placeholder="गाडी नम्बर"
                  label="गाडी नम्बर"
                  onChangeText={handleChange('vehicleNo')}
                  value={values.vehicleNo}
                  mode="outlined"
                  className="h-12 px-2 bg-white"
                />
              </View> */}
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default FourthRegistrationView;

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
    height: 40,
    fontSize: 16,
  },
});
