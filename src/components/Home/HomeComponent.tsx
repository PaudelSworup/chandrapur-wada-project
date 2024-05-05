import {
  View,
  Text,
  SafeAreaView,
  Animated,
  ImageBackground,
  Modal,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';
import {useAppSelector} from '../../store/store';
// import NetInfo from '@react-native-community/netinfo';
// import LaunchScreen from '../../Screens/LaunchScreen';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-100)).current;
  const [isConnected, setIsConnected] = useState<any>(true); // Assume connected initially
  const {name, token} = useAppSelector(state => state.users);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    const fadeInAndSlideIn = () => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 3000, // Duration for opacity animation
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 5000, // Duration for translateY animation (slower than opacity)
          useNativeDriver: true,
        }),
      ]).start();
    };

    fadeInAndSlideIn();

    const timeout = setTimeout(() => {
      if (name && token) {
        navigation.navigate(NavigationStrings.DRAWER);
      } else {
        navigation.navigate(NavigationStrings.LOGIN);
      }
    }, 5000);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, [fadeAnim]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        blurRadius={1}
        source={{
          uri: 'https://img.freepik.com/premium-vector/abstract-blue-transparent-flow-wave-with-shadow-design-element_206325-733.jpg',
        }}>
        <View style={styles.contentContainer}>
          <Animated.Image
            // source={{
            //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5skA6oe5wuXn8GFzXNFaQtl_SEewwqRFPv9sD5u7y3A&s',
            // }}
            source={require('../../user.jpg')}
            style={[
              styles.profileImage,
              {opacity: fadeAnim, transform: [{translateY: translateY}]},
            ]}
          />
          <Animated.Text
            style={[
              styles.title,
              {opacity: fadeAnim, transform: [{translateY: translateY}]},
            ]}>
            रवि देवकोटा
          </Animated.Text>
          <Text style={styles.subtitle}>
            चंद्रपुर नगरपालिका वडा नं ३ मा यहाँलाई स्वागत छ
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    marginBottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
  },
  closeButton: {
    backgroundColor: '#333',
    marginTop: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    borderRadius: 5,
    padding: 10,
  },
});

export default Home;
