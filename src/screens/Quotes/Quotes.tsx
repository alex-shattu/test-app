import { QuotesProps, QuotesStatuses } from 'constants/types';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import { ScrollView } from 'react-native-gesture-handler';
import TableCol from 'components/TableCol';
import useInterval from 'helpers/useInterval';

const Quotes = ({ navigation, quotes }: QuotesProps) => {
  const [delay, setDelay] = useState<number | null>(5000);

  useEffect(() => {
    quotes.getQuotesAsync();
  }, [quotes]);

  useInterval(() => {
    quotes.getQuotesAsync();
  }, delay);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setDelay(null);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDelay(5000);
    });
    return unsubscribe;
  }, [navigation]);

  if (quotes.data.length === 0 && quotes.isFetching) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {quotes.isError && (
        <View style={styles.errorRow}>
          <Text>Request failed...</Text>
        </View>
      )}
      <ScrollView horizontal style={styles.container}>
        <ScrollView contentContainerStyle={styles.columns}>
          <TableCol data={quotes.data} field="name" />
          <TableCol data={quotes.data} field="last" />
          <TableCol data={quotes.data} field="highestBid" />
          <TableCol data={quotes.data} field="percentChange" />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columns: {
    flexDirection: 'row',
  },
  errorRow: {
    padding: 4,
    backgroundColor: '#F00',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  evenRow: {
    backgroundColor: '#eee',
    padding: 4,
  },
  oddRow: {
    backgroundColor: '#ccc',
    padding: 4,
  },
  notLastCell: {
    paddingRight: 5,
  },
  spinnerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default inject('quotes')(observer(Quotes));
// export default Quotes;
