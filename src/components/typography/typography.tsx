import React from 'react';
import { Text } from 'react-native';

import styles from './typography.styles';
import { TypographyProps } from './typography.types';

const Typography = ({ children, style, ...props }: TypographyProps) => (
  <Text style={[styles.text, style]} {...props}>
    {children}
  </Text>
);

export default Typography;
