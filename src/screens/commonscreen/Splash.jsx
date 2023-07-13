import React, {useRef, useEffect} from 'react';
import {Image, StyleSheet, View, Animated} from 'react-native';
import {images} from '../../assets/images/Index';

const SplashScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(1000)).current;
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(fadeAnimOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [fadeAnim]);

  return (
    <View style={styles.splachBackground}>
      <Animated.View
        style={{
          flex: 1,
          marginTop: fadeAnim,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: fadeAnimOpacity,
        }}>
        <Image style={{width: 150, height: 83}} source={images.logo} />
      </Animated.View>
      <Animated.View style={{opacity: fadeAnimOpacity}}>
        <Image source={images.senseClub} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splachBackground: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#937b64',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
