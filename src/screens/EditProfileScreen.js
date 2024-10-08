import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
  const [bio, setBio] = useState('Digital goodies designer #software Developer');
  const [city, setCity] = useState('');
  const [wardNumber, setWardNumber] = useState('');
  const [profileImage, setProfileImage] = useState('https://picsum.photos/200'); // Default profile image

  const handleSave = () => {
    // Here you would typically handle saving the updated information, possibly via an API call.
    console.log("Profile updated:", { bio, city, wardNumber, profileImage });
    navigation.goBack(); // Navigate back to the account screen after saving
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Edit Profile</Text>

      <Image
        source={{ uri: profileImage }}
        className="w-24 h-24 rounded-full border-4 border-gray-200 mb-4"
      />
      <TouchableOpacity>
        <Text className="text-blue-500 mb-4">Change Profile Picture</Text>
      </TouchableOpacity>

      <TextInput
        value={bio}
        onChangeText={setBio}
        placeholder="Bio"
        className="border p-2 mb-4 rounded-md"
      />
      <TextInput
        value={city}
        onChangeText={setCity}
        placeholder="City"
        className="border p-2 mb-4 rounded-md"
      />
      <TextInput
        value={wardNumber}
        onChangeText={setWardNumber}
        placeholder="Ward Number"
        className="border p-2 mb-4 rounded-md"
        keyboardType="numeric"
      />

      <TouchableOpacity className="bg-blue-500 p-4 rounded-md" onPress={handleSave}>
        <Text className="text-white text-center">Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;
