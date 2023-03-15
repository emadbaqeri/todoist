import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './button.styles';
import { ButtonProps } from './button.types';

function Button({ children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      {children}
    </TouchableOpacity>
  );
}

export default Button;
