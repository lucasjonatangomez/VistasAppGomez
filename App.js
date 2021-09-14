import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import React from 'react';
import ServiceNavigator from './navigation/ServiceNavigator';
import { StatusBar } from 'expo-status-bar';
import store from './store';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <ServiceNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
