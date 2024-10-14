import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Heading from '../../components/Heading';
import auth from '../../../assets/images/auth.png';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const {Email, setEmail} = useState('');

  const navigation = useNavigation();

  const onSendPressed = () => {
    // console.warn('onSendPressed  ');
    navigation.navigate('ChangePassword');
  };
  const onSignInPressed = () => {
    navigation.navigate('Signin');
  };

  return (
    <View className="w-full h-screen flex flex-col items-center justify-center">
      <View className="w-full">
        <View className="mx-3">
          <View className="w-full flex items-center justify-center mb-5">
            <Image source={auth} alt="Auth" />
          </View>
          <Heading
            title={'Forgot Password'}
            desc={'Enter your email to get verification code !'}
          />

          <CustomInput
            placeholder="Email"
            value={Email}
            setvalue={setEmail}
            type="email-address"
          />

          <CustomButton
            classname="bg-primary text-white"
            text="Send"
            onPress={onSendPressed}
          />
          <Text className="text-center text-base my-5">
            Back to{' '}
            <Text onPress={onSignInPressed} className="font-bold text-primary">
              SignIn
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
