import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from '../../assets/icon/home.png';
import post from '../../assets/icon/post.png';
import complaint from '../../assets/icon/Complaint.png';
import wallet from '../../assets/icon/wallet.png';
import account from '../../assets/icon/account.png';

import homeActive from '../../assets/icon/home1.png';
import postActive from '../../assets/icon/post1.png';
import complaintActive from '../../assets/icon/Complaint1.png';
import walletActive from '../../assets/icon/wallet1.png';
import accountActive from '../../assets/icon/account1.png';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SinglePostScreen from '../screens/SinglePostScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import ComplaintScreen from '../screens/ComplaintScreen/Complaint';
import Wallet from '../screens/WalletScreen/wallet';
import {Image, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePost from '../screens/CreatePost';
import PostScreen from '../screens/PostScreen/Post';
import CreateComplaint from '../screens/CreateComplaint';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon = ({ source }) => (
  <View className={'flex flex-row justify-center items-center rounded-full'}>
    <Image
      source={source}
      tintColor="#000000"
      resizeMode="contain"
      className="w-6 h-6"
    />
  </View>
);

// Home Stack Navigation
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SinglePost" component={SinglePostScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// Post Stack Navigation
const PostStackNavigator = () => {
  const { isLoggedIn } = useAuthStore();
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="post" component={PostScreen} options={{ headerShown: false }} />
      {/* Protecting CreatePost if not logged in */}
      {isLoggedIn && <Stack.Screen name="CreatePost" component={CreatePost} options={{ headerShown: false }} />}
    </Stack.Navigator>
  );
};

// Complaint Stack Navigation
const ComplaintStackNavigator = () => {
  const { isLoggedIn } = useAuthStore();
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="complaint" component={ComplaintScreen} options={{ headerShown: false }} />
      {/* Protecting CreateComplaint if not logged in */}
      {isLoggedIn && <Stack.Screen name="CreateComplaint" component={CreateComplaint} options={{ headerShown: false }} />}
    </Stack.Navigator>
  );
};

export default function BottomTabNavigator() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#cbd5e1' },
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? homeActive : home; // Replace with your icon
            } else if (route.name === 'Post') {
              iconName = focused ? postActive : post; // Replace with your icon
            } else if (route.name === 'Complaint') {
              iconName = focused ? complaintActive : complaint; // Replace with your icon
            } else if (route.name === 'Wallet') {
              iconName = focused ? walletActive : wallet; // Replace with your icon
            } else if (route.name === 'Account') {
              iconName = focused ? accountActive : account; // Replace with your icon
            }

            return <TabIcon source={iconName} />
          },
          tabBarActiveTintColor: '#000000'
        })}
        >
        {/* Home Screen */}
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
        />

        {/* Post Screen */}
        <Tab.Screen
          name="Post"
          component={PostStackNavigator}
        />

        {/* Complaint Screen */}
        <Tab.Screen
          name="Complaint"
          component={ComplaintStackNavigator}
        />

        {/* Wallet Screen */}
        <Tab.Screen
          name="Wallet"
          component={Wallet}
        />

        {/* Account Screen */}
        <Tab.Screen
          name="Account"
          component={AccountScreen}
        />
      </Tab.Navigator>
  );
}
