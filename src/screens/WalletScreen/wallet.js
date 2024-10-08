import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Wallet = () => {
  const navigation = useNavigation();

  // Function to handle navigation
  const handlePlayQuiz = () => {
    Linking.openURL('https://newstapri.com/leaderboard')
      .catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View className="flex-1 items-center justify-center relative bg-black">
      {/* Background Image */}
      <Image
        source={{ uri: 'https://wallpapers.com/images/high/mobile-gaming-1080-x-2220-wallpaper-1aadzj9dl6ovlzks.webp' }} // Replace with your background image URL
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3 }} // Set opacity to make the image subtle
      />
      
      {/* Header Text */}
      <Text className="text-4xl font-bold text-white text-center mb-5">Play Quiz</Text>

      {/* Button */}
      <TouchableOpacity
        className="bg-white px-6 py-2 rounded-lg shadow-md"
        onPress={handlePlayQuiz}
      >
        <Text className="text-lg text-orange-500">Play Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Wallet;
