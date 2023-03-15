import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LayoutProps } from './layout.types';

export default function Layout({ children }: LayoutProps) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
