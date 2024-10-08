import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation(); // Hook to access the navigation object

  return (
    <View className="flex-1 items-center bg-white">

      {/* Profile Section */}
      <View className="items-center mt-4">
        {/* Profile Picture */}
        <Image
          source={{ uri: 'https://picsum.photos/200' }} // Replace with actual profile image
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        {/* User Info */}
        <Text className="text-xl font-bold mt-2">Jacob West</Text>
        <Text className="text-center text-gray-500">Digital goodies designer{"\n"}#software Developer</Text>
        <Text className="text-center text-gray-500 mt-1">Joined September 2018</Text>
        <Text className="text-blue-500 mt-1">pixsellz.io</Text>

        {/* Buttons */}
        <View className="flex-row mt-4 space-x-4">
          <TouchableOpacity
            className="border border-blue-500 px-4 py-2 rounded-full"
            onPress={() => navigation.navigate('EditProfile')} // Navigate to EditProfile screen
          >
            <Text className="text-blue-500">Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-blue-500 px-4 py-2 rounded-full">
            <Text className="text-blue-500">Contact</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Options Section */}
      <View className="w-full mt-8 space-y-4 px-4">
        <TouchableOpacity className="bg-gray-100 p-4 rounded-md">
          <Text className="text-gray-600">Quiz History</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-100 p-4 rounded-md">
          <Text className="text-gray-600">Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-100 p-4 rounded-md"
          onPress={() => navigation.navigate('Settings')} // Navigate to Settings screen
        >
          <Text className="text-gray-600">Setting & Privacy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;
