import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

const ContactScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState(''); // State to store phone number

  const handleUpdatePhone = () => {
    if (phoneNumber.length === 10) {
      Alert.alert('Success', 'Your phone number has been updated.');
      // You can add logic here to update the phone number in the backend
    } else {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Contact Us</Text>
      <Text className="text-gray-600 mt-2">You can reach us at support@example.com</Text>

      {/* Phone Number Input */}
      <View className="mt-4 w-3/4">
        <Text className="text-lg">Your Phone Number:</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="number-pad"
          placeholder="Enter your phone number"
          className="border border-gray-300 mt-2 p-2 rounded"
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity
        className="mt-4 bg-blue-500 p-3 rounded-full"
        onPress={handleUpdatePhone}
      >
        <Text className="text-white text-lg">Update Phone Number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactScreen;
