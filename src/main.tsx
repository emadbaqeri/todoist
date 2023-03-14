import React from 'react';
<<<<<<< Updated upstream
import { Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
||||||| Stash base

import { SafeAreaView } from 'react-native-safe-area-context';
=======
>>>>>>> Stashed changes
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< Updated upstream
import { Button } from './components';
import styles from './main.styles';
||||||| Stash base
import styles from './main.styles';
=======
>>>>>>> Stashed changes

<<<<<<< Updated upstream
function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Home Screen</Text>
      <Button onPress={() => {}}>Hello There</Button>
    </SafeAreaView>
  );
}
||||||| Stash base
function HomeScreen() {
  return <SafeAreaView style={styles.wrapper} />;
}
=======
import { HomeScreen } from '@screens';
>>>>>>> Stashed changes

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
