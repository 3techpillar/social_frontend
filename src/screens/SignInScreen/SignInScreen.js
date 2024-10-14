import {View, Text, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import Google from '../../../assets/images/google.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Provider from '../../components/Provider';
import Heading from '../../components/Heading';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // Function to validate email format
  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // Validation function
  const validateForm = () => {
    if (!Email || !Password) {
      Alert.alert('Error', 'Please fill in both fields');
      return false;
    }
    if (!validateEmail(Email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return false;
    }
    return true;
  };

  // Simulate API call to sign in user
  const onSignInPressed = async () => {
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      // Make an API call here
      const response = await fetch('https://yourapi.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      });
      
      const data = await response.json();

      if (response.ok) {
        // Success: navigate to the HomeScreen
        navigation.navigate('HomeScreen');
      } else {
        // Handle error
        Alert.alert('Login Failed', data.message || 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
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
        <View className="absolute -top-64 -right-48 w-[500px] h-[500px] bg-[#c7daf8] rounded-full"></View>
        <View className="absolute -top-64 -right-48 w-[550px] h-[550px] border border-[#c7daf8] rounded-full"></View>
        <View className="absolute -top-64 -right-48 w-[600px] h-[600px] border border-[#c7daf8] rounded-full"></View>
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
            <CustomInput
              placeholder="Password"
              value={Password}
              setvalue={setPassword}
              secureTextEntry={true}
            />
            <CustomButton
              classname="bg-primary text-white"
              text={loading ? 'Logging in...' : 'Login'}
              onPress={onSignInPressed}
              disabled={loading}
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
