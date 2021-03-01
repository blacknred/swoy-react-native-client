import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import AuthScreen from './screens/AuthScreen';
import useAuth from './hooks/useAuth';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [isAuthenticated, _, auth] = useAuth();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) return null;
  if (!isAuthenticated) return <AuthScreen onLogin={auth} />;
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
}
