import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {dropDownData} from '../../utils/testingData';

const OwnerComponent = () => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="घरमुलीको नाम"
          placeholder="घरमुलीको नाम"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="House Owner Name"
          mode="outlined"
          placeholder="House Owner Name"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="बुबाको नाम"
          placeholder="बुबाको नाम"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="आमाको नाम"
          placeholder="आमाको नाम"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="टोल"
          onChange={item => {}}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="घर नं."
          placeholder="घर नं."
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="मातृभाषा"
          onChange={item => {}}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="जाति"
          onChange={item => {}}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="धर्म"
          placeholder="धर्म"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="नागरिकता नं"
          placeholder="नागरिकता नं"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="values"
          placeholder="नागरिकता लिएको जिल्ला"
          onChange={item => {}}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="स्थायी ठेगाना"
          label="स्थायी ठेगाना"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="फोन नं"
          label="फोन नं"
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="परिवार संख्या"
          label="परिवार संख्या"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="पुरुषको संख्या"
          label="पुरुषको संख्या"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="महिलाको संख्या"
          label="महिलाको संख्या"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="अन्य"
          label="अन्य"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="वयस्कहरूको संख्या (१८ वर्ष भन्दा माथि)"
          label="वयस्कहरूको संख्या"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="वयस्कहरूको संख्या (१८ वर्ष भन्दा मुनि)"
          label="वयस्कहरूको संख्या"
          mode="outlined"
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Add</Text>
        </Button>
      </View>
    </>
  );
};

export default OwnerComponent;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  dropdownContainer: {
    marginBottom: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
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
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase',
  },
});
