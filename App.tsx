import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import AuthScreen from './screens/Auth';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return !isLoadingComplete ? null : (
    <SafeAreaProvider>
      <AuthScreen render={() => <Navigation colorScheme={colorScheme} />} />
      <StatusBar />
    </SafeAreaProvider>
  );
}
