import React from 'react';
import {Pressable, Text} from 'react-native';
import type {PressableProps} from 'react-native';

import styles from './button.styles';

type ButtonProps = {} & PressableProps & React.PropsWithChildren;

const Button = ({children, ...props}: ButtonProps) => {
  if (typeof children === 'string') {
    children = <Text>{children}</Text>;
  }

  return (
    <Pressable style={styles.container} {...props}>
      {children}
    </Pressable>
  );
};

export default Button;
