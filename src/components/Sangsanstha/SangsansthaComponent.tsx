import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {dropDownData} from '../../utils/testingData';

const SangsansthaComponent = () => {
  const [valueOneDropDown, setValueOneDropDown] = useState(null);
  const [isFocusOneDropDown, setIsFocusOneDropDown] = useState(false);
  const [valueTwoDropDown, setValueTwoDropDown] = useState(null);
  const [isFocusTwoDropDown, setIsFocusTwoDropDown] = useState(false);
  const [valueThreeDropDown, setValueThreeDropDown] = useState(null);
  const [isFocusThreeDropDown, setIsFocusThreeDropDown] = useState(false);

  const renderLabel = (key: string) => {
    if (key === 'srw') {
      if (valueOneDropDown || isFocusOneDropDown) {
        return (
          <Text
            style={[styles.label, isFocusOneDropDown && {color: '#7B66AB'}]}>
            संस्था रहेको वडा
          </Text>
        );
      }
    }

    if (key === 'srt') {
      if (valueTwoDropDown || isFocusTwoDropDown) {
        return (
          <Text
            style={[styles.label, isFocusTwoDropDown && {color: '#7B66AB'}]}>
            संस्था रहेको टोल
          </Text>
        );
      }
    }

    if (key === 'sp') {
      if (valueThreeDropDown || isFocusThreeDropDown) {
        return (
          <Text
            style={[styles.label, isFocusThreeDropDown && {color: '#7B66AB'}]}>
            संस्थाको प्रकार
          </Text>
        );
      }
    }
  };

  return (
    <>
      <Text className="text-lg text-black">संघ संस्थाको विवरण भर्नुहोस </Text>
      <View className="mt-5">
        <View className="mb-4">
          <TextInput
            mode="outlined"
            label="संस्थाको नाम"
            //   onChangeText={handleChange('bridgeName')}
            //   value={values.bridgeName}
            className="h-12 px-2 bg-white"
            placeholder="संस्थाको नाम"
          />
        </View>

        <View style={styles.container}>
          {renderLabel('srw')}
          <Dropdown
            style={[
              styles.dropdown,
              isFocusOneDropDown && {borderColor: '#7B66AB', borderWidth: 2},
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder={!isFocusOneDropDown ? 'संस्था रहेको वडा ' : '...'}
            onFocus={() => setIsFocusOneDropDown(true)}
            onBlur={() => setIsFocusOneDropDown(false)}
            onChange={(item: any) => {
              // handleChange('bridgeStatus')(item?.values);
              setValueOneDropDown(item.value);
              setIsFocusOneDropDown(false);
            }}
          />
        </View>

        <View style={styles.container}>
          {renderLabel('srt')}
          <Dropdown
            style={[
              styles.dropdown,
              isFocusTwoDropDown && {borderColor: '#7B66AB', borderWidth: 2},
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder={!isFocusTwoDropDown ? 'संस्था रहेको टोल ' : '...'}
            onFocus={() => setIsFocusTwoDropDown(true)}
            onBlur={() => setIsFocusTwoDropDown(false)}
            onChange={(item: any) => {
              // handleChange('bridgeStatus')(item?.values);
              setValueTwoDropDown(item.value);
              setIsFocusTwoDropDown(false);
            }}
          />
        </View>

        <View className="mb-4">
          <TextInput
            label="संस्थाको फोन"
            placeholder="संस्थाको फोन"
            //   onChangeText={handleChange('centerLongitude')}
            //   value={longitude != 0 ? longitude.toString() : values.centerLongitude}
            keyboardType="numeric"
            mode="outlined"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            label="संस्थाको ईमेल"
            placeholder="संस्थाको ईमेल"
            //   onChangeText={handleChange('centerLatitude')}
            //   value={latitude != 0 ? latitude.toString() : values.centerLatitude}
            // keyboardType="numeric"
            mode="outlined"
            className="h-12 px-2 bg-white"
          />
        </View>

        <View style={styles.container}>
          {renderLabel('sp')}
          <Dropdown
            style={[
              styles.dropdown,
              isFocusThreeDropDown && {borderColor: '#7B66AB', borderWidth: 2},
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder={!isFocusTwoDropDown ? 'संस्थाको प्रकार' : '...'}
            onFocus={() => setIsFocusThreeDropDown(true)}
            onBlur={() => setIsFocusThreeDropDown(false)}
            onChange={(item: any) => {
              // handleChange('bridgeStatus')(item?.values);
              setValueThreeDropDown(item.value);
              setIsFocusThreeDropDown(false);
            }}
          />
        </View>

        <View className="mb-4 border p-4">
          <Text className="text-black text-lg">
            संस्थाको मुख्य व्यक्तिको विवरण
          </Text>
          <View className="mt-4">
            <View className="mb-4">
              <TextInput
                label="संस्थाको मुख्य व्यक्तिको नाम"
                mode="outlined"
                placeholder="संस्थाको मुख्य व्यक्तिको नाम"
                //   onChangeText={handleChange('bridgeNepaliName')}
                //   value={values.bridgeNepaliName}
                className="h-12 px-2 bg-white"
              />
            </View>
            <View className="mb-4">
              <TextInput
                label="संस्थाको मुख्य व्यक्तिको फोन"
                mode="outlined"
                placeholder="संस्थाको मुख्य व्यक्तिको फोन"
                //   onChangeText={handleChange('bridgeNepaliName')}
                //   value={values.bridgeNepaliName}
                keyboardType="numeric"
                className="h-12 px-2 bg-white"
              />
            </View>

            <View className="mb-4">
              <TextInput
                label="संस्थाको मुख्य व्यक्तिको ईमेल"
                mode="outlined"
                placeholder="संस्थाको मुख्य व्यक्तिको ईमेल"
                //   onChangeText={handleChange('bridgeNepaliName')}
                //   value={values.bridgeNepaliName}

                className="h-12 px-2 bg-white"
              />
            </View>
          </View>
        </View>

        <View className="mb-4">
          <TextInput
            label="स्थापना भएको साल"
            mode="outlined"
            placeholder="स्थापना भएको साल"
            //   onChangeText={handleChange('bridgeNepaliName')}
            //   value={values.bridgeNepaliName}

            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4">
          <TextInput
            label="कामदार/सदस्य संख्या "
            mode="outlined"
            placeholder="कामदार/सदस्य संख्या"
            //   onChangeText={handleChange('bridgeNepaliName')}
            //   value={values.bridgeNepaliName}
            className="h-12 px-2 bg-white"
          />
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
                //   onChangeText={handleChange('bridgeNepaliName')}
                //   value={values.bridgeNepaliName}
                className="h-12 px-2 bg-white"
              />
            </View>
            <View className="mb-4">
              <TextInput
                label="Longitude"
                mode="outlined"
                placeholder="Longitude"
                //   onChangeText={handleChange('bridgeNepaliName')}
                //   value={values.bridgeNepaliName}
                className="h-12 px-2 bg-white"
              />
            </View>
          </View>
        </View>

        <View className="mb-4">
          <TextInput
            label="Remarks "
            mode="outlined"
            placeholder="Remarks"
            //   onChangeText={handleChange('bridgeNepaliName')}
            //   value={values.bridgeNepaliName}
            className="h-12 px-2 bg-white"
          />
        </View>

        <View className="mb-4 mx-5">
          <Button className="bg-sky-800 p-1 rounded-md" onPress={() => {}}>
            <Text className="text-lg text-white uppercase">Add</Text>
          </Button>
        </View>
      </View>
    </>
  );
};

export default SangsansthaComponent;

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
