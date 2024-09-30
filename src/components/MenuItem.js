import {View, Text} from 'react-native';
import React from 'react';

const MenuItem = ({text}) => {
  return (
    <View className='mt-1'>
      <Text className='text-xl font-semibold '>{text}</Text>
    </View>
  );
};

export default MenuItem;
