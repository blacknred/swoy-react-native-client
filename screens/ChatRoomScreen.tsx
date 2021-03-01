import * as React from 'react';
import { StyleSheet, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ChatMessage from '../components/ChatMessage';
import { View, Text } from '../components/Themed';
import InputBox from '../components/InputBox';
// @ts-ignore
import bg from '../assets/images/splash.png';
import Chats from '../api/chats';

export default () => {
  const route = useRoute();
  const messages = Chats.find(ch => ch.id === route.params?.id)?.messages;

  if (!messages) return (
    <View style={styles.container}>
      <Text>No messages yet</Text>
    </View>
  )

  return (
    <ImageBackground source={bg} style={styles.background}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%'
  }
});
