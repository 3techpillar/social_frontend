import React from 'react';
import { View, Text, FlatList } from 'react-native';

const NotificationScreen = () => {
  const notifications = [
    { id: '1', message: 'New friend request received' },
    { id: '2', message: 'Your post was liked by John' },
    { id: '3', message: 'You have a new comment on your post' },
  ];

  const renderNotification = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text>{item.message}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NotificationScreen;
