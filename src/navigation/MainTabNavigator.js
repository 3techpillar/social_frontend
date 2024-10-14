import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Settings, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuthStore from '../store/authStore';

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
import CreatePost from '../screens/CreatePost';
import PostScreen from '../screens/PostScreen/Post';
import CreateComplaint from '../screens/CreateComplaint';
import Header from '../components/Header';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingsScreen from '../screens/Settings';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon = ({ source }) => (
  <View className={'flex flex-row justify-center items-center rounded-full'}>
    <Image source={source} tintColor="white" resizeMode="contain" className="w-6 h-6" />
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

// Account edit profile Stack Navigation
const AccountStackNavigator = () => {
  const { isLoggedIn } = useAuthStore();
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
      {/* Protecting CreatePost if not logged in */}
      {isLoggedIn && <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerShown: false }} />}
      {isLoggedIn && <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />}
      {isLoggedIn && <Stack.Screen name="ContactScreen" component={ContactScreen} options={{ headerShown: false }} />}
    </Stack.Navigator>
  );
};

export default function MainTabNavigator() {
  const { isLoggedIn } = useAuthStore();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          tabBarActiveTintColor: '#0C8CE9',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#121212',
            paddingVertical: 10,
            paddingBottom: 5,
            height: 60,
          },
        }}
      >
        {/* Home Screen */}
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            header: () => <Header isAccount={false} />, // Passing isAccount as false for non-account pages
            tabBarIcon: ({focused}) => (
              <TabIcon source={focused ? homeActive : home} />

  )}}
        />

        {/* Post Screen */}
        <Tab.Screen
          name="Post"
          component={PostStackNavigator}
          options={{
            header: () => <Header isAccount={false}/>,
            tabBarIcon: ({ focused }) => <TabIcon source={focused ? postActive : post} />,
          }}
        />

        {/* Complaint Screen */}
        <Tab.Screen
          name="Complaint"
          component={ComplaintStackNavigator}
          options={{
            header: () => <Header isAccount={false}/>,
            tabBarIcon: ({ focused }) => <TabIcon source={focused ? complaintActive : complaint} />,
          }}
        />

        {/* Wallet Screen */}
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            header: () => <Header isAccount={false}/>,
            tabBarIcon: ({ focused }) => <TabIcon source={focused ? walletActive : wallet} />,
          }}
        />

        {/* Account Screen */}
        <Tab.Screen
          name="Account"
          component={AccountStackNavigator}
          options={{
            header: () => <Header isAccount={false}/>,
            tabBarIcon: ({ focused }) => <TabIcon source={focused ? accountActive : account} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
