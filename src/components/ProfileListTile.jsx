import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Timer from '../assets/Timer.svg';
import Heart from '../assets/Heart.svg';
import Frame from '../assets/Frame.svg';
const windowHeight = Dimensions.get('screen').height;
const height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const ProfileListTile = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        alignItems: 'flex-start',
      }}>
      <ImageBackground
        resizeMode="cover"
        style={Styles.image}
        imageStyle={{borderRadius: 15}}
        source={require('../assets/images/homeSlideImage.jpg')}></ImageBackground>

      <View style={{width: Width * 0.5, margin:5}}>
        <Text
          style={{
            textAlign: 'left',
          
            fontSize: 16,
            color: 'black',
            fontFamily:'Poppins-SemiBold',
          }}>
          Are exfoliating gloves good for body acne?
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
          {/* <Image
            style={{width: 10, height: 10}}
            source={require('../assets/images/ColoredTimer.png')}
          /> */}
          <Timer width={12} height={12} fill={"any color"} />
          <Text style={{fontSize: 13, marginLeft: 5,marginTop:5,fontFamily:'Poppins-Light'}}>
            10hrs Ago
          </Text>
        <View style={{paddingLeft:5}}><Heart  width={12} height={12} fill={"any color"}/></View>

          <Text style={{fontSize: 13, marginLeft: 2,fontFamily:'Poppins-Light',marginTop:4}}>
            3.3k
          </Text>
          {/* <Image
            style={{width: 12, height: 12, marginLeft: 10}}
            source={require('../assets/images/ColoredFrame.png')}
          /> */}
          <View style={{paddingLeft:5}}><Frame  width={12} height={12} fill={"any color"}/></View>
       
          <Text style={{fontSize: 13, marginLeft: 5,fontFamily:'Poppins-Light',marginTop:4}}>
            425
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              borderWidth: 1,
              paddingVertical: 0,
              paddingHorizontal: 12,
              borderRadius: 20,
            }}>
            <Text style={{fontFamily:'Poppins-Medium'}}>General</Text>
          </View>
          <Image
            style={{width: 15, height: 15, marginLeft: 5}}
            source={require('../assets/images/user.png')}
          />
          <Text style={{fontSize: 14, marginLeft: 2,marginTop:4,fontFamily:'Poppins-SemiBold'}}>
            Jessienatural
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ProfileListTile;

const Styles = StyleSheet.create({
  sliderWrapper: {
    borderRadius: 6,
    justifyContent: 'center',

    width: Width / 3.7,
    height: height / 6.5,
  },
  image: {
    borderRadius: 6,
    marginTop: 5,
    justifyContent: 'center',
    width: Width * 0.3,
    height: height / 6.1,
  },
});
