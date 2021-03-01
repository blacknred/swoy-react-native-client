import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import LinkingConfiguration from './LinkingConfiguration';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { RootStackParamList, Screen } from '../types';
import TopTabNavigator from './TopTabNavigator';
import Colors from '../constants/Colors';
import styles from './styles';

type NavigationProps = {
  colorScheme: NonNullable<ColorSchemeName>
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

export default ({ colorScheme }: NavigationProps) => (
  <NavigationContainer
    linking={LinkingConfiguration}
    theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
  >
    <RootNavigator colorScheme={colorScheme} />
  </NavigationContainer>
);

function RootNavigator({ colorScheme }: NavigationProps) {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: Colors[colorScheme].background,
      headerTitleStyle: styles.headerTitleStyle,
      headerTitleAlign: 'left',
      // headerShown: false,
      headerStyle: {
        backgroundColor: Colors[colorScheme].tint,
        shadowOpacity: 0,
        elevation: 0
      },
    }}>
      <Stack.Screen
        name={Screen.Root}
        component={TopTabNavigator}
        options={{
          title: 'Swoy',
          headerRight: RootHeaderToolbar,
          headerTintColor: Colors.light.background,
        }}
      />
      <Stack.Screen
        name={Screen.ChatRoom}
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params?.name,
          headerRight: ChatRoomHeaderToolbar,
          headerTintColor: Colors.light.background,
        })}
      />
      <Stack.Screen
        name={Screen.Contacts}
        component={ContactsScreen}
        options={({ route }) => ({
          title: route.params?.name,
          headerRight: ChatRoomHeaderToolbar,
          headerTintColor: Colors.light.background,
        })}
      />
      <Stack.Screen
        name={Screen.NotFound}
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}


const RootHeaderToolbar = () => (
  <View style={styles.rootHeaderToolbar}>
    <Octicons name="search" size={22} color={'white'} />
    <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
  </View>
)

const ChatRoomHeaderToolbar = () => (
  <View style={styles.chatRoomHeaderToolbar}>
    <FontAwesome5 name="video" size={22} color={'white'} />
    <MaterialIcons name="call" size={22} color={'white'} />
    <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
  </View>
)




