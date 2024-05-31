import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {Button, Chip, TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';
import {dropDownData} from '../../utils/testingData';
import {useQuery} from 'react-query';
import {bridgeStatusDropDown, bridgeTypeDropDown} from '../../APIS/API/api';

const BridgeComp = ({
  values,
  handleChange,
  errors,
  handleSubmit,
  longitude,
  latitude,
}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {height, width} = useWindowDimensions();

  const [type, setBridgeType] = useState([]);
  const [status, setBridgeStatus] = useState([]);
  const [valueOneDropDown, setValueOneDropDown] = useState(null);
  const [isFocusOneDropDown, setIsFocusOneDropDown] = useState(false);
  const [valueTwoDropDown, setValueTwoDropDown] = useState(null);
  const [isFocusTwoDropDown, setIsFocusTwoDropDown] = useState(false);

  const renderLabel = (key: string) => {
    if (key === 'bs') {
      if (valueOneDropDown || isFocusOneDropDown) {
        return (
          <Text
            style={[styles.label, isFocusOneDropDown && {color: '#7B66AB'}]}>
            Bridge Status
          </Text>
        );
      }
    }

    if (key === 'bt') {
      if (valueTwoDropDown || isFocusTwoDropDown) {
        return (
          <Text
            style={[styles.label, isFocusTwoDropDown && {color: '#7B66AB'}]}>
            Bridge Type
          </Text>
        );
      }
    }

    return null;
  };

  //fetch the data of bridge type
  const bridgeType = useQuery(['type'], async () => bridgeTypeDropDown(), {
    onSettled: data => {
      //   console.log(data?.ward);
      setBridgeType(data?.bt);
    },
  });
  const typeDropDown = useMemo(() => {
    return type?.map((item: any) => ({
      label: item.name,
      values: item.id.toString(),
    }));
  }, [type]);

  //fetch the data of bridge status
  const bridgeStatus = useQuery(
    ['status'],
    async () => bridgeStatusDropDown(),
    {
      onSettled: data => {
        setBridgeStatus(data?.bs);
      },
    },
  );

  const statusDropDown = useMemo(() => {
    return status?.map((item: any) => ({
      label: item.name,
      values: item.id.toString(),
    }));
  }, [status]);

  type paramId = {
    bridgeId: {
      id?: number;
    };
  };

  const route = useRoute<RouteProp<paramId, 'bridgeId'>>();
  const {id} = route.params;

  return (
    <View className={`${width > 700 && 'px-56 '} bg-[azure] `}>
      <View className="mb-4">
        <TextInput
          mode="outlined"
          label="Bridge name"
          onChangeText={handleChange('bridgeName')}
          value={values.bridgeName}
          className="h-12 px-2 bg-white"
          placeholder="Bridge Name English (optional)"
        />
      </View>

      <View className="mb-4">
        <TextInput
          label="Bridge Name"
          mode="outlined"
          placeholder="Bridge Name Nepali(optional)"
          onChangeText={handleChange('bridgeNepaliName')}
          value={values.bridgeNepaliName}
          className="h-12 px-2 bg-white"
        />
      </View>

      <TouchableOpacity
        className="mb-1 px-2"
        onPress={() =>
          navigation.navigate(NavigationStrings.MAPS, {bridgeId: id})
        }>
        <Text className=" text-right text-blue-600 text-[16px]">
          set your location
        </Text>
      </TouchableOpacity>

      <View className="mb-4">
        <TextInput
          label="longitude"
          placeholder="Center Longitude"
          onChangeText={handleChange('centerLongitude')}
          value={longitude != 0 ? longitude.toString() : values.centerLongitude}
          keyboardType="numeric"
          mode="outlined"
          className="h-12 px-2 bg-white"
        />
        {errors?.centerLongitude && (
          <Text className="text-red-500 ml-1">{errors?.centerLongitude}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="latitude"
          placeholder="Center Latitude"
          onChangeText={handleChange('centerLatitude')}
          value={latitude != 0 ? latitude.toString() : values.centerLatitude}
          keyboardType="numeric"
          mode="outlined"
          className="h-12 px-2 bg-white"
        />
        {errors?.centerLatitude && (
          <Text className="text-red-500 ml-1">{errors?.centerLatitude}</Text>
        )}
      </View>
      <View className="mb-4">
        <TextInput
          label="length"
          placeholder="length"
          onChangeText={handleChange('length')}
          value={values.length}
          keyboardType="numeric"
          mode="outlined"
          className="h-12 px-2 bg-white"
        />
        {errors?.length && (
          <Text className="text-red-500 ml-1">{errors?.length}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="width"
          placeholder="width"
          onChangeText={handleChange('width')}
          value={values.width}
          keyboardType="numeric"
          mode="outlined"
          className="h-12 px-2 bg-white"
        />
        {errors?.width && (
          <Text className="text-red-500 ml-1">{errors?.width}</Text>
        )}
      </View>

      <View style={styles.container}>
        {renderLabel('bs')}
        <Dropdown
          style={[
            styles.dropdown,
            isFocusOneDropDown && {borderColor: '#7B66AB', borderWidth: 2},
          ]}
          placeholderStyle={styles.placeholderStyle}
          itemTextStyle={{
            backgroundColor: '#fff',
            color: 'black',
            fontSize: 18,
          }}
          selectedTextStyle={{color: 'black'}}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={statusDropDown ? statusDropDown : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder={!isFocusOneDropDown ? 'Bridge Status ' : '...'}
          onFocus={() => setIsFocusOneDropDown(true)}
          onBlur={() => setIsFocusOneDropDown(false)}
          onChange={(item: any) => {
            handleChange('bridgeStatus')(item?.values);
            setValueOneDropDown(item.value);
            setIsFocusOneDropDown(false);
          }}
        />
        {errors?.bridgeStatus && (
          <Text className="text-red-500 ml-1">{errors?.bridgeStatus}</Text>
        )}
      </View>

      <View style={styles.container}>
        {renderLabel('bt')}
        <Dropdown
          style={[
            styles.dropdown,
            isFocusTwoDropDown && {borderColor: '#7B66AB', borderWidth: 2},
          ]}
          placeholderStyle={styles.placeholderStyle}
          itemTextStyle={{
            backgroundColor: '#fff',
            color: 'black',
            fontSize: 18,
          }}
          selectedTextStyle={{color: 'black'}}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={typeDropDown ? typeDropDown : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder={!isFocusTwoDropDown ? 'Bridge Type ' : '...'}
          onFocus={() => setIsFocusTwoDropDown(true)}
          onBlur={() => setIsFocusTwoDropDown(false)}
          onChange={(item: any) => {
            handleChange('bridgeType')(item?.values);
            setValueTwoDropDown(item.value);
            setIsFocusTwoDropDown(false);
          }}
        />
        {errors?.bridgeType && (
          <Text className="text-red-500 ml-1">{errors?.bridgeType}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          placeholder="Remarks"
          label="remarks"
          onChangeText={handleChange('remarks')}
          value={values.remarks}
          // keyboardType="numeric"
          mode="outlined"
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
          <Text className="text-lg text-white uppercase">Add</Text>
        </Button>
      </View>
    </View>
  );
};

export default BridgeComp;

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
    color: 'black',
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
