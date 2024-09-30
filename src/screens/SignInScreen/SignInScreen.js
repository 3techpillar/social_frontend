import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Google from '../../../assets/images/google.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Provider from '../../components/Provider';
import Heading from '../../components/Heading';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  //{navigation}
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('HomeScreen');
  };
  const onForgotpasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    navigation.navigate('Signup');
  };
  const onSignInGoogle = () => {
    console.warn('Sign In Google');
  };
  return (

    <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full">
      <View className="relative w-full h-screen flex flex-col items-center justify-center">
        <View className='absolute -top-64 -right-48 w-[500px] h-[500px] bg-[#c7daf8] rounded-full'></View>
        <View className='absolute -top-64 -right-48 w-[550px] h-[550px] border border-[#c7daf8] rounded-full'></View>
        <View className='absolute -top-64 -right-48 w-[600px] h-[600px] border border-[#c7daf8] rounded-full'></View>
        <View className="w-full">
          <View className="mx-3">
            <Heading
              title={'Login Here'}
              desc={"Welcome back you've been missed!"}
            />
            <CustomInput
              placeholder="Email"
              value={Email}
              setvalue={setEmail}
              type="email-address"
            />
            {/* <CustomInput placeholder="Email" type="email-address"/>
     <CustomInput placeholder="Phone" type="number-pad"/> */}
            <CustomInput
              placeholder="Password"
              value={Password}
              setvalue={setPassword}
              secureTextEntry={true}
            />
            <CustomButton
              classname="bg-primary text-white"
              text="Login"
              onPress={onSignInPressed}
            />
            <Text
              onPress={onForgotpasswordPressed}
              className="text-right text-primary font-medium mr-2 mt-3 text-base">
              Forgot your password
            </Text>
            <Text className="text-center text-base my-5">
              Don't have an account?{' '}
              <Text
                onPress={onSignUpPressed}
                className="font-bold text-primary">
                Signup
              </Text>
            </Text>
            <Provider src={Google} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
