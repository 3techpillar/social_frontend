import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Avatar from './Avatar';
import likeIcon from '../../assets/icon/like.png';
import likeIconActive from '../../assets/icon/like1.png';
import commentIcon from '../../assets/icon/Comment1.png';
import SaveIconActive from '../../assets/icon/Save1.png';
import shareIcon from '../../assets/icon/Share1.png';
import SaveIcon from '../../assets/icon/Save.png';
import dotmenu from '../../assets/icon/dotmenu.png'; // Import local assets directly
import {useNavigation} from '@react-navigation/native';
import Logo from './Logo';

const PostCard = ({
  profileImg,
  userName,
  ago,
  postContent,
  postImg,
  onPress,
  flag,
}) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  const handleSavePress = () => {
    setIsSave(!isSave);
  };

  const handleToggleDelete = () => {
    setToggleDelete(!toggleDelete);
  };

  const handleOutsidePress = () => {
    if (toggleDelete) {
      setToggleDelete(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View className="relative p-1 bg-[#E6EEFA] border border-[#d0e3ff] rounded-xl px-2 pt-2 pb-5 mx-3 my-2">
        {/* Toggle delete button */}
        {toggleDelete && (
          <TouchableOpacity className="absolute right-7 top-[10px] bg-white border-gray-100 px-4 py-2 rounded-lg">
            <Text>Delete</Text>
          </TouchableOpacity>
        )}

        {/* User info section */}
        <TouchableOpacity onPress={onPress}>
          <View className="flex flex-row justify-between pt-2">
            <View className="flex-row items-center pl-2">
              <Avatar imageUrl={profileImg} altName={userName} />
              <View className="ml-3">
                <Text className="font-semibold text-black">{userName}</Text>
                <Text>{ago}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleToggleDelete}>
              <Logo source={dotmenu} />
              {/* Directly use imported local image */}
            </TouchableOpacity>
          </View>

          {/* Post content section */}
          <View>
            <Text className="p-3">{postContent?.slice(0, 70)}...</Text>
            <View className="relative">
              {/* Optional flag image */}
              {flag && (
                <Image
                  source={flag}
                  accessibilityLabel="flag"
                  className="w-16 h-16 absolute z-10 -right-2 -top-1"
                />
              )}
              {postImg ? (
                <Image
                  source={{uri: postImg}}
                  className="w-full h-48 rounded-lg"
                  accessibilityLabel="post image"
                />
              ) : null}
            </View>
          </View>
        </TouchableOpacity>

        {/* Icon section (Like, Comment, Share, Save) */}
        <View className="flex flex-row justify-between px-4 mt-3">
          {/* Left side: Like and Comment */}
          <View className="flex flex-row items-center space-x-4">
            <TouchableOpacity onPress={handleLikePress}>
              <Image
                source={isLiked ? likeIconActive : likeIcon} // Use imported local image
                className="w-6 h-6"
                accessibilityLabel="like button"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={commentIcon}
                className="w-6 h-6"
                accessibilityLabel="comment button"
              />
            </TouchableOpacity>
          </View>

          {/* Right side: Share and Save */}
          <View className="flex flex-row items-center space-x-4">
            <TouchableOpacity>
              <Image
                source={shareIcon}
                className="w-6 h-6"
                accessibilityLabel="share button"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSavePress}>
              <Image
                source={isSave ? SaveIconActive : SaveIcon} // Use imported local image
                className="w-6 h-6"
                accessibilityLabel="save button"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PostCard;
