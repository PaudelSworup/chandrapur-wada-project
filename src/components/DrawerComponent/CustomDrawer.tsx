import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import {persistor, useAppSelector} from '../../store/store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';
import {useDispatch} from 'react-redux';
import {setFirstCoordinate} from '../../store/coordinateSlice';

const CustomDrawer = (props: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {name} = useAppSelector(state => state.users);

  return (
    <View className="flex-1">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'black'}}>
        <ImageBackground
          className="px-2 py-1 flex-row"
          source={{
            uri: 'https://wallpapers.com/images/hd/plain-dark-black-abstract-m5o78vt2ov9rmypr.jpg',
          }}>
          {/* <View className="flex-row items-center"> */}
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02JWqmmpS8E9w4954KV0FTMO3KX9Ft44fxzFDMnBucg&s',
            }}
            className="w-10 h-10 rounded-full mb-3"
          />
          <Text className="text-white mt-3 ml-2">{name}</Text>
          {/* </View> */}
        </ImageBackground>
        <View className="bg-white pt-[10px]">
          <DrawerItemList {...props} />
          {/* <Divider className="border border-black" /> */}
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity
        onPress={() => {
          dispatch(
            setFirstCoordinate({
              lattitude: 0,
              longitude: 0,
              coordinateType: 'one',
            }),
          );
          persistor.flush();
          persistor.purge();
          navigation.replace(NavigationStrings.LOGIN);
        }}
        className="px-2 py-3 flex-row bg-[#f1efef] space-x-3 items-center">
        <Icon name="logout" size={18} color="red" />
        <Text className="text-black tracking-widest font-bold text-xl">
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
