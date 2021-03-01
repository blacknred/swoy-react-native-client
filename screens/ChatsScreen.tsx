import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import NewMessageButton from '../components/NewMessageButton';
import ChatListItem from '../components/ChatListItem';
import { View } from '../components/Themed';
import ChatRooms from '../api/chatRooms';

export default () => (
  <View style={styles.container}>
    <FlatList
      data={ChatRooms}
      style={styles.list}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ChatListItem chatRoom={item} />}
    />

    <NewMessageButton />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%'
  }
});
