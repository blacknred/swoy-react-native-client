import React from "react";
import { Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Screen, User } from "../../types";
import { Text, View } from '../Themed';
import styles from './styles';
interface IContactListItemProps {
  user: User;
}

export default ({ user }: IContactListItemProps) => {
  const navigation = useNavigation();

  const handleNavigate = () => navigation.navigate(Screen.ChatRoom, {
    name: user.name,
    id: user.id,
  });

  return (
    <TouchableWithoutFeedback onPress={handleNavigate}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.status}>{user.status || 'online'}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};