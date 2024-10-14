import React, { useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native'; // Import useIsFocused hook
import PostCard from '../../components/PostCard';
import { posts } from '../../data/data';
import HandleUpload from '../../components/HandleUpload';
import Postflag from '../../../assets/icon/Postflag.png';
import useAuthStore from '../../store/authStore';
import CustomButton from '../../components/CustomButton';
import plus from '../../../assets/icon/plus.png';

const PostScreen = () => {
  const { isLoggedIn } = useAuthStore();
  const navigation = useNavigation();
  const isFocused = useIsFocused(); // Check if the screen is focused

  // Effect to refresh or reload the screen when it's focused again
  useEffect(() => {
    if (isFocused) {
      // You can add logic to re-fetch posts or force re-render here
      console.log('Screen is focused, refresh content if necessary');
    }
  }, [isFocused]); // Trigger useEffect whenever the screen focus state changes

  const handleUploadComplete = () => {
    // Reset navigation after the upload is done
    navigation.reset({
      index: 0,
      routes: [{ name: 'PostScreen' }], // Ensure PostScreen is the first in the stack
    });
  };

  return (
    <View className="relative flex-1 bg-[#FFE1FF]">
      {/* Scrollable content */}
      {isLoggedIn ? (
        <ScrollView className="w-full h-full">
          {posts.map((post) => (
            <View key={post.id}>
              <PostCard
                profileImg={post.user.profileImage}
                userName={post.user.name}
                ago={post.timestamp}
                postContent={post.content}
                postImg={post.postImage}
                flag={Postflag}
              />
            </View>
          ))}
        </ScrollView>
      ) : (
        <CustomButton
          classname="bg-primary text-white"
          text="Login"
          onPress={() => navigation.navigate('Signin')}
        />
      )}

      {/* HandleUpload fixed at bottom right above tab bar */}
      <View className="absolute z-10 right-4 bottom-4">
        {isLoggedIn ? (
          <HandleUpload routeName="CreatePost" onUploadComplete={handleUploadComplete} />
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('Signin')}
            className="p-3 rounded-full bg-primary">
            <Image
              source={plus}
              style={{ width: 40, height: 40, tintColor: 'white' }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PostScreen;
