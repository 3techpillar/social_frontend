import React from 'react';
import useAuthStore from '../store/authStore';
import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthStack';

const RootNavigator = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      {isLoggedIn ? <MainTabNavigator /> : <AuthStack />}
    </>
  );
};

export default RootNavigator;
