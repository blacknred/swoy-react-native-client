import React from "react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { TextInput } from "react-native-gesture-handler";
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "../Themed";
import styles from "./styles";

dayjs.extend(relativeTime);

export default () => {
  const [message, setMesssage] = React.useState('');

  const handleSend = () => {
    console.warn(message);
    setMesssage('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name={'laugh-beam'} size={22} color={'grey'} style={styles.icon} />
        <TextInput
          placeholder={'Type a message'}
          onChangeText={setMesssage}
          style={styles.textInput}
          numberOfLines={2}
          value={message}
          multiline
        />

        <Entypo name={'attachment'} size={22} color={'grey'} style={styles.icon} />
        {!message.length && <Fontisto name={'camera'} size={22} color={'grey'} style={styles.icon} />}
      </View>
      <View style={styles.buttonContainer}>
        {message.length ? (
          <MaterialCommunityIcons name={'send'} size={28} color={'white'} onPress={handleSend} />
        ) : (
            <MaterialCommunityIcons name={'microphone'} size={28} color={'white'} />
          )}
      </View>
    </View>
  );
}
