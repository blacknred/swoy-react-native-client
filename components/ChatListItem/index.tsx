import React from "react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom, Screen } from "../../types";
import { Text, View } from '../Themed';
import styles from './styles';

dayjs.extend(relativeTime);

interface IChatListItemProps {
  chatRoom: ChatRoom;
}

export default ({ chatRoom }: IChatListItemProps) => {
  const navigation = useNavigation();

  const handleNavigate = () => navigation.navigate(Screen.ChatRoom, {
    name: chatRoom.users[1]?.name,
    id: chatRoom.id,
  });

  return (
    <TouchableWithoutFeedback onPress={handleNavigate}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: chatRoom.users.slice(-1)[0].imageUri }} style={styles.avatar} />

          <View style={styles.midContainer}>
            <Text style={styles.username}>{chatRoom.users[1]?.name}</Text>
            <Text numberOfLines={2} style={styles.lastMessage}>{chatRoom.lastMessage?.content}</Text>
          </View>
        </View>
        {/* @ts-ignore */}
        <Text style={styles.time}>{dayjs(chatRoom.lastMessage?.createdAt).fromNow()}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
};