import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Divider} from 'react-native-paper';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ChairmanComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>जम्मा जनसंख्या</Text>
        <Text style={styles.text}>20</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.text}>महिला संख्या</Text>
        <Text style={styles.text}>2</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.text}>पुरुष संख्या</Text>
        <Text style={styles.text}>2</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.text}>बालबालिका संख्या</Text>
        <Text style={styles.text}>4</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.text}>स्वास्थ्य संस्था संख्या</Text>
        <Text style={styles.text}>5</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.text}>शैक्षिक संस्था संख्या</Text>
        <Text style={styles.text}>5</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.text}>उद्योग कल कारखाना संख्या</Text>
        <Text style={styles.text}>10</Text>
      </View>
      <Divider style={styles.divider} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is a message from chairman</Text>
            <Button
              style={styles.button}
              onPress={() => {
                setModalVisible(false);
                // navigation.navigate(NavigationStrings.HOME);
              }}>
              <Text style={styles.buttonText}>Close</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    elevation: 5,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 40,
  },
  button: {
    backgroundColor: '#333',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    borderRadius: 5,
  },
});

export default ChairmanComponent;
