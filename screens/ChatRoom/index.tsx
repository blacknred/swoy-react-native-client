import * as React from 'react';
import { FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ChatMessage from '../../components/ChatMessage';
import { View, Text } from '../../components/Themed';
import InputBox from '../../components/InputBox';
import Chats from '../../api/chats.json';
import styles from './styles';

export default () => {
  const route = useRoute();
  const messages = Chats.find(ch => ch.id === route.params?.id)?.messages;

  if (!messages) return (
    <View style={styles.container}>
      <Text>No messages yet</Text>
    </View>
  )

  return (
    <ImageBackground source={require('../../assets/images/splash.png')} style={styles.background}>
      <FlatList
        renderItem={({ item }) => <ChatMessage message={item} />}
        keyExtractor={({ id }) => id}
        style={{ width: '100%' }}
        data={messages}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
}

