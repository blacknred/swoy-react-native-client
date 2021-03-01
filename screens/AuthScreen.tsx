import React, { useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

interface IAuthScreenProps {
  onLogin: (name: string) => void
}

export default ({ onLogin }: IAuthScreenProps) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Auth</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setName}
          placeholder={'Type a name'}
          value={name}
        />
        <Button disabled={!name.length} title={' Login '} onPress={() => onLogin(name)} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});
