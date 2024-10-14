import { View, TextInput } from 'react-native';
import React from 'react';

const CustomInput = ({
  placeholder,
  type = 'default', // Default keyboard type
  secureTextEntry = false,
  required = false,
  value,
  onChangeText, // Function to handle text input changes
}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText} // Handle changes
        keyboardType={type} // Set keyboard type
        secureTextEntry={secureTextEntry} // Enable secure text entry for password fields
        className="bg-secondary border-[2px] border-[#dee5ff] focus:border-[2px] focus:border-primary my-2 text-black px-4 rounded-xl"
        placeholder={placeholder} // Placeholder text
        accessibilityLabel={placeholder} // Improve accessibility
      />
    </View>
  );
};

export default CustomInput;
