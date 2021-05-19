import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList, Screen } from '../../types';
import styles from './styles';

export default ({ navigation }: StackScreenProps<RootStackParamList, Screen.NotFound>) => (
  <View style={styles.container}>
    <Text style={styles.title}>This screen doesn't exist.</Text>
    <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
      <Text style={styles.linkText}>Go to home screen!</Text>
    </TouchableOpacity>
  </View>
);

