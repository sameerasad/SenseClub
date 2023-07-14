import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const windowHeight = Dimensions.get('screen').height;

const OfferCard = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        imageStyle={{borderRadius: 35,opacity:0.8, backgroundColor:'black' }}
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../assets/images/exploreScrollImage.jpg')}
        resizeMode="cover">
        <View style={{flexDirection: 'row-reverse',paddingBottom:20}}>
          <Text style={{backgroundColor: 'pink',color:'white',fontWeight:'bold',paddingLeft:5,paddingRight:5}}>Giveaways</Text>
        </View>
        <View style={{flexDirection: 'row',paddingLeft:10,paddingTop:30}}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '900'}}>
            Giveaway Prize!!! - 12/12/2020
          </Text>
        </View>
        <View style={{flexDirection: 'row',alignItems:'center',paddingLeft:10,paddingTop:0}}>

          <Image
              style={{width: 20, height: 20,tintColor: 'white'}}
              source={require('../assets/images/user.png')}
            />
            <Text style={{color:'white',fontWeight:'bold',marginLeft:8,marginTop:3}}>SenseClub</Text>
            <Text style={{color:'white',fontWeight:'bold'}}  >  .  </Text>
            <Image
              style={{width: 20, height: 20,tintColor: 'white',marginLeft:8,marginTop:6}}
              source={require('../assets/images/view.png')}
            />
            <Text style={{color:'white',fontWeight:'bold',marginLeft:8,marginTop:5}} >
                44
            </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,


    borderRadius: 35,
    flexDirection: 'row',
    height: windowHeight / 4.5,
  },
});
export default OfferCard;
