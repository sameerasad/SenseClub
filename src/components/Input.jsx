import {View, Text, TextInput, StyleSheet} from 'react-native';
import React,{useState} from 'react';
import {CommonText} from './Index';

const Input = ({heading, placeHolderText, isPassword = false,onDataChanged }) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (text) => {
    setInputData(text);
    // Call the callback function and pass the data as an argument
    onDataChanged(text);
  };
  return (
    <View>
      <CommonText text={heading} />
      <TextInput
        secureTextEntry={isPassword}
        value={inputData}
        onChangeText={(e)=>handleInputChange(e)}
        // placeholder={placeHolderText}
        selectionColor={'#b59f84'}
        style={styles.InputField}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  
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
