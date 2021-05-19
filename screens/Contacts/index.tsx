import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import ContactListItem from '../../components/ContactListItem';
import { Text, View } from '../../components/Themed';
import useFetch from '../../hooks/useFetch';
import { User } from '../../types';
import styles from './styles';

export default () => {
  const { response, error } = useFetch<User[]>('getUsers');

  return (
    <View style={styles.container}>
      {error && <Text>Error</Text>}
      {!response && <Text>Loading...</Text>}
      {response && (
        <FlatList
          renderItem={({ item }) => <ContactListItem user={item} />}
          keyExtractor={({ id }) => id}
          style={styles.list}
          data={response}
        />
      )}

    </View>
  );
};
