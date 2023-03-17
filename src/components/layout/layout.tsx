import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@constants';

import styles from './layout.styles';
import { LayoutProps } from './layout.types';

export default function Layout({ children }: LayoutProps) {
  return (
    <SafeAreaView edges={['right', 'bottom', 'left']} style={styles.wrapper}>
      <StatusBar animated barStyle="light-content" backgroundColor={Colors.grey} />
      {children}
    </SafeAreaView>
  );
}
