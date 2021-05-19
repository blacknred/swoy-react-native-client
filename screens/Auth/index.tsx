import React, { useState } from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../../components/Themed';
import API from '../../api';
import styles from './styles';

interface IAuthScreenProps {
  render: () => void
}

export default ({ render }: IAuthScreenProps) => {
  const [name, setName] = useState('');

  const handleAuth = async () => {
    try {
      console.warn(`auth ${name}...`);
      const { id } = await API.getUser({ name });
      render();
    } catch (e) {
      console.warn("user not found");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Auth</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Type a name'}
          onChangeText={setName}
          value={name}
        />
        <Button disabled={!name.length} title={' Login '} onPress={handleAuth} />
      </View>
    </View>
  )
};

