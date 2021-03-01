import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ContactListItem from '../components/ContactListItem';
import { View } from '../components/Themed';
import { User } from '../types';
import { Users } from '../api';

export default () => {
  const [contacts, setContacts] = useState<User[]>([]);

  useEffect(() => {
    async function getContacts() {
      try {
        const users = await Users.list();
        setContacts(users);
      } catch (e) { }
    }

    getContacts();
  }, [setContacts]);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        style={styles.list}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <ContactListItem user={item} />}
      />
    </View>
  );
};

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
