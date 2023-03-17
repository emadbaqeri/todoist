import React from 'react';
import { View } from 'react-native';

import styles from './header.styles';
import { HeaderProps } from './header.types';

const Header = ({ children, style, ...props }: HeaderProps) => (
  <View style={[styles.container, style]} {...props}>
    {children}
  </View>
);

export default Header;
