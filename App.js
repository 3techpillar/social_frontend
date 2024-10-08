import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // This must wrap your app
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './src/navigation/MainTabNavigator'
import Header from './src/components/Header';

// Drawer Navigator
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} options={{
        headerStyle: { backgroundColor: '#cbd5e1' },
        headerLeft: () => (
          <View className='pl-5'>
            <Header />
          </View>
        ),
      }} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
