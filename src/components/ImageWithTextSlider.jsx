import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';


  const ImageWithText = ()=>{
    return(
        <View style={styles.textWithImageSlider}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 35, height: 35}}
            source={require('../assets/images/circular-avatar.png')}
          />
          <Text style={{paddingLeft: 10, fontSize: 18, fontWeight: 500}}>
            Hi im testing Tile length of this
          </Text>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
  
    textWithImageSlider: {
      backgroundColor: '#E5E5E5',
      borderRadius: 30,
      paddingVertical: 5,
      paddingHorizontal: 15,
      marginTop:40,
    },
  });
  
  export default ImageWithText;