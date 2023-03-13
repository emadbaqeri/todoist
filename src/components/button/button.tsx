import React from 'react';
import { Pressable } from 'react-native';
import type { PressableProps } from 'react-native';

import styles from './button.styles';

type ButtonProps = PressableProps & React.PropsWithChildren;

function Button({ children, ...props }: ButtonProps) {
  return (
    <Pressable style={styles.container} {...props}>
      {children}
    </Pressable>
  );
}

export default Button;
