import {View, Text, Dimensions, Image, ImageBackground} from 'react-native';
import React from 'react';
import {images} from '../../assets/images/Index';

const Profie = () => {
  const height = Dimensions.get('window').height;
  return (
    <View style={{flex: 1, padding: 10}}>
      <View
        style={{
          height: height / 3.5,
          borderRadius: 30,
          margin: 20,

          backgroundColor: 'red',
        }}>
        <View
          style={{
            height: '30%',
            backgroundColor: 'yellow',
            borderTopLeftRadius: 30,
            borderTopEndRadius: 30,
          }}>
          <ImageBackground source={images.profileBg}></ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default Profie;
