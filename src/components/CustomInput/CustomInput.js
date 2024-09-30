import {View, TextInput} from 'react-native';
import React from 'react';

const CustomInput = (
  {placeholder, type, secureTextEntry = false, required = false},
  value,
) => {
  return (
    <View>
      <TextInput
        value={value}
        keyboardType={type}
        secureTextEntry={secureTextEntry}
        className="bg-secondary border-[2px] border-[#dee5ff] focus:border-[2px] focus:border-primary  my-2 text-black px-4 rounded-xl"
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomInput;
