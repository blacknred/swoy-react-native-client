import * as React from 'react';
import { Fontisto, } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TopTabParamList, TabParamList, RootTab } from '../types';
import useColorScheme from '../hooks/useColorScheme';
import CameraScreen from '../screens/CameraScreen';
import ChatsScreen from '../screens/ChatsScreen';
import StatusScreen from '../screens/StatusScreen';
import CallsScreen from '../screens/CallsScreen';
import Colors from '../constants/Colors';
import styles from './styles';

const TopTab = createMaterialTopTabNavigator<TopTabParamList>();
const TabStack = createStackNavigator<TabParamList>();

export default function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName={RootTab.Chats}
      tabBarOptions={{
        activeTintColor: Colors.light.background,
        style: {
          backgroundColor: Colors[colorScheme].tint
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
        },
        labelStyle: styles.topTabLabelStyle,
        showIcon: true,
      }}
    >
      <TopTab.Screen
        name={RootTab.Camera}
        component={TabOneNavigator}
        options={{
          tabBarIcon: TabBarIcon,
          tabBarLabel: () => null,
        }}
      />
      <TopTab.Screen name={RootTab.Chats} component={TabTwoNavigator} />
      <TopTab.Screen name={RootTab.Status} component={TabThreeNavigator} />
      <TopTab.Screen name={RootTab.Calls} component={TabFourNavigator} />
    </TopTab.Navigator>
  );
}

const TabBarIcon = ({ color }: any) => <Fontisto name="camera" color={color} size={19} />;

const TabOneNavigator = () => (
  <TabStack.Navigator>
    <TabStack.Screen
      name="CameraScreen"
      component={CameraScreen}
      options={{ headerTitle: RootTab.Camera }}
    />
  </TabStack.Navigator>
);

const TabTwoNavigator = () => (
  <TabStack.Navigator>
    <TabStack.Screen
      name="ChatsScreen"
      component={ChatsScreen}
      options={{ headerTitle: RootTab.Chats }}
    />
  </TabStack.Navigator>
);

const TabThreeNavigator = () => (
  <TabStack.Navigator>
    <TabStack.Screen
      name="StatusScreen"
      component={StatusScreen}
      options={{ headerTitle: RootTab.Status }}
    />
  </TabStack.Navigator>
);

const TabFourNavigator = () => (
  <TabStack.Navigator>
    <TabStack.Screen
      name="CallsScreen"
      component={CallsScreen}
      options={{ headerTitle: RootTab.Calls }}
    />
  </TabStack.Navigator>
);

