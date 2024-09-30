import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

// Import your images for like, comment, share, and save
import likeIcon from '../../assets/icon/like.png';
import likeIconActive from '../../assets/icon/like1.png';
import commentIcon from '../../assets/icon/Comment1.png';
import SaveIconActive from '../../assets/icon/Save1.png';
import shareIcon from '../../assets/icon/Share1.png';
import SaveIcon from '../../assets/icon/Save.png';
import Avatar from '../components/Avatar';

const SinglePostScreen = ({route}) => {
  const {post} = route.params;

  const [isLiked, setIsLiked] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [comments, setComments] = useState(post.comments || []); // Initialize comments from post
  const [newComment, setNewComment] = useState('');

  // Function to toggle the liked state
  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  // Function to toggle the save state
  const handleSavePress = () => {
    setIsSave(!isSave);
  };

  // Function to add a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, {id: comments.length + 1, text: newComment}]);
      setNewComment(''); // Clear the input field
    }
  };

  return (
    <View className="flex-1 p-3">
      <View>
        <View className="flex flex-row items-center gap-3 px-3">
          <View>
            <Avatar
              imageUrl={post.user.profileImage}
              altName={post.user.name}
            />
          </View>
          <View>
            <Text className="text-lg font-bold text-black">{post.user.name}</Text>
            <Text className="text-gray-500">{post.timestamp}</Text>
          </View>
        </View>
        <Text className="p-3 text-black font-normal text-xl">{post.content}</Text>
        <Image
          source={{uri: post.postImage}}
          className="w-full h-48 rounded-lg"
          alt="Post Image"
        />
      </View>

      <View className="flex flex-row justify-between px-4 mt-3">
        <View className="flex flex-row items-center space-x-4">
          <TouchableOpacity onPress={handleLikePress}>
            <Image
              source={isLiked ? likeIconActive : likeIcon}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center space-x-4">
          <TouchableOpacity>
            <Image source={shareIcon} className="w-6 h-6" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSavePress}>
            <Image
              source={isSave ? SaveIconActive : SaveIcon}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Comment Section */}
      <View className="mt-5">
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Add a comment..."
          className="border border-gray-400 rounded p-2 mt-2"
        />
        <TouchableOpacity
          onPress={handleAddComment}
          className="bg-blue-500 p-2 rounded mt-2">
          <Text className="text-white text-center">Add a comment</Text>
        </TouchableOpacity>

        <FlatList
          data={comments}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View className="border-b border-gray-300 p-2">
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default SinglePostScreen;
