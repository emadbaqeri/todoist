import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './main.styles';

function HomeScreen() {
  return <SafeAreaView style={styles.wrapper} />;
}

const { Navigator: AppNavigator, Screen: AppScreen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <AppScreen name="Home" component={HomeScreen} />
      </AppNavigator>
    </NavigationContainer>
  );
}
