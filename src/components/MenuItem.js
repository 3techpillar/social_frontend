import {View, Text, Pressable} from 'react-native';
import React from 'react';

const MenuItem = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} className='mt-1'>
      <Text className='text-xl font-semibold '>{text}</Text>
    </Pressable>
  );
};

export default MenuItem;
