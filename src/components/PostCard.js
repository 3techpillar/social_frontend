import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Avatar from './Avatar';

// Import your images for like, comment, share, and save
import likeIcon from '../../assets/icon/like.png';
import likeIconActive from '../../assets/icon/like1.png'; // Active state image for like
import commentIcon from '../../assets/icon/Comment1.png';
import SaveIconActive from '../../assets/icon/Save1.png';
import shareIcon from '../../assets/icon/Share1.png';
import SaveIcon from '../../assets/icon/Save.png';
import { useNavigation } from '@react-navigation/native'; // Corrected import

const PostCard = ({ profileImg, userName, ago, postContent, postImg, onPress }) => {
  const navigation = useNavigation(); // Moved inside the component

  // State to track if the post is liked or not
  const [isLiked, setIsLiked] = useState(false);

  // Function to toggle the liked state
  const handleLikePress = () => {
    setIsLiked(!isLiked); // Toggle between true and false
  };


  const [isSave, setIsSave] = useState(false);

  // Function to toggle the saved state
  const handleSavePress = () => {
    setIsSave(!isSave); // Toggle between true and false
  };

  return (
    <View className="p-1 bg-[#E6EEFA] border border-[#d0e3ff] rounded-xl px-2 pt-2 pb-5 mx-3 my-2">
      {/* User info section */}
      <TouchableOpacity onPress={onPress}>
        <View className="flex-row items-center pl-2 pt-2">
          <Avatar imageUrl={profileImg} altName={userName} />
          <View className='ml-3'>
            <Text className='font-semibold text-black'>{userName}</Text>
            <Text>{ago}</Text>
          </View>
        </View>

        {/* Post content section */}
        <View>
          <Text className="p-3">{postContent.slice(0, 70)}...</Text>
          <Image
            source={{ uri: postImg }}
            className="w-full h-48 rounded-lg"
            alt="post image"
          />
        </View>
      </TouchableOpacity>

      {/* Icon section (Like, Comment, Share, Save) */}
      <View className="flex flex-row justify-between px-4 mt-3">
        {/* Left side: Like and Comment */}
        <View className="flex flex-row items-center space-x-4">
          <TouchableOpacity onPress={handleLikePress}>
            <Image
              source={isLiked ? likeIconActive : likeIcon} // Toggle between active and inactive like icon
              className="w-6 h-6"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Image source={commentIcon} className="w-6 h-6" />
          </TouchableOpacity>
        </View>

        {/* Right side: Share and Save */}
        <View className="flex flex-row items-center space-x-4">
          <TouchableOpacity>
            <Image source={shareIcon} className="w-6 h-6" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSavePress}>
            <Image
              source={isSave ? SaveIconActive : SaveIcon} // Toggle between active and inactive save icon
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
