import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

type LayoutProps = React.PropsWithChildren & SafeAreaViewProps;

export default function Layout({ children }: LayoutProps) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
