import { View } from 'react-native';
import React from 'react';

import AuthStack from './src/navigation/AuthStack';
import MainTabNavigator from './src/navigation/MainTabNavigator';

const App = () => {
  return (
    <View className="bg-white-700 w-full h-full">

      {/* <AuthStack/> */}
      <MainTabNavigator />
    </View>
  ); 
};

export default App;
