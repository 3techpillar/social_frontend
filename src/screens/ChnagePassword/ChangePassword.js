import {View,  Image} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Heading from '../../components/Heading';
import auth from '../../../assets/images/auth.png';
import {useNavigation} from '@react-navigation/native';

const ChangePassword = () => {
  const {code, setcode} = useState('');
  const {newPassword, setnewPassword} = useState('');
  const {ConfirmPassword, setConfirmPassword} = useState('');

  const navigation = useNavigation();

  const onSendPressed = () => {
    // console.warn('onSendPressed  ');
    navigation.navigate('Signin');
  };
  // Regular Expression for Password Validation
  // const validatePassword = (password) => {
  //   const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
  //   return regex.test(password);
  // };

  return (
    <View className="w-full h-screen flex flex-col items-center justify-center">
      <View className="w-full">
        <View className="mx-3">
          <View className="w-full flex items-center justify-center mb-5">
            <Image source={auth} alt="Auth" />
          </View>
          <Heading
            title={'Verify Code, Set Password'}
            desc={'Verify email code and reset password securely.'}
          />
          <CustomInput
            placeholder="Code"
            value={code}
            setvalue={setcode}
            type="number-pad"
          />
          <CustomInput
            placeholder="Confirm Password"
            value={ConfirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true} // Hides input text
          />
          <CustomInput
            placeholder="New Password"
            value={newPassword}
            onChangeText={setnewPassword}
            secureTextEntry={true} // Hides input text
          />
          <CustomButton
            classname="bg-primary text-white"
            text="Send"
            onPress={onSendPressed}
          />
          {/* <Text className="text-center text-base my-5">
            Back to <Text className="font-bold text-primary">Sign In</Text>
          </Text> */}
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
