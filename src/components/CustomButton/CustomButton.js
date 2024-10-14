import {View, Text, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, classname, text}) => {
  return (
    <Pressable onPress={onPress}>
      <Text
        className={` text-center rounded-lg font-semibold text-lg  py-4 mt-6  ${classname}`}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
