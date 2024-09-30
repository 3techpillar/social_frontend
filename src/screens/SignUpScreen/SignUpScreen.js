import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Google from '../../../assets/images/google.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Provider from '../../components/Provider';
import Heading from '../../components/Heading';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');
  const [WardNo, setWardNo] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Signin');
  };
  const onSignUpPressed = () => {
    console.warn('onSignUpPress');
    navigation.navigate('HomeScreen');
  };
  const onSignInGoogle = () => {
    console.warn('Sign In Google');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full">
      <View className=" mt-12 mx-3">
        <Heading
          title={'Create your Account'}
          desc={'Create an account so you can explore'}
        />
        <CustomInput
          placeholder="Username"
          value={Username}
          setvalue={setUsername}
        />
        <CustomInput
          placeholder="Email"
          value={Email}
          setvalue={setEmail}
          type="email-address"
        />
        <CustomInput
          placeholder="Password"
          value={Password}
          setvalue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Phone"
          value={Phone}
          setvalue={setPhone}
          type="number-pad"
        />

        <CustomInput placeholder="State" value={State} setvalue={setState} />

        <CustomInput placeholder="City" value={City} setvalue={setCity} />

        <CustomInput
          placeholder="Ward No"
          value={WardNo}
          setvalue={setWardNo}
        />
        <CustomButton
          classname="bg-primary text-white"
          text="SignUp"
          onPress={onSignUpPressed}
        />
        <Text className="text-center text-base my-5">
          Already have an account?{' '}
          <Text onPress={onSignInPressed} className="font-bold text-primary">
            SignIn
          </Text>
        </Text>
        <Provider src={Google} />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
