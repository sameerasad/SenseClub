import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {CommonText} from './Index';

const Input = ({heading, placeHolderText, isPassword = false}) => {
  return (
    <View>
      <CommonText text={heading} />
      <TextInput
        secureTextEntry={isPassword}
        // placeholder={placeHolderText}
        selectionColor={'#b59f84'}
        style={styles.InputField}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  InputField: {
    padding: 10,
    borderWidth: 1,
    width: '100%',
    borderRadius: 35,
    borderColor: '#b59f84',
    marginTop: 10,
  },
});

export default Input;
