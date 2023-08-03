import {Text, StyleSheet} from 'react-native';
import React from 'react';

const CommonText = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontFamily:'Poppins-Bold',
    marginTop: 20,
    fontSize:17,
    
  },
});

export default CommonText;
