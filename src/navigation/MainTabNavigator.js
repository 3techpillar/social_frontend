import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

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
import Complaint from '../screens/ComplaintScreen/Complaint';
import Wallet from '../screens/WalletScreen/wallet';
import {Image, KeyboardAvoidingView, Platform, View} from 'react-native';
import Header from '../components/Header';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePost from '../screens/CreatePost';
import PostScreen from '../screens/PostScreen/Post';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon = ({source}) => (
  <View className={'flex flex-row justify-center items-center rounded-full'}>
    <Image
      source={source}
      tintColor="white"
      resizeMode="contain"
      className="w-6 h-6"
    />
  </View>
);

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SinglePost"
        component={SinglePostScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const PostStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="post"
        component={PostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


export default function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
          tabBarActiveTintColor: '#0C8CE9',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#121212',
            paddingVertical: 10,
            paddingBottom: 5,
            height: 60,
          },
        }}>
        {/* Home Screen */}
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            header: () => <Header isAccount={false} />, // Passing isAccount as false for non-account pages
            tabBarIcon: ({focused}) => (
              <TabIcon source={focused ? homeActive : home} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              // Reset the navigation stack to HomeScreen
              navigation.navigate('home', { screen: 'HomeScreen' });
            },
          })}
        />

        {/* Post Screen */}
        <Tab.Screen
          name="Post"
          component={PostStackNavigator}
          options={{
            header: () => <Header isAccount={false} />,
            tabBarIcon: ({focused}) => (
              <TabIcon source={focused ? postActive : post} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              // Reset the navigation stack to PostScreen
              navigation.navigate('Post', { screen: 'PostScreen' });
            },
          })}
        />

        {/* Complaint Screen */}
        <Tab.Screen
          name="Complaint"
          component={Complaint}
          options={{
            header: () => <Header isAccount={false} />, // Same header for Complaint screen
            tabBarIcon: ({focused}) => (
              <TabIcon source={focused ? complaintActive : complaint} />
            ),
          }}
        />

        {/* Wallet Screen */}
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            header: () => <Header isAccount={false} />, // Same header for Wallet screen
            tabBarIcon: ({focused}) => (
              <TabIcon source={focused ? walletActive : wallet} />
            ),
          }}
        />

        {/* Account Screen */}
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            header: () => <Header isAccount={true} username="John Doe" />, // Custom header for Account screen
            tabBarIcon: ({focused}) => (
              <TabIcon source={focused ? accountActive : account} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
