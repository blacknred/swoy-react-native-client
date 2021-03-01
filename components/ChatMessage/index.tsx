import React from "react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Text, View } from "../Themed";
import { Message } from "../../types";
import styles from "./styles";

dayjs.extend(relativeTime);

interface IChatMessageProps {
  message: Message;
};

export default ({ message }: IChatMessageProps) => {
  const isMyMessage = message.user?.id === 'u1';

  return (
    <View style={styles.container}>
      <View style={[styles.messageBox, isMyMessage ? styles.myMessageBox : null]}>
        {!isMyMessage && <Text style={styles.name}>{message.user?.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
}
