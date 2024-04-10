import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';

const CustomDrawer = (props: any) => {
  return (
    <View className="flex-1">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'black'}}>
        <ImageBackground
          className="p-3 flex-row"
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
          <Text className="text-white mt-3 ml-2">John doe</Text>
          {/* </View> */}
        </ImageBackground>
        <View className="bg-white pt-[10px]">
          <DrawerItemList {...props} />
          <Divider className="border border-black" />
        </View>
      </DrawerContentScrollView>

      <View className="p-4 flex-row space-x-3 items-center">
        <Icon name="logout" size={20} color="red" />
        <Text className="text-black font-bold text-lg">Logout</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
