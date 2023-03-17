import React from 'react';
import { View, Text } from 'react-native';

import { TodoProps } from './todo.types';

const Todo = ({ children }: TodoProps) => (
  <View>
    <Text>{children}</Text>
  </View>
);

export default Todo;
