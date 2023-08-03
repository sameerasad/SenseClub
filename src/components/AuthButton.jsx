import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const AuthButton = ({buttonText, textColor, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.button}>
      <Text style={{color: textColor,fontFamily:'Poppins-SemiBold'}}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#b59f84',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderColor: '#b59f84',
    borderWidth: 2,
    borderRadius: 35,
  },
});

export default AuthButton;
