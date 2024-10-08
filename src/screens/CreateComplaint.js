import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'; // Import image picker methods
import sendIcon from '../../assets/icon/send.png'; // Your send icon
import GalleryIcon from '../../assets/icon/camera.png'; // Your camera icon
import EmojiPicker from 'emoji-picker-react';

export default function CreateComplaint() {
  const navigation = useNavigation();

  // State management
  const [complaintText, setComplaintText] = useState('');
  const [images, setImages] = useState([]);

  // Function to handle complaint submission
  const handleComplaint = async () => {
    if (complaintText.trim() === '') {
      Alert.alert('Validation Error', 'Complaint text cannot be empty');
      return;
    }

    const formData = new FormData();
    formData.append('text', complaintText);
    images.forEach((image, index) => {
      formData.append(`image${index}`, {
        uri: image.uri,
        name: image.fileName || `image${index}.jpg`,
        type: image.type || 'image/jpeg',
      });
    });

    // Example API request (replace with your actual endpoint)
    try {
      const response = await fetch('https://yourapiendpoint.com/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Complaint submitted successfully');
        setComplaintText('');
        setImages([]);
        navigation.goBack();
      } else {
        Alert.alert('Error', result.message || 'Failed to submit complaint');
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
      Alert.alert('Error', 'An error occurred while submitting the complaint');
    }
  };

  // Function to pick images from the gallery
  const pickImages = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1, selectionLimit: 4 },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.error('ImagePicker Error: ', response.error);
        } else {
          const assets = response.assets;
          setImages(assets);
        }
      },
    );
  };

  // Function to open the camera
  const openCamera = () => {
    launchCamera(
      { mediaType: 'photo', quality: 1 },
      response => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.error) {
          console.error('Camera Error: ', response.error);
        } else {
          const assets = response.assets;
          setImages([...images, ...assets]); // Add the captured image to the list of images
        }
      },
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header Section */}
      <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
        <View className="w-full flex-row items-center justify-between">
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/03/11/17/31/girl-1250679_640.jpg',
            }}
            className="h-10 w-10 rounded-full"
          />

          <Text className="font-bold text-lg">Create a Complaint</Text>

          <TouchableOpacity onPress={handleComplaint}>
            <Image source={sendIcon} className="h-6 w-6" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Input Area */}
      <View className="p-4">
        <TextInput
          className="text-lg"
          placeholder="What's your complaint?"
          value={complaintText}
          onChangeText={setComplaintText}
          multiline
        />
      </View>

      {/* Image Previews with Labels */}
      <ScrollView horizontal className="p-4">
        {images.length > 0 &&
          images.map((image, index) => (
            <View key={index} className="mr-2">
              <Image
                source={{ uri: image.uri }}
                className="h-20 w-20 rounded-lg"
              />
              <Text className="text-xs text-gray-500 text-center "> Complaint </Text>
            </View>
          ))}
      </ScrollView>

      {/* Footer Section with options */}
      <View className="flex-row justify-around p-3 border-t border-gray-200">
        <TouchableOpacity onPress={pickImages}>
          <View className='items-center'>
            <Image
              source={require('../../assets/icon/gallery.png')}
              className="h-6 w-6"
            />
            <Text className="text-blue-500">Gallery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openCamera}>
          <View className="items-center">
            <Image source={GalleryIcon} className="h-6 w-6" />
            <Text className="text-blue-500">Camera</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
