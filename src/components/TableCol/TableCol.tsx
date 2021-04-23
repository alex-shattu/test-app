import React from 'react';
import { StyleSheet, View } from 'react-native';
import TableCell from 'components/TableCell';
import { Quote } from 'constants/types';

const TableCol = ({
  data = [],
  field,
}: {
  data: Quote[];
  field: 'name' | 'last' | 'highestBid' | 'percentChange';
}) => {
  return (
    <View style={styles.col}>
      {data.map((item: Quote, index) => (
        <TableCell style={index % 2 ? styles.oddRow : styles.evenRow} key={item.key}>
          {item[field]}
        </TableCell>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    paddingHorizontal: 1,
  },
  evenRow: {
    backgroundColor: '#eee',
    padding: 4,
    marginVertical: 1,
  },
  oddRow: {
    backgroundColor: '#ccc',
    padding: 4,
    marginVertical: 1,
  },
});

export default TableCol;
