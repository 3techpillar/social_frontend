import { View, ScrollView } from 'react-native';
import React from 'react';
import PostCard from '../../components/PostCard';
import { posts } from '../../data/data';
import HandleUpload from '../../components/HandleUpload';

const PostScreen = () => {
  return (
    <View className="relative flex-1 bg-[#FFE1FF]">
      {/* Scrollable content */}
      <ScrollView className="w-full h-full">
        {posts.map(post => (
          <View key={post.id}>
            <PostCard
              profileImg={post.user.profileImage}
              userName={post.user.name}
              ago={post.timestamp}
              postContent={post.content}
              postImg={post.postImage}
            />
          </View>
        ))}
      </ScrollView>

      {/* HandleUpload fixed at bottom right above tab bar */}
      <View className="absolute z-10 right-4 bottom-4">
        {/* Pass the correct route name to navigate to "CreatePost" screen */}
        <HandleUpload routeName="CreatePost" />
      </View>
    </View>
  );
};

export default PostScreen;
