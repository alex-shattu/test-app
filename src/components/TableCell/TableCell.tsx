import React, { memo } from 'react';
import { Text, View, ViewStyle } from 'react-native';

const TableCell = ({ children, style }: { children: String; style: ViewStyle }) => (
  <View style={style}>
    <Text>{children}</Text>
  </View>
);

export default memo(TableCell);
