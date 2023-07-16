import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './src/navigations/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import Provider from './src/components/Provider';

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Sending `onAnimatedValueUpdate` with no listeners registered.",]);


export default function App() {
  return (
    <Provider>
      <StatusBar style='dark' />
      <StackNavigation />
    </Provider>
  )
};
