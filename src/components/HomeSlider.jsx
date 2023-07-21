import React from 'react-native';
import {images} from '../assets/images/Index';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from 'react-native';


const HomeSlider = () => {
  const height = Dimensions.get('window').height;
  return (
    <View>
      <View
        style={{
          backgroundColor: '#000',
          margin: 10,
          opacity: 0.5,
          borderRadius: 35,
        }}>
        <ImageBackground
          resizeMode="cover"
          style={styles.sliderWrapper}
          imageStyle={{opacity: 0.5, borderRadius: 35}}
          source={images.homeSlideImage}>
          <View style={{width: height / 4.1}}>
            <Text style={styles.sliderHeading}>
              The Most Relaxing to Your Productivity
            </Text>
            <TouchableOpacity style={styles.sliderButton}>
                <Text style={{color:'#b59f84',textAlign:'center'}}>
                    Read More
                </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  sliderHeading: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    minHeight: 175,
  },
  sliderButton: {
    padding:10,
    backgroundColor: '#fff',
    borderRadius:100,
    display:'inline'
  },
});

export default HomeSlider;