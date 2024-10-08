import {
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Logo from './Logo';
import menu from '../../assets/icon/menu.png';
import { useNavigation } from '@react-navigation/native';


const HeaderMenu = () => {
  const navigation = useNavigation();
 
  const handleMenuPress = () => {
    navigation.openDrawer();

  };

  return (
    <TouchableOpacity onPress={handleMenuPress}>
      <Logo source={menu} />
    </TouchableOpacity>
  );
};

export default HeaderMenu;
