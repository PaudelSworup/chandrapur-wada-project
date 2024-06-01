import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {useQuery} from 'react-query';
import {Button, TextInput} from 'react-native-paper';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getMunWard, getToleByWard} from '../../APIS/API/api';
import {dropDownData} from '../../utils/testingData';
import NavigationStrings from '../../Constant/NavigationStrings';

const EndPoint: React.FC<{
  values: any;
  errors: any;
  handleChange: any;
  longitude: string;
  latitude: string;
  handleSubmit: any;
}> = ({values, handleChange, errors, longitude, latitude, handleSubmit}) => {
  const [tole, setTole] = useState([]);
  const [munWard, setMunWard] = useState([]);
  const [wardId, setWardId] = useState<any>();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [valueOneDropDown, setValueOneDropDown] = useState(null);
  const [isFocusOneDropDown, setIsFocusOneDropDown] = useState(false);
  const [valueTwoDropDown, setValueTwoDropDown] = useState(null);
  const [isFocusTwoDropDown, setIsFocusTwoDropDown] = useState(false);

  const {width} = useWindowDimensions();

  //fetch the data of ward
  const wardData = useQuery(['ward'], async () => getMunWard(), {
    onSettled: data => {
      //   console.log(data?.ward);
      setMunWard(data?.ward);
    },
  });
  const startWardDropDownData = useMemo(() => {
    return munWard?.map((item: any) => ({
      label: item.name,
      values: item.id.toString(),
    }));
  }, [munWard]);

  //   console.log('start', startWardDropDownData);

  //fetch the data of tole
  const getTole = useQuery(
    ['tole', wardId],
    async () => getToleByWard(wardId),
    {
      onSettled: data => {
        setTole(data?.tolebWard);
      },
    },
  );

  const startToleDropDownData = useMemo(() => {
    return tole?.map((item: any) => ({
      label: item.name,
      values: item.id.toString(),
    }));
  }, [tole]);

  const renderLabel = (key: string) => {
    if (key === 'ward') {
      if (valueOneDropDown || isFocusOneDropDown) {
        return (
          <Text
            style={[styles.label, isFocusOneDropDown && {color: '#7B66AB'}]}>
            Start Ward
          </Text>
        );
      }
    }

    if (key === 'tole') {
      if (valueTwoDropDown || isFocusTwoDropDown) {
        return (
          <Text
            style={[styles.label, isFocusTwoDropDown && {color: '#7B66AB'}]}>
            Start Tole
          </Text>
        );
      }
    }

    return null;
  };

  type paramId = {
    roadId: {
      id?: number;
    };
  };

  const route = useRoute<RouteProp<paramId, 'roadId'>>();
  const {id} = route.params;

  return (
    <View className={`${width > 700 && 'px-56'} bg-white `}>
      <View className="mb-4">
        <TextInput
          label="landmark"
          mode="outlined"
          placeholder="end Landmark"
          onChangeText={handleChange('endLandmark')}
          value={values.startLandmark}
          className="h-12 px-2 bg-white"
        />
        {errors?.endLandmark && (
          <Text className="text-red-500 ml-1">{errors?.endLandmark}</Text>
        )}
      </View>

      <TouchableOpacity
        className="mb-1 px-2"
        onPress={() =>
          navigation.navigate(NavigationStrings.MAPS, {
            endPoint: 'endPoint',
            uniqueId: id,
          })
        }>
        <Text className=" text-right text-blue-600 text-[16px]">
          set your location
        </Text>
      </TouchableOpacity>

      <View className="mb-4">
        <TextInput
          label="longitude"
          placeholder="end Longitude"
          onChangeText={handleChange('endLongitude')}
          value={longitude ? longitude : values.endLongitude}
          // keyboardType="numeric"
          mode="outlined"
          className="h-12 px-2 bg-white"
        />
        {errors?.endLongitude && (
          <Text className="text-red-500 ml-1">{errors?.endLongitude}</Text>
        )}
      </View>

      <View className="mb-4">
        <TextInput
          label="latitude"
          placeholder="end Latitude"
          onChangeText={handleChange('endLatitude')}
          value={latitude ? latitude : values.endLatitude}
          // keyboardType="numeric"
          mode="outlined"
          className="h-12 px-2 bg-white"
        />
        {errors?.endLatitude && (
          <Text className="text-red-500 ml-1">{errors?.endLatitude}</Text>
        )}
      </View>

      <View style={styles.container}>
        {renderLabel('ward')}
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
          selectedTextStyle={{color: 'black', paddingLeft: 11}}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={startWardDropDownData ? startWardDropDownData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder={!isFocusOneDropDown ? 'Select Ward ' : '...'}
          // value={value}
          onFocus={() => setIsFocusOneDropDown(true)}
          onBlur={() => setIsFocusOneDropDown(false)}
          onChange={(item: any) => {
            handleChange('endWardDropDown')(item?.values);
            setValueOneDropDown(item.value);
            setWardId(item?.values);
            setIsFocusOneDropDown(false);
          }}
        />
        {errors?.endWardDropDown && (
          <Text className="text-red-500 ml-1">{errors?.endWardDropDown}</Text>
        )}
      </View>

      <View style={styles.container}>
        {renderLabel('tole')}
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
          selectedTextStyle={{color: 'black', paddingLeft: 11}}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={startToleDropDownData ? startToleDropDownData : dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder={!isFocusTwoDropDown ? 'Select Tole ' : '...'}
          // value={value}
          onFocus={() => setIsFocusTwoDropDown(true)}
          onBlur={() => setIsFocusTwoDropDown(false)}
          onChange={(item: any) => {
            handleChange('endToleDropDown')(item?.values);
            setValueTwoDropDown(item.value);
            setIsFocusTwoDropDown(false);
          }}
        />
        {errors?.endToleDropDown && (
          <Text className="text-red-500 ml-1">{errors?.endToleDropDown}</Text>
        )}
      </View>

      <View className="mb-3 mx-5">
        <Button
          className="bg-sky-800 p-1 rounded-md"
          onPress={() => handleSubmit()}>
          <Text className="text-lg text-white uppercase">Add</Text>
        </Button>
      </View>
    </View>
  );
};

export default EndPoint;

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
    paddingLeft: 11,
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
