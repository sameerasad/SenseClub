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
              <Text style={{fontSize: 19, fontWeight: '500', color: 'black'}}>
                @UnpluggedEssentials
              </Text>
              <Text style={{fontSize: 15, fontWeight: '300'}}>
                Jessie James
              </Text>
              <Text
                style={{textAlign: 'center', fontWeight: '400', fontSize: 14}}>
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
                  source={require('../../assets/images/facebook.png')}
                />
                <Image
                  style={Styles.shareICons}
                  source={require('../../assets/images/twitter.png')}
                />
                <Image
                  style={Styles.shareICons}
                  source={require('../../assets/images/pinterest.png')}
                />
                <Image
                  style={Styles.shareICons}
                  source={require('../../assets/images/linkedin.png')}
                />
                <Image
                  style={Styles.shareICons}
                  source={require('../../assets/images/reddit.png')}
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
            padding: 10,
            margin: 0,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: '900', color: 'black'}}>8</Text>
            <Text style={{fontWeight: '400', color: 'black'}}>Posts</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: '900', color: 'black'}}>231</Text>
            <Text style={{fontWeight: '400', color: 'black'}}>Followers</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: '900', color: 'black'}}>1840</Text>
            <Text style={{fontWeight: '400', color: 'black'}}>Likes</Text>
          </View>
        </View>

        {/* <View
      style={{
        backgroundColor: '#E5E5E5',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:0
  
      }}>
<View style={{flexDirection:'row',margin:15,padding:0,alignItems:'',justifyContent:''}}>
 <ImageBackground
    resizeMode="cover"
    style={Styles.image}
    imageStyle={{ borderRadius: 20}}
    source={require('../../assets/images/homeSlideImage.jpg')}>
  
  </ImageBackground>

  <View style={{width:Width*0.53,margin:10}}>
    <Text style={{textAlign:'start',fontWeight:500,fontSize:18,color:'black'}}>Are exfoliating gloves good for body acne?</Text>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
    <Image
          style={{width: 12, height: 12,}}
          source={require('../../assets/images/time.png')}
        />
        <Text style={{fontSize:13,fontWeight:400,marginLeft: 5}}>10hrs Ago</Text>
        <Image
          style={{width: 12, height: 12,marginLeft: 10,}}
          source={require('../../assets/images/heart.png')}
        />
        <Text style={{fontSize:13,fontWeight:400,marginLeft: 2}}>3.3k</Text>
        <Image
          style={{width: 12, height: 12,marginLeft: 10}}
          source={require('../../assets/images/Frame.png')}
        />
        <Text style={{fontSize:13,fontWeight:400,marginLeft: 5}}>425</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
    
      <View style={{borderWidth:1,paddingVertical:2,paddingHorizontal:15,borderRadius:12}}>
        <Text>General</Text>
       
      </View>
      <Image
          style={{width: 15, height: 15,marginLeft:5}}
          source={require('../../assets/images/user.png')}
        />
        <Text style={{fontWeight:'bold',fontSize:14,marginLeft:2}}>Jessienatural</Text>
    </View>
  </View>
 
 </View>
      </View> */}
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
