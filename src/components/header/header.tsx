import { View } from 'react-native';
import React from 'react';

import styles from './header.styles';
import { HeaderProps } from './header.types';

const Header = ({ children, ...props }: HeaderProps) => (
  <View style={styles.container} {...props}>
    {children}
  </View>
);

export default Header;
