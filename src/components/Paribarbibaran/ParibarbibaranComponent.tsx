import {View, Text, SafeAreaView, Modal} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const ParibarbibaranComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text className="text-lg text-black">पारिवारिक विवरण</Text>

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
    marginTop: 10,
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

export default ParibarbibaranComponent;
