import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import PostCard from '../../components/PostCard';
import { posts } from '../../data/data';
import HandleUpload from '../../components/HandleUpload';
import Postflag from '../../../assets/icon/Postflag.png';
import useAuthStore from '../../store/authStore';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

import plus from '../../../assets/icon/plus.png';


const PostScreen = () => {
  const { isLoggedIn } = useAuthStore();
  const navigation = useNavigation()
  return (
    <View className="relative flex-1 bg-[#FFE1FF]">
      {/* Scrollable content */}
      {isLoggedIn ? (
        <ScrollView className="w-full h-full">
        {posts.map(post => (
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
        <CustomButton classname="bg-primary text-white" text="Login" onPress={() => navigation.navigate('Login') } />
      )}
      

      {/* HandleUpload fixed at bottom right above tab bar */}
      
      <View className="absolute z-10 right-4 bottom-4">
      {isLoggedIn ? (

        <HandleUpload routeName="CreatePost" />
      ) : (
        <TouchableOpacity
      onPress={() => navigation.navigate("Login")}
      className="p-3 rounded-full bg-primary">
      <Image
        source={plus}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 40, height: 40, tintColor: 'white'}}
      />
    </TouchableOpacity>
      )}
      </View>
    </View>
  );
};

export default PostScreen;
