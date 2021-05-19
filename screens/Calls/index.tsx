import * as React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import styles from './styles';

export default () => (
  <View style={styles.container}>
    <Text style={styles.title}>Calls</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <EditScreenInfo path="/screens/CallsScreen.tsx" />
  </View>
);

