import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation(); // Hook to access the navigation object

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Settings & Privacy</Text>

      {/* Setting Options */}
      <TouchableOpacity className="bg-gray-100 p-4 rounded-md mb-2">
        <Text className="text-gray-600">Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-gray-100 p-4 rounded-md mb-2">
        <Text className="text-gray-600">Privacy Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-gray-100 p-4 rounded-md mb-2">
        <Text className="text-gray-600">Notification Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-gray-100 p-4 rounded-md mb-2">
        <Text className="text-gray-600">Help & Support</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-gray-100 p-4 rounded-md mb-2">
        <Text className="text-gray-600">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
