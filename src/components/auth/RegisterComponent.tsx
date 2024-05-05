import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {Button, TextInput} from 'react-native-paper';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';

const RegisterComponent = ({
  values,
  handleChange,
  errors,
  handleSubmit,
}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView className="bg-white">
      <View className="h-full">
        <View className="h-16 bg-[#2471A3]">
          <Svg
            height={200}
            // width={Dimensions.get('screen').width}
            viewBox="0 0 1400 320">
            <Path
              opacity="1"
              fill="#2471A3"
              d="M0,32L60,64C120,96,240,160,360,165.3C480,171,600,117,720,101.3C840,85,960,107,1080,149.3C1200,192,1320,256,1380,288L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </Svg>
        </View>
        <View className="flex-1 space-y-3 justify-center mx-5">
          <View className="justify-center items-center mt-8">
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png',
              }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
              }}
            />
          </View>
          <View className="space-y-3">
            <TextInput
              className="bg-white px-2 rounded-full"
              mode="outlined"
              outlineColor="black"
              activeOutlineColor="black"
              placeholder="name"
              onChangeText={handleChange('fullname')}
              value={values.fullname}
              outlineStyle={{borderRadius: 50}}
              textColor="#222"
              label="fullname"
            />
            {errors?.fullname && (
              <Text className="text-red-500 ml-1">{errors?.fullname}</Text>
            )}

            <TextInput
              className="bg-white px-2 rounded-full"
              mode="outlined"
              outlineColor="black"
              activeOutlineColor="black"
              placeholder="email"
              // onChangeText={handleChange('email')}
              onChangeText={text => handleChange('email')(text.trim())}
              value={values.email}
              outlineStyle={{borderRadius: 50}}
              textColor="#222"
              label="email"
            />
            {errors?.email && (
              <Text className="text-red-500 ml-1">{errors?.email}</Text>
            )}
            <TextInput
              className="bg-white px-2"
              mode="outlined"
              outlineColor="black"
              activeOutlineColor="black"
              placeholder="password"
              onChangeText={handleChange('password')}
              value={values.password}
              outlineStyle={{borderRadius: 50}}
              secureTextEntry
              label="password"
            />
            {errors?.password && (
              <Text className="text-red-500 ml-1">{errors?.password}</Text>
            )}

            <TextInput
              className="bg-white px-2"
              mode="outlined"
              outlineColor="black"
              activeOutlineColor="black"
              placeholder="confirm password"
              onChangeText={handleChange('confirm_password')}
              value={values.confirm_password}
              outlineStyle={{borderRadius: 50}}
              secureTextEntry
              label="confirm password"
            />
            {errors?.confirm_password && (
              <Text className="text-red-500 ml-1">
                {errors?.confirm_password}
              </Text>
            )}

            <Button
              onPress={() => handleSubmit()}
              className="bg-cyan-700"
              style={{
                elevation: 6,
                shadowRadius: 15,
                shadowOffset: {width: 1, height: 13},
              }}>
              <Text className="text-white text-base tracking-widest">
                Register
              </Text>
            </Button>
          </View>

          {/* <Divider />

      <View className="justify-center items-center">
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={login}
        />
      </View> */}

          <View className="flex-row justify-center items-center space-x-1">
            <Text className="text-center text-base">
              Alread have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(NavigationStrings.LOGIN)}>
              <Text className="text-base text-sky-900">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterComponent;
