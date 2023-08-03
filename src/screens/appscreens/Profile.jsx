import {
  View,
  Image,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

import React from 'react';

import ProfileTabViewExample from '../../components/ProfileTabViewExample';
const height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const Profile = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{backgroundColor: '#E5E5E5', margin: 10, borderRadius: 20}}>
          <ImageBackground
            resizeMode="cover"
            style={Styles.sliderWrapper}
            imageStyle={{
              height: 100,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
            source={require('../../assets/images/profileBgImage.png')}>
            <View
              style={{
                height: height / 2.8,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../assets/images/profilePicture.png')}
              />
              <Text style={{fontSize: 19, color: 'black',fontFamily:'Poppins-SemiBold'}}>
                @UnpluggedEssentials
              </Text>
              <Text style={{fontSize: 15,fontFamily:'Poppins-Light'}}>
                Jessie James
              </Text>
              <Text
                style={{textAlign: 'center',  fontSize: 14,fontFamily:'Poppins-Light'}}>
                The perfect collection of hair products packed with nourishing
                vitamins to make your hair shine!
              </Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',

                  justifyContent: 'space-between',
                }}>
                <Image
                  style={Styles.shareICons}
                  source={require('../../assets/images/facebookIcon.png')}
                />
             
                <Image
                  style={Styles.shareICons}
                  source={require('../../assets/images/instagram.png')}
                />
                <Image
                  style={Styles.shareICons}
                  source={require('../../assets/images/linkedinIcon.png')}
                />
                <Image
                  style={Styles.shareICons}
                  source={require('../../assets/images/tiktok.png')}
                />
                 <Image
                  style={Styles.shareICons}
                  source={require('../../assets/images/youtube.png')}
                />
              </View>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            backgroundColor: '#E5E5E5',
            borderRadius: 30,
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 2,
            margin: 10,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{ color: 'black',fontFamily:'Poppins-Bold'}}>8</Text>
            <Text style={{ color: 'black',fontFamily:'Poppins-Medium'}}>Posts</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{ color: 'black',fontFamily:'Poppins-Bold'}}>231</Text>
            <Text style={{ color: 'black',fontFamily:'Poppins-Medium'}}>Followers</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{ color: 'black',fontFamily:'Poppins-Bold'}}>1840</Text>
            <Text style={{ color: 'black',fontFamily:'Poppins-Medium'}}>Likes</Text>
          </View>
        </View>
      </View>
      <View style={{height: height / 10}} />
      <ProfileTabViewExample />
    </>
  );
};

const Styles = StyleSheet.create({
  sliderWrapper: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderHeading: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    minHeight: 175,
    textAlignVertical: 'center',
    fontFamily:'Poppins'
  },
  sliderButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    borderRadius: 30,
    display: 'inline',
    borderColor: '#b59f84',
    borderWidth: 1,
  },
  shareICons: {
    width: 35,
    height: 35,
    marginLeft: 5,
  },
  image: {
    borderRadius: 6,
    justifyContent: 'center',

    width: Width * 0.33,
    height: height * 0.18,
  },
});

export default Profile;
