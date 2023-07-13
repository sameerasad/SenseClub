import {Text, StyleSheet} from 'react-native';
import React from 'react';

const CommonText = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default CommonText;
