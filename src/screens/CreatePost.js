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
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import sendIcon from '../../assets/icon/send.png';
import GalleryIcon from '../../assets/icon/camera.png';
import Logo from '../components/Logo';

export default function CreatePost() {
  const navigation = useNavigation();

  // State management
  const [postText, setPostText] = useState('');
  const [images, setImages] = useState([]);

  // Function to handle post submission
  const handlePost = async () => {
    if (postText.trim() === '') {
      Alert.alert('Validation Error', 'Post text cannot be empty');
      return;
    }

    const formData = new FormData();
    formData.append('text', postText);
    images.forEach((image, index) => {
      formData.append(`image${index}`, {
        uri: image.uri,
        name: image.fileName || `image${index}.jpg`,
        type: image.type || 'image/jpeg',
      });
    });

    try {
      const response = await fetch('https://yourapiendpoint.com/posts', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Post created successfully');
        setPostText('');
        setImages([]);
        navigation.goBack();
      } else {
        Alert.alert('Error', result.message || 'Failed to create post');
      }
    } catch (error) {
      console.error('Error posting:', error);
      Alert.alert('Error', 'An error occurred while creating the post');
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
      { mediaType: 'photo', cameraType: 'back', quality: 1 },
      response => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.error) {
          console.error('Camera Error: ', response.error);
        } else {
          const assets = response.assets;
          setImages([...images, ...assets]); // Ensure previous images are retained
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

          <Text className="font-bold text-lg ">Create a Post</Text>

          <TouchableOpacity onPress={handlePost}>
            <Logo source={sendIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Input Area */}
      <View className="p-4">
        <TextInput
          className="text-lg"
          placeholder="What's happening?"
          value={postText}
          onChangeText={setPostText}
          multiline
        />
      </View>

      {/* Image Previews */}
      <ScrollView horizontal className="p-4">
        {images.length > 0 &&
          images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image.uri }}
              className="h-20 w-20 mr-2 rounded-lg"
            />
          ))}
      </ScrollView>

      {/* Footer Section with options */}
      <View className="flex-row justify-around p-3 border-t border-gray-200">
        <TouchableOpacity onPress={pickImages}>
          <View className="items-center">
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
