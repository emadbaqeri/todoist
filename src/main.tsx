import React from 'react';
import { Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from './components';
import styles from './main.styles';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Home Screen</Text>
      <Button onPress={() => {}}>Hello There</Button>
    </SafeAreaView>
  );
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
