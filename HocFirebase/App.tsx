/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppScreens from './src/Screens/AppScreens';

function App(): JSX.Element {
  return (
    <View>
      <AppScreens />
    </View>
  );
}

export default App;
