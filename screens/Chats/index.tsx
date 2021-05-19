import * as React from 'react';
import { FlatList } from 'react-native';
import NewMessageButton from '../../components/NewMessageButton';
import ChatListItem from '../../components/ChatListItem';
import { View } from '../../components/Themed';
import ChatRooms from '../../api/chatRooms.json';
import styles from './styles';

export default () => (
  <View style={styles.container}>
    <FlatList
      renderItem={({ item }) => <ChatListItem chatRoom={item} />}
      keyExtractor={({ id }) => id}
      style={styles.list}
      data={ChatRooms}
    />

    <NewMessageButton />
  </View>
);

