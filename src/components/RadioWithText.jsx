import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

const RadioWithText = ({changeValue, close, arr}) => {
  const [selectedRadio, setSelectedRadio] = useState(0);
  console.log(arr, 'ppp');
  return (
    <View style={Styles.main}>
      {arr?.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSelectedRadio(item.id);
            changeValue(item.name);
            close();
          }}>
          <View style={Styles.Row}>
            <View style={Styles.radioBtton}>
              {selectedRadio === item?.id ? (
                <View style={Styles.radiobg} />
              ) : null}
            </View>
            <Text style={Styles.RadioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'start',
    marginTop: 15,
  },
  RadioText: {
    fontSize: 15,

    fontFamily: 'Poppins-Medium',
  },
  radioBtton: {
    borderColor: '#b59f84',
    borderRadius: 30,
    width: 20,
    height: 20,
    borderWidth: 2,
    marginBottom: 4,
    marginRight: 4,
    marginTop: 4,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobg: {
    backgroundColor: '#b59f84',
    width: 10,
    height: 10,
    borderRadius: 20,
    margin: 3,
  },
});

export default RadioWithText;
