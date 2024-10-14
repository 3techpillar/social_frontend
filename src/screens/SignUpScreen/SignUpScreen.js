import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import Google from '../../../assets/images/google.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Provider from '../../components/Provider';
import Heading from '../../components/Heading';
import { Picker } from '@react-native-picker/picker'; // Add Picker for the dropdown
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [State, setState] = useState('Uttar Pradesh'); // Fixed state as 'Uttar Pradesh'
  const [City, setCity] = useState('');
  const [WardNo, setWardNo] = useState('');
  const [wards, setWards] = useState([]); // State to store ward numbers based on the city

  const navigation = useNavigation();

  // Sample data for cities and wards. In real cases, fetch it from an API.
  const cityWardData = {
    'Lucknow': ['Ward 1', 'Ward 2', 'Ward 3'],
    'Varanasi': ['Ward 10', 'Ward 11', 'Ward 12'],
    'Kanpur': ['Ward 21', 'Ward 22', 'Ward 23'],
  };

  // Validation logic
  const validateForm = () => {
    if (!Username || !Email || !Password || !Phone || !City || !WardNo) {
      Alert.alert('Error', 'Please fill all fields!');
      return false;
    }
    return true;
  };

  const onSignUpPressed = () => {
    if (validateForm()) {
      console.warn('Form submitted successfully!');
      // Navigate to HomeScreen or do API call for signup
      navigation.navigate('HomeScreen');
    }
  };

  const onCityChange = (selectedCity) => {
    setCity(selectedCity);
    setWardNo(''); // Clear the ward number on city change
    setWards(cityWardData[selectedCity] || []); // Update ward options based on selected city
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full">
      <View className="mt-12 mx-3">
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

        {/* Fixed State */}
        <CustomInput
          placeholder="State"
          value={State}
          setvalue={setState}
          editable={false} // Prevent user from changing the state
        />

        {/* City Dropdown */}
        <View className="bg-secondary border-[2px] border-[#dee5ff] focus:border-[2px] focus:border-primary  my-2 text-black px-4 rounded-xl">
          <Picker
            selectedValue={City}
            onValueChange={(itemValue) => onCityChange(itemValue)}
          >
            <Picker.Item label="Select City" value="" />
            <Picker.Item label="Lucknow" value="Lucknow" />
            <Picker.Item label="Varanasi" value="Varanasi" />
            <Picker.Item label="Kanpur" value="Kanpur" />
            {/* Add more cities or fetch them from an API */}
          </Picker>
        </View>

        {/* Ward No Dropdown */}
        {City && (
          <View  className="bg-secondary border-[2px] border-[#dee5ff] focus:border-[2px] focus:border-primary  my-2 text-black px-4 rounded-xl">
            <Picker
              selectedValue={WardNo}
              onValueChange={(itemValue) => setWardNo(itemValue)}
            >
              <Picker.Item label="Select Ward No" value="" />
              {wards.map((ward, index) => (
                <Picker.Item key={index} label={ward} value={ward} />
              ))}
            </Picker>
          </View>
        )}

        <CustomButton
          classname="bg-primary text-white"
          text="SignUp"
          onPress={onSignUpPressed}
        />
        <Text className="text-center text-base my-5">
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('Signin')} className="font-bold text-primary">
            SignIn
          </Text>
        </Text>
        <Provider src={Google} />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
