import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';

import notification from '../../assets/icon/notification.png';
import search from '../../assets/icon/Search.png';
import LogoImage from '../../assets/icon/Logo.png';
import Logo from './Logo';
import menu from '../../assets/icon/menu.png';
import close from '../../assets/icon/close.png';
import MenuItem from './MenuItem';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const Header = ({isAccount, username}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  const slideAnim = useRef(
    new Animated.Value(isAccount ? screenWidth : -screenWidth),
  ).current; // Start position off-screen (left)
  const opacityAnim = useRef(new Animated.Value(0)).current; // Start with no opacity

  const handleMenuPress = () => {
    if (isOpen) {
      // Close menu
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: isAccount ? screenWidth : -screenWidth, // Slide out of view (to the left)
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0, // Fade out overlay
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => setIsOpen(false));
    } else {
      // Open menu
      setIsOpen(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0, // Slide into view (from the left)
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.7, // Fade in overlay
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const homeNavigate = () => {
    navigation.navigate('home');
  };

  const handleSearchPress = () => {
    navigation.navigate('search');
  };

  const handleNotificationPress = () => {
    navigation.navigate('NotificationScreen');
  };

  return (
    <View className="w-full px-5 py-3 bg-slate-300 flex flex-row items-center justify-between">
      {/* Left side - Menu */}
      {isAccount ? (
        <Text className="text-lg font-bold">{username}</Text>
      ) : (
        <TouchableOpacity onPress={handleMenuPress}>
          <Logo source={menu} />
        </TouchableOpacity>
      )}

      {/* Center - Username or Logo */}
      <View className="absolute inset-x-0 flex items-center justify-center">
        {isAccount ? (
          <Text className="text-lg font-bold"></Text>
        ) : (
          <Pressable onPress={homeNavigate}>
            <Image source={LogoImage} alt="logo" className="h-10 w-10" />
          </Pressable>
        )}
      </View>

      {/* Right side - Search and Notifications (Hidden on Account screen) */}
      {!isAccount ? (
        <View className="w-1/3 flex flex-row items-center justify-end gap-4">
          <TouchableOpacity onPress={handleSearchPress}>
            <Logo source={search} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNotificationPress}>
            <Logo source={notification} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={handleMenuPress}>
          <Logo source={menu} />
        </TouchableOpacity>
      )}

      {/* Dark Overlay */}
      {isOpen && (
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '115%',
            height: screenHeight, // Use screenHeight for full screen coverage
            backgroundColor: 'black',
            opacity: opacityAnim,
            zIndex: 5,
          }}>
          <TouchableOpacity style={{flex: 1}} onPress={handleMenuPress} />
        </Animated.View>
      )}

      {/* Sliding Menu (from the left) */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: isAccount ? undefined : 0,
          right: isAccount ? 0 : undefined,
          width: '70%', // You can adjust width if needed
          height: screenHeight, // Full screen height
          backgroundColor: 'white',
          transform: [{translateX: slideAnim}], // Sliding animation from left
          zIndex: 10,
          padding: 16,
        }}>

        {/* Close Button */}
        <TouchableOpacity
          onPress={handleMenuPress}
          className={`absolute ${isAccount ? 'left-2' : 'right-2'} top-2`}>
          <Logo source={close} />
        </TouchableOpacity>

        {/* Menu Content */}
        <View className="mt-12">
          <View className=" p-4 text-xl font-bold mt-8">
            <MenuItem
              onPress={() => {
                navigation.navigate('CreatePost');
                handleMenuPress(); // Close menu after navigation
              }}
              text={isAccount ? 'Saved Posts' : 'Create Post'}
            />
            <MenuItem
              onPress={() => {
                navigation.navigate('CreateComplaint');
                handleMenuPress(); // Close menu after navigation
              }}
              text={'Create Complaint'}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Header;
