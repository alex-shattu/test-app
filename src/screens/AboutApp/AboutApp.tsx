import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AboutAppProps } from 'constants/types';

const AboutApp = ({}: AboutAppProps) => {
  return (
    <View style={styles.container}>
      <Text>About App</Text>
    </View>
  );
};

export default AboutApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
