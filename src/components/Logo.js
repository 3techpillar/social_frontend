import {View, Text, Image} from 'react-native';
import React from 'react';

const Logo = ({source}) => {
  return (
    <View>
      <Image source={source} className="h-6 w-6" />
    </View>
  );
};

export default Logo;
