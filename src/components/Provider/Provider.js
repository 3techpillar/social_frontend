import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const Provider = ({src}) => {
  return (
    <View className="flex flex-col items-center justify-center gap-3">
      <Text className="text-base font-bold">Continue with</Text>
      <Image source={src} accessibilityLabel="provider" className="w-12 h-12" />
    </View>
  );
};

Provider.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Provider;
