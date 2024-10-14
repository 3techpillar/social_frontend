import {View, ScrollView} from 'react-native';
import React from 'react';
import PostCard from '../../components/PostCard';

import {posts} from '../../data/data';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation()

  const handlePostPress = (post) => {
    navigation.navigate('SinglePost', { post }); // Navigate to SinglePostScreen
  };

  return (
    <ScrollView className="bg[#F8F9FF] w-full h-full ">
      {posts.map(post => (
        <View key={post.id}>
          <PostCard
            profileImg={post.user.profileImage}
            userName={post.user.name}
            ago={post.timestamp}
            postContent={post.content}
            postImg={post.postImage}
            onPress={() => handlePostPress(post)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
