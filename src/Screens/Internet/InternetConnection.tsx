import React, {useEffect, useState} from 'react';

import NetInfo from '@react-native-community/netinfo';
import {Alert, Text, View} from 'react-native';
import Home from '../Home/Home';

const InternetConnection = () => {
  const [isConnected, setConnected] = useState<any>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
      if (!state.isConnected) {
        showAlert();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const showAlert = () => {
    Alert.alert(
      'Internet Connection',
      'You are offline. Some features may not be available.',
    );
  };
  return isConnected ? (
    <Home />
  ) : (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl text-black">No Internet </Text>
    </View>
  );
};

export default InternetConnection;
