import {View, ScrollView} from 'react-native';
import React from 'react';
import PostCard from '../../components/PostCard';
import {posts} from '../../data/data';
import HandleUpload from '../../components/HandleUpload';
import complaintFlag from '../../../assets/icon/flag.png';


const ComplaintScreen = () => {
  return (
    <View className="relative flex-1 bg-[#6d74f1]">
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
              flag={complaintFlag}
            />
          </View>
        ))}
      </ScrollView>

      {/* HandleUpload fixed at bottom right above tab bar */}
      <View className="absolute z-10 right-4 bottom-4">
        {/* Pass the correct route name to navigate to "CreateComplaint" screen */}
        <HandleUpload routeName="CreateComplaint" />
      </View>
    </View>
  );
};

export default ComplaintScreen;
