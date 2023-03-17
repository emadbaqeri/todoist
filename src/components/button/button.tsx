import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './button.styles';
import { ButtonProps } from './button.types';

const Button = ({ children, style, ...props }: ButtonProps) => (
  <TouchableOpacity style={[styles.container, style]} {...props}>
    {children}
  </TouchableOpacity>
);

export default Button;
