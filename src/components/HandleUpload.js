import React from 'react';
import { Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import plus from '../../assets/icon/plus.png';

const HandleUpload = ({routeName}) => {
  const navigation = useNavigation();

  const handleUploadPress = () => {
    navigation.navigate(routeName); // Navigates to the CreatePost screen
  };

  return (
    <TouchableOpacity
      onPress={handleUploadPress}
      className="p-3 rounded-full bg-primary">
      <Image
        source={plus}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 40, height: 40, tintColor: 'white'}}
      />
    </TouchableOpacity>
  );
};

export default HandleUpload;
