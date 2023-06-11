import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './src/navigations/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import Provider from './src/components/Provider';

export default function App() {
  return (
    <Provider>
      <StackNavigation />
    </Provider>
  )
};
