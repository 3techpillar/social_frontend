import {View, Image} from 'react-native';
import React from 'react';

const Avatar = ({imageUrl, altName}) => {
  return (
    <View className="w-10 h-10 rounded-full overflow-hidden border border-black">
      <Image source={{uri: imageUrl}} className="w-10 h-10" alt={altName} />
    </View>
  );
};

export default Avatar;
