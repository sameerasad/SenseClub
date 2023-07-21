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
import {
  CommonHeader,
  HomeImage,
  ImageWithTextSlider,
} from '../../components/Index';
const windowHeight = Dimensions.get('screen').height;
const height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const ProfileListTile = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        padding: 0,
        alignItems: 'flex-start',
      }}>
      <ImageBackground
        resizeMode="cover"
        style={Styles.image}
        imageStyle={{borderRadius: 15}}
        source={require('../assets/images/homeSlideImage.jpg')}></ImageBackground>

      <View style={{width: Width * 0.5, margin: 10}}>
        <Text
          style={{
            textAlign: 'left',
            fontWeight: 500,
            fontSize: 18,
            color: 'black',
          }}>
          Are exfoliating gloves good for body acne?
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Image
            style={{width: 12, height: 12}}
            source={require('../assets/images/coloredTimer.png')}
          />
          <Text style={{fontSize: 13, fontWeight: 400, marginLeft: 5}}>
            10hrs Ago
          </Text>
          <Image
            style={{width: 12, height: 12, marginLeft: 10}}
            source={require('../assets/images/heart.png')}
          />
          <Text style={{fontSize: 13, fontWeight: 400, marginLeft: 2}}>
            3.3k
          </Text>
          <Image
            style={{width: 12, height: 12, marginLeft: 10}}
            source={require('../assets/images/Frame.png')}
          />
          <Text style={{fontSize: 13, fontWeight: 400, marginLeft: 5}}>
            425
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              borderWidth: 1,
              paddingVertical: 2,
              paddingHorizontal: 15,
              borderRadius: 12,
            }}>
            <Text>General</Text>
          </View>
          <Image
            style={{width: 15, height: 15, marginLeft: 5}}
            source={require('../assets/images/user.png')}
          />
          <Text style={{fontWeight: 'bold', fontSize: 14, marginLeft: 2}}>
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
    width: Width * 0.33,
    height: height / 6.1,
  },
});
