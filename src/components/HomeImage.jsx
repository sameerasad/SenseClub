import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Images,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../../assets/images/Index';

const HomeImage = () => {
  const height = Dimensions.get('window').height;
  return (
    <View style={{ backgroundColor: '#000',
     margin: 0,
     borderRadius: 20,}}>
         <ImageBackground
      resizeMode="cover"
      style={Styles.sliderWrapper}
      imageStyle={{opacity: 0.5, borderRadius: 25}}
      source={require('../assets/images/homeSlideImage.jpg')}>
      <View style={{height: height / 2,justifyContent:'space-evenly',alignItems:'flex-end',}}>
      <View style={{width:150,justifyContent:'space-between' }}>
      <Text style={Styles.sliderHeading}>
          The Most
           Relaxing to Your
            Productivity
        </Text>
        <TouchableOpacity style={Styles.sliderButton}>
          <Text style={{color: '#b59f84', textAlign: 'center',fontFamily:"Poppins-Light"}}>Read More</Text>
        </TouchableOpacity>
      </View>
      
      </View>
    </ImageBackground>
    </View>
   
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
  
    minHeight: 175,
    textAlignVertical:'center',
    fontFamily:'Poppins-Bold'
    
  },
  sliderButton: {
    paddingVertical: 5,
    paddingHorizontal:25,
    backgroundColor: '#fff',
    borderRadius: 30,
    display: 'inline',
    borderColor: '#b59f84',
    borderWidth: 1,
  },
});

export default HomeImage;
